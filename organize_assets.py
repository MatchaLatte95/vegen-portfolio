"""
Rapikan folder assets/ menjadi sub-folder per kategori.

Cara pakai (dari folder situs, yang berisi index.html dan folder assets/):
    python organize_assets.py --dry-run   # lihat dulu apa yang akan dipindah
    python organize_assets.py             # jalankan

Aman dijalankan berulang kali. File yang sudah ada di tempat yang benar tidak
disentuh, dan tidak ada file yang dihapus kecuali duplikat yang isinya sama persis.

Struktur hasil:
    assets/
      profile/profile.webp
      cv/cv.webp
      certificates/1.webp ... 8.webp
      tools/figma.webp ...
      projects/<nama>/cover.webp | 1.webp, 2.webp ...
      photos/<album>/1.webp ...
      videos/<nama>.webp
      experience/<nama>/1.webp ...
      _unused/            (file lama yang tidak dipakai lagi)
"""
import filecmp
import re
import shutil
import sys
from pathlib import Path

ASSETS = Path(__file__).resolve().parent / "assets"
DRY = "--dry-run" in sys.argv

# Gambar proyek yang sudah tidak dipakai (foto lama / proyek yang dihapus)
UNUSED = re.compile(r"^(voyago-\d+|rudy-phone|rudy-mascot|cinevo-\d+|teduuh-\d+)$")
EXPERIENCE = re.compile(r"^(mentor|fyp|regional|kathina|narasi|bench|kmbd|klifonara)(?:-(\d+))?$")

# (pola nama file tanpa ekstensi) -> fungsi yang menghasilkan path tujuan relatif ke assets/
RULES = [
    (re.compile(r"^profile$"), lambda m, ext: f"profile/profile{ext}"),
    (re.compile(r"^cv$"), lambda m, ext: f"cv/cv{ext}"),
    (re.compile(r"^cert-(\d+)$"), lambda m, ext: f"certificates/{m[1]}{ext}"),
    (re.compile(r"^tool-(.+)$"), lambda m, ext: f"tools/{m[1]}{ext}"),
    (re.compile(r"^photo-([a-z]+)-(\d+)$"), lambda m, ext: f"photos/{m[1]}/{m[2]}{ext}"),
    (re.compile(r"^video-([a-z]+)-thumb$"), lambda m, ext: f"videos/{m[1]}{ext}"),
    (re.compile(r"^(voyago|rudy|cinevo|nudge|kenang)-thumb$"), lambda m, ext: f"projects/{m[1]}/cover{ext}"),
    (re.compile(r"^(identicare|angin|dash)-(\d+)$"), lambda m, ext: f"projects/{m[1]}/{m[2]}{ext}"),
]


def target_for(stem, ext):
    if UNUSED.match(stem):
        return f"_unused/{stem}{ext}"
    for pattern, build in RULES:
        m = pattern.match(stem)
        if m:
            return build(m, ext)
    m = EXPERIENCE.match(stem)
    if m:
        return f"experience/{m[1]}/{m[2] or 1}{ext}"
    return None


def main():
    if not ASSETS.is_dir():
        sys.exit(f"Folder tidak ditemukan: {ASSETS}")
    moved = skipped = 0
    for f in sorted(ASSETS.iterdir()):  # hanya file di level atas assets/
        if not f.is_file():
            continue
        rel = target_for(f.stem, f.suffix.lower())
        if rel is None:
            print(f"  ?  dilewati (tidak dikenali): {f.name}")
            skipped += 1
            continue
        dest = ASSETS / rel
        if dest.exists():
            if filecmp.cmp(f, dest, shallow=False):
                print(f"  =  duplikat, dihapus: {f.name}")
                if not DRY:
                    f.unlink()
            else:
                rel = f"_unused/{f.name}"
                dest = ASSETS / rel
                print(f"  !  tujuan sudah ada dengan isi berbeda, dipindah ke {rel}")
                if not DRY:
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    shutil.move(str(f), dest)
            continue
        print(f"  →  {f.name}  →  {rel}")
        if not DRY:
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(f), dest)
        moved += 1
    print(f"\nSelesai{' (dry-run, tidak ada yang diubah)' if DRY else ''}: {moved} file dipindah, {skipped} dilewati.")


if __name__ == "__main__":
    main()
