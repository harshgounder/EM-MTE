"""Builds the self-contained assignment HTML files from src/*.template.html.
Images are embedded as base64 and waveform points are computed here, so each output is one portable file."""
import base64, math, pathlib

SRC = pathlib.Path(__file__).parent
OUT = SRC.parent

def b64(name, mime):
    return f"data:{mime};base64," + base64.b64encode((SRC / "img" / name).read_bytes()).decode()

def wave(f, yc, x0=70, w=600, A=80):
    return " ".join(f"{x0 + w*d/360:.1f},{yc - A*f(math.radians(d)):.1f}" for d in range(0, 361, 5))

subs = {
    "%%IMG_3D%%": b64("transformer3d.png", "image/png"),
    "%%IMG_EDDY%%": b64("laminated-eddy.png", "image/png"),
    "%%IMG_WIND%%": b64("winding-formats.jpg", "image/jpeg"),
    "%%PHI%%": wave(lambda t: 0.75*math.sin(t), 130),
    "%%V1%%": wave(lambda t: math.cos(t), 130),
    "%%E1A%%": wave(lambda t: -math.cos(t), 130),
    "%%E1B%%": wave(lambda t: -math.cos(t), 360),
    "%%E2B%%": wave(lambda t: -0.5*math.cos(t), 360),
}

html = (SRC / "q01.template.html").read_text()
for k, v in subs.items():
    html = html.replace(k, v)
assert "%%" not in html, "unfilled placeholder"
(OUT / "Q01-single-phase-transformer-construction-working.html").write_text(html)
print("built", len(html), "bytes")
