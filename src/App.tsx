import { useState } from "react"
import nexoraJpeg from "@/imports/WhatsApp_Image_2026-09-09_at_13.13.53.jpeg"

// ── Brand tokens ────────────────────────────────────────────────────
const BL = "#2558E8"   // Royal Blue
const NV = "#0F1E4A"   // Navy
const SL = "#64748B"   // Slate
const BG = "#F1F5F9"   // Page background
const LB = "#EEF2FF"   // Light blue tint

// ── Company constants ───────────────────────────────────────────────
const co = {
  name: "PT NEXT AURA SEJAHTERA",
  short: "NEXORA",
  tag: "Innovation Beyond Limits",
  a1: "Jl. Jend. Sudirman Kav. 45, Lt. 12",
  a2: "Jakarta Pusat, DKI Jakarta 10220",
  tel: "+62 21 5555-7890",
  fax: "+62 21 5555-7891",
  email: "info@nexora.co.id",
  web: "www.nexora.co.id",
  npwp: "12.345.678.9-012.000",
  bank: "Bank BCA – KCP Sudirman",
  rek: "1234 5678 90",
  an: "PT Next Aura Sejahtera",
}

// ── Navigation ──────────────────────────────────────────────────────
const NAV = [
  {
    group: "Corporate Identity", items: [
      { id: "logo", label: "Logo & Brand" },
      { id: "kopsurat", label: "Kop Surat" },
      { id: "stempel", label: "Stempel" },
      { id: "email", label: "Email Template" },
      { id: "kartuname", label: "Kartu Nama" },
    ],
  },
  {
    group: "Surat & Penawaran", items: [
      { id: "suratresmi", label: "Surat Resmi" },
      { id: "penawaran", label: "Surat Penawaran" },
      { id: "proposal", label: "Proposal" },
      { id: "po", label: "Purchase Order" },
      { id: "invoice", label: "Invoice" },
      { id: "kwitansi", label: "Kwitansi" },
    ],
  },
]

// ── Logo Image (from user upload) ───────────────────────────────────
function Logo({ sz = 48, v = "blue" }: { sz?: number; v?: "blue" | "white" | "navy" | "black" }) {
  const isWhite = v === "white";
  const targetColor = v === "navy" ? NV : v === "black" ? "#0F172A" : BL;

  return (
    <div style={{ 
      width: sz, 
      height: sz, 
      position: 'relative', 
      mixBlendMode: isWhite ? "screen" : "multiply", 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <img
        src={nexoraJpeg}
        alt="NEXORA"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: "scale(1.9)",
          filter: isWhite ? "none" : "invert(1)",
        }}
      />
      {!isWhite && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: targetColor,
          mixBlendMode: 'screen',
        }} />
      )}
    </div>
  )
}

// ── Wordmark ────────────────────────────────────────────────────────
function Wordmark({ color = BL, size = 24 }: { color?: string; size?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 900, fontSize: size, letterSpacing: "0.15em", color, lineHeight: 1 }}>
        NEXORA
      </span>
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: Math.max(7, size * 0.28), letterSpacing: "0.12em", color, lineHeight: 1, marginTop: size * 0.12, opacity: 0.8 }}>
        NEXT AURA SEJAHTERA
      </span>
    </div>
  )
}

// ── A4 paper shell ──────────────────────────────────────────────────
function A4({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 740, minHeight: 1040, background: "#fff", boxShadow: "0 2px 24px rgba(0,0,0,.12)", margin: "0 auto", fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#1E293B", position: "relative" }}>
      {children}
    </div>
  )
}

// ── Document letterhead header (shared) ─────────────────────────────
function DocHeader() {
  return (
    <div>
      <div style={{ background: NV, padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Logo sz={44} v="white" />
          <div>
            <Wordmark color="#fff" size={22} />
            <div style={{ color: "#93C5FD", fontSize: 9, letterSpacing: "0.12em", marginTop: 2 }}>{co.tag.toUpperCase()}</div>
          </div>
        </div>
        <div style={{ textAlign: "right", color: "#CBD5E1", fontSize: 9, lineHeight: 1.7 }}>
          <div style={{ color: "#fff", fontWeight: 600, marginBottom: 2 }}>{co.name}</div>
          <div>{co.a1}</div>
          <div>{co.a2}</div>
          <div>T: {co.tel}  F: {co.fax}</div>
          <div>{co.email}  |  {co.web}</div>
        </div>
      </div>
      <div style={{ height: 4, background: `linear-gradient(90deg, ${BL}, #60A5FA)` }} />
    </div>
  )
}

function DocFooter() {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <div style={{ height: 2, background: `linear-gradient(90deg, ${BL}, #60A5FA)` }} />
      <div style={{ background: NV, padding: "8px 40px", display: "flex", justifyContent: "space-between", color: "#94A3B8", fontSize: 8 }}>
        <span>{co.name}  |  NPWP: {co.npwp}</span>
        <span>{co.web}</span>
      </div>
    </div>
  )
}

// ── Section title chip ──────────────────────────────────────────────
function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: NV }}>{title}</h2>
      {sub && <p style={{ margin: "4px 0 0", fontSize: 12, color: SL }}>{sub}</p>}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
// PAGES
// ─────────────────────────────────────────────────────────────────────

function PageLogo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <PageTitle title="Logo & Brand" sub="Tiga variasi resmi logo NEXORA" />

      {/* Original mark */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden" }}>
        <div style={{ padding: "10px 20px", borderBottom: "1px solid #E2E8F0", fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase" }}>Logo Original (Mark)</div>
        <div style={{ padding: 32, display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ background: "#000", borderRadius: 12, width: 120, height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={nexoraJpeg} alt="NEXORA original mark" style={{ width: 88, height: 88, objectFit: "contain" }} />
          </div>
          <div style={{ fontSize: 10, color: SL, lineHeight: 1.8 }}>
            <div><b style={{ color: NV }}>Format:</b> JPEG · digunakan pada latar gelap</div>
            <div><b style={{ color: NV }}>Warna:</b> Putih #FFFFFF di atas hitam</div>
            <div><b style={{ color: NV }}>Bentuk:</b> N geometris isometrik dengan aksen berlian</div>
          </div>
        </div>
      </div>

      {/* 3 variants */}
      {[
        { label: "01 — Utama (Horizontal)", bg: "#fff", border: true, content: (
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}><Logo sz={68} v="blue" /><Wordmark color={BL} size={36} /></div>
        )},
        { label: "02 — Hitam / Monokrom", bg: "#fff", border: true, content: (
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}><Logo sz={68} v="black" /><Wordmark color="#0F172A" size={36} /></div>
        )},
        { label: "03 — Putih di Latar Navy", bg: NV, border: false, content: (
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}><Logo sz={68} v="white" /><Wordmark color="#fff" size={36} /></div>
        )},
      ].map(({ label, bg, border, content }) => (
        <div key={label} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden" }}>
          <div style={{ padding: "10px 20px", borderBottom: "1px solid #E2E8F0", fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
          <div style={{ background: bg, border: border ? undefined : "none", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 100 }}>
            {content}
          </div>
        </div>
      ))}

      {/* Palette */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: 20 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Palet Warna</div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[{ c: BL, n: "Royal Blue", v: "#2558E8" }, { c: NV, n: "Navy", v: "#0F1E4A" }, { c: "#0F172A", n: "Midnight", v: "#0F172A" }, { c: "#fff", n: "White", v: "#FFFFFF", border: true }].map(({ c, n, v, border }) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 6, background: c, border: border ? "1px solid #CBD5E1" : "none" }} />
              <div><div style={{ fontSize: 11, fontWeight: 700, color: NV }}>{n}</div><div style={{ fontSize: 10, color: SL }}>{v}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PageKopSurat() {
  return (
    <div>
      <PageTitle title="Kop Surat" sub="Template letterhead resmi perusahaan" />
      <A4>
        <DocHeader />
        <div style={{ padding: "32px 40px 120px" }}>
          <p style={{ fontSize: 10, color: SL, marginBottom: 24 }}>Nomor  : 001/NEXORA/KS/IX/2026</p>
          <div style={{ marginBottom: 32 }}>
            <p style={{ margin: 0, fontSize: 11 }}>Yth.</p>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700 }}>Bapak/Ibu [Nama Penerima]</p>
            <p style={{ margin: 0, fontSize: 11 }}>[Jabatan]</p>
            <p style={{ margin: 0, fontSize: 11 }}>[Nama Perusahaan/Instansi]</p>
            <p style={{ margin: 0, fontSize: 11 }}>di — Tempat</p>
          </div>
          <p style={{ fontSize: 11, lineHeight: 1.8, marginBottom: 16 }}>Dengan hormat,</p>
          <p style={{ fontSize: 11, lineHeight: 2, color: "#94A3B8", fontStyle: "italic" }}>
            [Area konten surat. Gunakan font Inter ukuran 11pt, spasi baris 2.0, dan margin kiri-kanan 40px. Paragraf dipisahkan dengan satu baris kosong.]
          </p>
          <div style={{ borderLeft: `3px solid ${BL}`, padding: "12px 16px", background: LB, marginTop: 24, borderRadius: "0 6px 6px 0" }}>
            <p style={{ margin: 0, fontSize: 10, color: SL }}>Area ini menunjukkan contoh blok kutipan atau penekanan informasi penting dalam surat.</p>
          </div>
          <div style={{ marginTop: 48 }}>
            <p style={{ margin: 0, fontSize: 11 }}>Hormat kami,</p>
            <p style={{ margin: "4px 0 0", fontWeight: 600, color: NV, fontSize: 11 }}>PT NEXT AURA SEJAHTERA</p>
            <div style={{ marginTop: 40, borderTop: `1px solid ${NV}`, width: 160, paddingTop: 6 }}>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 700 }}>[Nama Direktur]</p>
              <p style={{ margin: 0, fontSize: 10, color: SL }}>Direktur Utama</p>
            </div>
          </div>
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

// ── Logo NEXORA versi vektor (hasil trace dari master JPEG) ────────
// Logo asli raster tidak bisa dirender di dalam <svg> dan tidak bisa
// dipakai vendor stempel. Ini geometri yang sama persis, 1 warna,
// jadi bisa langsung dikirim sebagai artwork die.
function Mark({ cx, cy, size, color }: { cx: number; cy: number; size: number; color: string }) {
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${size / 100})`} fill={color}>
      <polygon points="33.3,20.9 54.2,20.9 64.0,37.1 64.8,40.1 55.8,54.7 43.6,35.0 18.4,78.3 0.5,78.6 0.8,76.7" />
      <polygon points="81.8,20.9 99.2,20.9 99.5,21.7 67.2,77.8 66.4,78.6 45.0,78.3 35.0,61.0 35.8,58.0 43.4,45.0 45.0,46.1 54.7,63.4 56.1,64.5" />
      <polygon points="24.7,0.0 42.3,0.0 51.2,15.7 33.1,15.7 24.7,1.4" />
      <polygon points="72.9,0.0 90.5,0.0 99.5,15.7 81.6,15.7" />
      <polygon points="79.9,65.6 89.2,80.8 80.5,96.5 79.1,95.7 71.0,81.3" />
      <polygon points="19.5,3.0 28.7,18.2 19.8,33.9 10.6,18.7" />
      <polygon points="67.8,3.0 77.0,17.9 68.0,33.9 59.1,19.0" />
      <polygon points="31.4,65.9 32.2,65.9 40.7,80.5 40.7,81.8 32.0,96.5 30.9,95.9 22.8,81.6" />
      <polygon points="49.6,83.5 66.7,83.7 75.3,99.5 57.5,99.5 48.5,84.3" />
      <polygon points="0.3,83.7 18.2,83.7 27.1,99.2 8.9,99.5" />
    </g>
  )
}

// ── Bintang pemisah teks lengkung ───────────────────────────────────
function Star({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i - Math.PI / 2
    const rr = i % 2 === 0 ? r : r * 0.42
    return `${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`
  }).join(" ")
  return <polygon points={pts} fill={color} />
}

// ── Filter tekstur tinta (dipasang sekali per halaman) ──────────────
function InkDefs() {
  return (
    <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="nx-ink" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves={3} seed={7} result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale={1.1} xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves={4} seed={19} result="blotch" />
          <feColorMatrix in="blotch" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.05 1.02" result="patch" />
          <feComposite in="rough" in2="patch" operator="in" />
        </filter>
      </defs>
    </svg>
  )
}

// ── Kartu pembungkus stempel ────────────────────────────────────────
function StampCard({ label, spec, children }: { label: string; spec: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ padding: "10px 16px", borderBottom: "1px solid #E2E8F0", fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
      <div style={{
        flex: 1, padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#FCFCFA",
        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(15,30,74,.035) 0, transparent 55%), radial-gradient(circle at 80% 70%, rgba(15,30,74,.03) 0, transparent 50%)",
      }}>
        {children}
      </div>
      <div style={{ padding: "10px 16px", borderTop: "1px solid #F1F5F9", fontSize: 10, color: SL, lineHeight: 1.6 }}>{spec}</div>
    </div>
  )
}

// ── Stempel bulat (die yang sama, hanya beda warna tinta) ───────────
function RoundStamp({ color, size = 190, ink }: { color: string; size?: number; ink: boolean }) {
  const uid = color.replace("#", "")
  return (
    <svg viewBox="0 0 200 200" width={size} height={size}>
      <g filter={ink ? "url(#nx-ink)" : undefined} opacity={ink ? 0.95 : 1}>
        <circle cx={100} cy={100} r={96} fill="none" stroke={color} strokeWidth={5} />
        <circle cx={100} cy={100} r={87} fill="none" stroke={color} strokeWidth={1.4} />
        <circle cx={100} cy={100} r={57} fill="none" stroke={color} strokeWidth={2.4} />

        <path id={`rt-${uid}`} d="M 21,100 A 79,79 0 0,1 179,100" fill="none" />
        <text fontSize="14.5" fontWeight="800" fontFamily="Inter,sans-serif" fill={color} letterSpacing="1.1">
          <textPath href={`#rt-${uid}`} startOffset="50%" textAnchor="middle">PT NEXT AURA SEJAHTERA</textPath>
        </text>

        <path id={`rb-${uid}`} d="M 24,100 A 76,76 0 0,0 176,100" fill="none" />
        <text fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif" fill={color} letterSpacing="3.6">
          <textPath href={`#rb-${uid}`} startOffset="50%" textAnchor="middle">JAKARTA · INDONESIA</textPath>
        </text>

        <Star cx={19} cy={100} r={6} color={color} />
        <Star cx={181} cy={100} r={6} color={color} />

        <Mark cx={100} cy={80} size={46} color={color} />
        <line x1={70} y1={112} x2={130} y2={112} stroke={color} strokeWidth={1.2} />
        <text x={100} y={132} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="18" fill={color} letterSpacing="2.6" textAnchor="middle">NEXORA</text>
      </g>
    </svg>
  )
}

function PageStempel() {
  const [ink, setInk] = useState(true)
  const F = ink ? "url(#nx-ink)" : undefined
  const OP = ink ? 0.95 : 1
  const IND = "#4338CA"

  return (
    <div>
      <InkDefs />

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <PageTitle title="Stempel Perusahaan" sub="Set cap resmi PT Next Aura Sejahtera — siap dikirim ke vendor stempel" />
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: SL, cursor: "pointer", marginBottom: 24 }}>
          <input type="checkbox" checked={ink} onChange={e => setInk(e.target.checked)} style={{ accentColor: BL }} />
          Efek tinta (pratinjau cetak)
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))", gap: 20 }}>

        {/* 01 — Stempel utama */}
        <StampCard label="01 — Stempel Utama" spec="Bulat Ø 40 mm · tinta biru #2558E8 · untuk surat resmi, kontrak, dan dokumen keluar.">
          <RoundStamp color={BL} ink={ink} />
        </StampCard>

        {/* 02 — Cap basah */}
        <StampCard label="02 — Cap Basah" spec="Die yang sama, tinta merah #C81E1E · pendamping tanda tangan basah & legalisasi berkas.">
          <RoundStamp color="#C81E1E" ink={ink} />
        </StampCard>

        {/* 03 — Stempel kotak */}
        <StampCard label="03 — Stempel Kotak (Identitas)" spec="Kotak 62 × 24 mm · tinta biru · untuk faktur, formulir, dan penerimaan dokumen.">
          <svg viewBox="0 0 300 116" width={300} height={116}>
            <g filter={F} opacity={OP}>
              <rect x={3} y={3} width={294} height={110} rx={5} fill="none" stroke={BL} strokeWidth={4} />
              <rect x={10} y={10} width={280} height={96} rx={3} fill="none" stroke={BL} strokeWidth={1} />

              <Mark cx={48} cy={46} size={42} color={BL} />
              <text x={48} y={88} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="14" fill={BL} letterSpacing="2.2" textAnchor="middle">NEXORA</text>

              <line x1={90} y1={20} x2={90} y2={96} stroke={BL} strokeWidth={1.2} />

              <text x={104} y={36} fontFamily="Inter,sans-serif" fontWeight="800" fontSize="11.5" fill={BL} letterSpacing="0.5">PT NEXT AURA SEJAHTERA</text>
              <line x1={104} y1={44} x2={282} y2={44} stroke={BL} strokeWidth={0.8} />
              <text x={104} y={59} fontFamily="Inter,sans-serif" fontSize="8.5" fill={BL}>Jl. Jend. Sudirman Kav. 45, Lt. 12</text>
              <text x={104} y={71} fontFamily="Inter,sans-serif" fontSize="8.5" fill={BL}>Jakarta Pusat, DKI Jakarta 10220</text>
              <text x={104} y={83} fontFamily="Inter,sans-serif" fontSize="8.5" fill={BL}>Telp. +62 21 5555-7890</text>
              <text x={104} y={96} fontFamily="Inter,sans-serif" fontWeight="700" fontSize="8" fill={BL} letterSpacing="0.4">NPWP 12.345.678.9-012.000</text>
            </g>
          </svg>
        </StampCard>

        {/* 04 — Oval legal */}
        <StampCard label="04 — Stempel Oval (Legal & Finance)" spec="Oval 48 × 32 mm · tinta ungu #4338CA · khusus dokumen legal, pajak, dan perbankan.">
          <svg viewBox="0 0 240 170" width={260} height={184}>
            <g filter={F} opacity={OP}>
              <ellipse cx={120} cy={85} rx={114} ry={78} fill="none" stroke={IND} strokeWidth={4} />
              <ellipse cx={120} cy={85} rx={106} ry={70} fill="none" stroke={IND} strokeWidth={1.2} />
              <ellipse cx={120} cy={85} rx={68} ry={41} fill="none" stroke={IND} strokeWidth={2} />

              <path id="ov-top" d="M 24,85 A 96,60 0 0,1 216,85" fill="none" />
              <text fontSize="12.5" fontWeight="800" fontFamily="Inter,sans-serif" fill={IND} letterSpacing="1">
                <textPath href="#ov-top" startOffset="50%" textAnchor="middle">PT NEXT AURA SEJAHTERA</textPath>
              </text>

              <path id="ov-bot" d="M 26,85 A 94,58 0 0,0 214,85" fill="none" />
              <text fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif" fill={IND} letterSpacing="3">
                <textPath href="#ov-bot" startOffset="50%" textAnchor="middle">LEGAL &amp; FINANCE</textPath>
              </text>

              <Star cx={20} cy={85} r={5.5} color={IND} />
              <Star cx={220} cy={85} r={5.5} color={IND} />

              <Mark cx={120} cy={72} size={32} color={IND} />
              <text x={120} y={106} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="13" fill={IND} letterSpacing="2.2" textAnchor="middle">NEXORA</text>
            </g>
          </svg>
        </StampCard>

        {/* 05 — Disetujui */}
        <StampCard label="05 — Stempel Status: Disetujui" spec="Kotak 58 × 30 mm · tinta hijau #15803D · verifikasi persetujuan internal.">
          <svg viewBox="0 0 260 136" width={260} height={136} style={{ transform: "rotate(-4deg)" }}>
            <g filter={F} opacity={OP}>
              <rect x={5} y={5} width={250} height={126} rx={6} fill="none" stroke="#15803D" strokeWidth={4.5} />
              <rect x={13} y={13} width={234} height={110} rx={3} fill="none" stroke="#15803D" strokeWidth={1.1} />

              <Mark cx={40} cy={44} size={30} color="#15803D" />
              <line x1={64} y1={22} x2={64} y2={66} stroke="#15803D" strokeWidth={1} />
              <text x={158} y={44} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="23" fill="#15803D" letterSpacing="2" textAnchor="middle">DISETUJUI</text>
              <text x={158} y={58} fontFamily="Inter,sans-serif" fontWeight="600" fontSize="7" fill="#15803D" letterSpacing="2.6" textAnchor="middle">APPROVED FOR PROCESSING</text>

              <line x1={22} y1={74} x2={238} y2={74} stroke="#15803D" strokeWidth={1.1} />

              <text x={24} y={94} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#15803D" letterSpacing="0.6">TGL</text>
              <line x1={50} y1={96} x2={130} y2={96} stroke="#15803D" strokeWidth={0.9} />
              <text x={140} y={94} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#15803D" letterSpacing="0.6">PARAF</text>
              <line x1={178} y1={96} x2={238} y2={96} stroke="#15803D" strokeWidth={0.9} />

              <text x={24} y={114} fontFamily="Inter,sans-serif" fontSize="9" fontWeight="700" fill="#15803D" letterSpacing="0.6">OLEH</text>
              <line x1={56} y1={116} x2={238} y2={116} stroke="#15803D" strokeWidth={0.9} />
            </g>
          </svg>
        </StampCard>

        {/* 06 — Lunas */}
        <StampCard label="06 — Stempel Status: Lunas" spec="Kotak 52 × 30 mm · tinta merah #C81E1E · penanda pelunasan pada invoice & kwitansi.">
          <svg viewBox="0 0 240 140" width={240} height={140} style={{ transform: "rotate(-8deg)" }}>
            <g filter={F} opacity={OP}>
              <rect x={6} y={6} width={228} height={128} rx={10} fill="none" stroke="#C81E1E" strokeWidth={6} />
              <rect x={16} y={16} width={208} height={108} rx={5} fill="none" stroke="#C81E1E" strokeWidth={1.6} />

              <text x={120} y={62} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="40" fill="#C81E1E" letterSpacing="3" textAnchor="middle">LUNAS</text>
              <text x={120} y={76} fontFamily="Inter,sans-serif" fontWeight="700" fontSize="9" fill="#C81E1E" letterSpacing="6.5" textAnchor="middle">PAID IN FULL</text>

              <line x1={34} y1={88} x2={206} y2={88} stroke="#C81E1E" strokeWidth={2} />

              <Mark cx={54} cy={106} size={26} color="#C81E1E" />
              <text x={128} y={104} fontFamily="Inter,sans-serif" fontWeight="800" fontSize="11" fill="#C81E1E" letterSpacing="1.4" textAnchor="middle">NEXORA FINANCE</text>
              <text x={128} y={115} fontFamily="Inter,sans-serif" fontWeight="600" fontSize="7" fill="#C81E1E" letterSpacing="1" textAnchor="middle">PT NEXT AURA SEJAHTERA</text>
            </g>
          </svg>
        </StampCard>
      </div>

      {/* Aplikasi pada dokumen */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", overflow: "hidden", marginTop: 20 }}>
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #E2E8F0", fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase" }}>Penempatan pada Dokumen</div>
        <div style={{ padding: 28, display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center", background: "#FCFCFA" }}>
          <div style={{ width: 300, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 4, padding: "24px 28px 20px", position: "relative", boxShadow: "0 1px 8px rgba(15,30,74,.06)" }}>
            <p style={{ margin: 0, fontSize: 10, color: SL }}>Hormat kami,</p>
            <p style={{ margin: "3px 0 0", fontSize: 10, fontWeight: 700, color: NV }}>PT NEXT AURA SEJAHTERA</p>
            <div style={{ height: 96, position: "relative" }}>
              <div style={{ position: "absolute", left: 34, top: 4, transform: "rotate(-13deg)", opacity: 0.88 }}>
                <RoundStamp color={BL} size={104} ink={ink} />
              </div>
              <svg viewBox="0 0 140 60" width={140} height={60} style={{ position: "absolute", left: 6, top: 18 }}>
                <path d="M8,44 C24,10 30,52 46,26 C58,8 62,50 78,30 C90,16 104,40 132,14" fill="none" stroke={NV} strokeWidth={1.6} strokeLinecap="round" opacity={0.75} />
              </svg>
            </div>
            <div style={{ borderTop: `1px solid ${NV}`, width: 150, paddingTop: 5 }}>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: NV }}>[Nama Direktur]</p>
              <p style={{ margin: 0, fontSize: 9, color: SL }}>Direktur Utama</p>
            </div>
          </div>

          <div style={{ width: 300, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 4, padding: "20px 24px", boxShadow: "0 1px 8px rgba(15,30,74,.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: SL, borderBottom: "1px solid #E2E8F0", paddingBottom: 8 }}>
              <span style={{ fontWeight: 700, color: NV }}>INVOICE</span><span>INV/2026/09/012</span>
            </div>
            {[["Jasa implementasi", "Rp 48.000.000"], ["Lisensi tahunan", "Rp 12.500.000"], ["PPN 11%", "Rp 6.655.000"]].map(([a, b]) => (
              <div key={a} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: SL, padding: "6px 0", borderBottom: "1px dashed #E2E8F0" }}>
                <span>{a}</span><span>{b}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 800, color: NV, padding: "8px 0 0" }}>
              <span>TOTAL</span><span>Rp 67.155.000</span>
            </div>
            <div style={{ height: 92, position: "relative", marginTop: 2, overflow: "hidden" }}>
              <div style={{ position: "absolute", right: 10, top: 2, transform: "rotate(-9deg)", transformOrigin: "top right", opacity: 0.9 }}>
                <svg viewBox="0 0 240 140" width={162} height={95}>
                  <g filter={F} opacity={OP}>
                    <rect x={6} y={6} width={228} height={128} rx={10} fill="none" stroke="#C81E1E" strokeWidth={6} />
                    <rect x={16} y={16} width={208} height={108} rx={5} fill="none" stroke="#C81E1E" strokeWidth={1.6} />
                    <text x={120} y={62} fontFamily="Inter,sans-serif" fontWeight="900" fontSize="40" fill="#C81E1E" letterSpacing="3" textAnchor="middle">LUNAS</text>
                    <text x={120} y={76} fontFamily="Inter,sans-serif" fontWeight="700" fontSize="9" fill="#C81E1E" letterSpacing="6.5" textAnchor="middle">PAID IN FULL</text>
                    <line x1={34} y1={88} x2={206} y2={88} stroke="#C81E1E" strokeWidth={2} />
                    <Mark cx={54} cy={106} size={22} color="#C81E1E" />
                    <text x={128} y={104} fontFamily="Inter,sans-serif" fontWeight="800" fontSize="11" fill="#C81E1E" letterSpacing="1.4" textAnchor="middle">NEXORA FINANCE</text>
                    <text x={128} y={115} fontFamily="Inter,sans-serif" fontWeight="600" fontSize="7" fill="#C81E1E" letterSpacing="1" textAnchor="middle">PT NEXT AURA SEJAHTERA</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spesifikasi produksi */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 20 }}>
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Spesifikasi Produksi</div>
          {[
            ["Jenis", "Flash / self-inking (Trodat 46040 utk bulat Ø40 mm)"],
            ["Resolusi file", "Vektor SVG atau PDF, teks di-outline"],
            ["Garis tertipis", "Min 0,3 mm — celah antarelemen logo ±0,4 mm pada logo 9 mm"],
            ["Ukuran logo", "Min 9 mm (bulat/kotak/oval) · 6 mm pada stempel status"],
            ["Teks terkecil", "Minimal 6 pt (≈2 mm) pada ukuran cetak asli"],
            ["Warna tinta", "Biru #2558E8 · Merah #C81E1E · Ungu #4338CA · Hijau #15803D"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", gap: 12, fontSize: 10, padding: "7px 0", borderBottom: "1px solid #F1F5F9" }}>
              <span style={{ width: 96, flexShrink: 0, fontWeight: 700, color: NV }}>{k}</span>
              <span style={{ color: SL, lineHeight: 1.6 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: 20 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: SL, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Aturan Pakai</div>
          {[
            [true, "Bubuhkan menyentuh sebagian tanda tangan, bukan menutupinya."],
            [true, "Stempel utama hanya dipegang Direksi / Corporate Secretary."],
            [true, "Kemiringan wajar 5°–15°, jangan lurus kaku seperti sablon."],
            [false, "Jangan mengubah proporsi, warna, atau menambah elemen pada die."],
            [false, "Jangan menimpa nominal, nomor dokumen, atau kolom tanda tangan."],
            [false, "Jangan memakai stempel status (Lunas/Disetujui) di dokumen keluar resmi."],
          ].map(([ok, txt]) => (
            <div key={String(txt)} style={{ display: "flex", gap: 10, fontSize: 10, color: SL, padding: "7px 0", borderBottom: "1px solid #F1F5F9", lineHeight: 1.6 }}>
              <span style={{ color: ok ? "#15803D" : "#C81E1E", fontWeight: 800, flexShrink: 0 }}>{ok ? "✓" : "✕"}</span>
              <span>{txt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PageEmail() {
  return (
    <div>
      <PageTitle title="Email Template" sub="Template email resmi perusahaan" />
      <div style={{ maxWidth: 620, margin: "0 auto", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden" }}>
        {/* Email client bar */}
        <div style={{ background: "#E2E8F0", padding: "8px 16px", display: "flex", gap: 6 }}>
          {["#EF4444","#EAB308","#22C55E"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        {/* Email header meta */}
        <div style={{ background: "#fff", padding: "12px 20px", borderBottom: "1px solid #E2E8F0", fontSize: 10, color: SL, lineHeight: 1.8 }}>
          <div><b style={{ color: NV }}>Dari:</b> NEXORA &lt;noreply@nexora.co.id&gt;</div>
          <div><b style={{ color: NV }}>Kepada:</b> [Nama Penerima] &lt;penerima@email.com&gt;</div>
          <div><b style={{ color: NV }}>Subjek:</b> [Subjek Email] — PT Next Aura Sejahtera</div>
        </div>
        {/* Email body */}
        <div style={{ background: "#F8FAFC", padding: 24 }}>
          <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,.06)" }}>
            {/* Header */}
            <div style={{ background: NV, padding: "24px 32px", display: "flex", alignItems: "center", gap: 12 }}>
              <Logo sz={36} v="white" />
              <Wordmark color="#fff" size={20} />
            </div>
            <div style={{ height: 3, background: `linear-gradient(90deg, ${BL}, #60A5FA)` }} />
            {/* Body content */}
            <div style={{ padding: "28px 32px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: NV, marginTop: 0 }}>Kepada Yth. Bapak/Ibu [Nama],</p>
              <p style={{ fontSize: 11, lineHeight: 1.9, color: "#334155", marginTop: 0 }}>
                Salam sejahtera, kami dari PT Next Aura Sejahtera mengucapkan terima kasih atas kepercayaan Anda. Berikut kami sampaikan informasi terkait [topik pesan].
              </p>
              <div style={{ background: LB, borderLeft: `4px solid ${BL}`, borderRadius: "0 6px 6px 0", padding: "12px 16px", margin: "16px 0" }}>
                <p style={{ margin: 0, fontSize: 11, color: NV, fontWeight: 600 }}>Informasi Penting</p>
                <p style={{ margin: "4px 0 0", fontSize: 10, color: SL }}>Konten highlight atau informasi kritis ditampilkan dalam blok ini.</p>
              </div>
              <p style={{ fontSize: 11, lineHeight: 1.9, color: "#334155" }}>
                Apabila ada pertanyaan, silakan hubungi kami melalui email <a href="#" style={{ color: BL }}>info@nexora.co.id</a> atau telepon {co.tel}.
              </p>
              <div style={{ marginTop: 24 }}>
                <div style={{ display: "inline-block", background: BL, color: "#fff", padding: "10px 24px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>
                  HUBUNGI KAMI
                </div>
              </div>
            </div>
            {/* Footer */}
            <div style={{ background: NV, padding: "16px 32px", fontSize: 9, color: "#94A3B8", lineHeight: 1.8 }}>
              <div style={{ color: "#CBD5E1", fontWeight: 600, marginBottom: 4 }}>PT NEXT AURA SEJAHTERA</div>
              <div>{co.a1}, {co.a2}</div>
              <div>{co.tel}  ·  {co.email}  ·  {co.web}</div>
              <div style={{ marginTop: 8, borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 8, color: "#64748B" }}>
                Email ini dikirim secara otomatis. Mohon tidak membalas email ini.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PageKartuNama() {
  return (
    <div>
      <PageTitle title="Kartu Nama" sub="Rekomendasi desain kartu nama dua sisi (Ukuran Standar: 85 × 54 mm)" />
      
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        
        {/* Variant 01 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: NV, marginBottom: 16 }}>01 — Classic Corporate</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {/* Front */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Depan</div>
              <div style={{ width: 340, height: 216, background: NV, borderRadius: 10, padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(15,30,74,.15)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -30, top: -30, width: 120, height: 120, borderRadius: "50%", background: BL, opacity: 0.2 }} />
                <div style={{ position: "absolute", right: 20, bottom: -40, width: 100, height: 100, borderRadius: "50%", background: BL, opacity: 0.12 }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 1 }}>
                  <Logo sz={36} v="white" />
                  <div>
                    <Wordmark color="#fff" size={16} />
                  </div>
                </div>
                <div style={{ zIndex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 2 }}>Budi Santoso, S.T., M.M.</div>
                  <div style={{ fontSize: 9, color: "#60A5FA", letterSpacing: "0.08em", marginBottom: 12 }}>DIREKTUR UTAMA</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[`✆ ${co.tel}`, `✉ budi.santoso@nexora.co.id`, `⊕ ${co.web}`].map(t => (
                      <div key={t} style={{ fontSize: 8, color: "#CBD5E1" }}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Belakang</div>
              <div style={{ width: 340, height: 216, background: "#fff", borderRadius: 10, padding: "20px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(0,0,0,.08)", border: `3px solid ${NV}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${NV}, ${BL})` }} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 10 }}>
                  <Logo sz={52} v="blue" />
                  <Wordmark color={NV} size={18} />
                </div>
                <div style={{ textAlign: "center", fontSize: 8, color: "#94A3B8" }}>
                  <div>{co.a1}, {co.a2}</div>
                  <div style={{ marginTop: 2 }}>{co.web}  ·  {co.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Variant 02 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: NV, marginBottom: 16 }}>02 — Modern Minimalist</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {/* Front */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Depan</div>
              <div style={{ width: 340, height: 216, background: "#fff", borderRadius: 10, padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(15,30,74,.08)", border: "1px solid #E2E8F0", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", right: -40, bottom: -40, opacity: 0.03 }}>
                  <svg width={240} height={240} viewBox="0 0 240 240">
                    <Mark cx={120} cy={120} size={240} color={NV} />
                  </svg>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
                  <Logo sz={44} v="blue" />
                </div>
                <div style={{ zIndex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 900, color: NV, marginBottom: 2 }}>Budi Santoso</div>
                  <div style={{ fontSize: 8, color: BL, fontWeight: 700, letterSpacing: "0.15em", marginBottom: 16 }}>DIREKTUR UTAMA</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: 8, color: SL }}>
                    <div>T. {co.tel}</div>
                    <div>E. budi@nexora.co.id</div>
                    <div style={{ gridColumn: "span 2" }}>A. {co.a1}, {co.a2}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Belakang</div>
              <div style={{ width: 340, height: 216, background: BL, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,88,232,.3)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", opacity: 0.15 }}>
                  <svg width={300} height={300} viewBox="0 0 300 300">
                    <Mark cx={150} cy={150} size={300} color="#fff" />
                  </svg>
                </div>
                <div style={{ zIndex: 1, textAlign: "right", position: "absolute", right: 32 }}>
                  <Wordmark color="#fff" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Variant 03 */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: NV, marginBottom: 16 }}>03 — Executive Vertical (54 × 85 mm)</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {/* Front */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Depan</div>
              <div style={{ width: 216, height: 340, background: "#0F172A", borderRadius: 10, padding: "32px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 20px rgba(15,23,42,.4)", position: "relative", overflow: "hidden", textAlign: "center" }}>
                <div style={{ zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Logo sz={48} v="white" />
                  <div style={{ marginTop: 12 }}>
                    <Wordmark color="#fff" size={13} />
                  </div>
                </div>
                <div style={{ zIndex: 1 }}>
                  <div style={{ width: 24, height: 2, background: BL, margin: "0 auto 16px" }} />
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 4 }}>Budi Santoso</div>
                  <div style={{ fontSize: 8, color: "#94A3B8", letterSpacing: "0.1em", marginBottom: 24 }}>DIREKTUR UTAMA</div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 8, color: "#CBD5E1" }}>
                    <div>{co.tel}</div>
                    <div>budi@nexora.co.id</div>
                    <div>{co.web}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Back */}
            <div>
              <div style={{ fontSize: 9, color: SL, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.1em" }}>Sisi Belakang</div>
              <div style={{ width: 216, height: 340, background: NV, borderRadius: 10, padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(15,30,74,.3)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(255,255,255,.1)", borderRadius: 6 }} />
                <div style={{ opacity: 0.8 }}>
                  <svg width={100} height={100} viewBox="0 0 100 100">
                    <Mark cx={50} cy={50} size={100} color="#fff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Document helpers ─────────────────────────────────────────────────
function TH({ children }: { children: React.ReactNode }) {
  return <th style={{ background: NV, color: "#fff", padding: "8px 10px", fontSize: 9, fontWeight: 700, textAlign: "left", letterSpacing: "0.06em", textTransform: "uppercase" }}>{children}</th>
}
function TD({ children, right = false, bold = false }: { children: React.ReactNode; right?: boolean; bold?: boolean }) {
  return <td style={{ padding: "7px 10px", fontSize: 10, borderBottom: "1px solid #E2E8F0", textAlign: right ? "right" : "left", fontWeight: bold ? 700 : 400, color: bold ? NV : "#334155" }}>{children}</td>
}
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 8, fontSize: 10, marginBottom: 4 }}>
      <span style={{ color: SL, minWidth: 110 }}>{label}</span>
      <span style={{ color: NV }}>: {value}</span>
    </div>
  )
}
const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID")

function PageSuratResmi() {
  return (
    <div>
      <PageTitle title="Surat Resmi Perusahaan" />
      <A4>
        <DocHeader />
        <div style={{ padding: "28px 40px 120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, fontSize: 10 }}>
            <div>
              <InfoRow label="Nomor" value="001/NEXORA/SR/IX/2026" />
              <InfoRow label="Lampiran" value="1 (satu) berkas" />
              <InfoRow label="Perihal" value="Permohonan Kerja Sama Bisnis" />
            </div>
            <div style={{ textAlign: "right", color: SL, fontSize: 10 }}>
              <div>Jakarta, 09 September 2026</div>
            </div>
          </div>

          <div style={{ marginBottom: 24, fontSize: 10, lineHeight: 1.9 }}>
            <div>Yth.</div>
            <div style={{ fontWeight: 700, color: NV }}>Bapak Direktur Utama</div>
            <div>PT Mitra Teknologi Nusantara</div>
            <div>Jl. HR. Rasuna Said Kav. C-22</div>
            <div>Jakarta Selatan 12940</div>
          </div>

          <p style={{ fontSize: 10, lineHeight: 2 }}>Dengan hormat,</p>
          <p style={{ fontSize: 10, lineHeight: 2 }}>
            Sehubungan dengan perkembangan bisnis yang pesat di sektor teknologi informasi, kami dari PT Next Aura Sejahtera bermaksud mengajukan permohonan kerja sama strategis dengan perusahaan Bapak/Ibu dalam bidang pengembangan sistem informasi terintegrasi.
          </p>
          <p style={{ fontSize: 10, lineHeight: 2 }}>
            PT Next Aura Sejahtera merupakan perusahaan yang bergerak di bidang teknologi dan inovasi digital, dengan pengalaman lebih dari 10 tahun dalam menyediakan solusi teknologi bagi berbagai sektor industri di Indonesia. Kami memiliki tim profesional yang berpengalaman dan berkomitmen untuk memberikan hasil terbaik.
          </p>
          <p style={{ fontSize: 10, lineHeight: 2 }}>
            Demikian surat permohonan ini kami sampaikan. Besar harapan kami agar Bapak/Ibu berkenan untuk menindaklanjuti permohonan ini. Atas perhatian dan kerja sama yang baik, kami ucapkan terima kasih.
          </p>

          <div style={{ marginTop: 36 }}>
            <p style={{ margin: 0, fontSize: 10 }}>Hormat kami,</p>
            <p style={{ margin: "4px 0 0", fontWeight: 700, color: NV, fontSize: 10 }}>PT NEXT AURA SEJAHTERA</p>
            <div style={{ margin: "40px 0 6px", borderTop: `1px solid ${NV}`, width: 160, paddingTop: 6 }}>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 700, color: NV }}>Budi Santoso, S.T., M.M.</p>
              <p style={{ margin: 0, fontSize: 9, color: SL }}>Direktur Utama</p>
            </div>
          </div>
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

function PagePenawaran() {
  const items = [
    { no: 1, desc: "Pengembangan Website Korporat (Desain + Development)", qty: 1, unit: "Paket", price: 45000000 },
    { no: 2, desc: "Sistem Manajemen Konten (CMS) Custom", qty: 1, unit: "Paket", price: 25000000 },
    { no: 3, desc: "Integrasi Payment Gateway & API Third-party", qty: 1, unit: "Paket", price: 15000000 },
    { no: 4, desc: "Pelatihan Penggunaan Sistem (2 hari)", qty: 1, unit: "Sesi", price: 5000000 },
    { no: 5, desc: "Garansi & Pemeliharaan (12 bulan)", qty: 12, unit: "Bulan", price: 2500000 },
  ]
  const sub = items.reduce((a, i) => a + i.qty * i.price, 0)
  const ppn = Math.round(sub * 0.11)
  const total = sub + ppn

  return (
    <div>
      <PageTitle title="Surat Penawaran / Quotation" />
      <A4>
        <DocHeader />
        <div style={{ padding: "24px 40px 120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: NV, letterSpacing: "0.05em" }}>SURAT PENAWARAN</div>
              <div style={{ fontSize: 9, color: SL, marginTop: 2 }}>No: SP-2026-09-001</div>
            </div>
            <div style={{ textAlign: "right", fontSize: 9, color: SL, lineHeight: 1.8 }}>
              <div>Tanggal: 09 September 2026</div>
              <div>Berlaku s/d: 09 Oktober 2026</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
            <div style={{ flex: 1, background: LB, borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: BL, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Kepada / Bill To</div>
              <div style={{ fontSize: 10, lineHeight: 1.8, color: NV, fontWeight: 600 }}>PT Mitra Teknologi Nusantara</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.7 }}>
                <div>Attn: Bapak Andi Wijaya (Procurement)</div>
                <div>Jl. HR. Rasuna Said Kav. C-22, Jaksel</div>
                <div>andi.wijaya@mitrateknologi.co.id</div>
              </div>
            </div>
            <div style={{ flex: 1, background: "#F8FAFC", borderRadius: 8, padding: 14, border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: NV, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Dari / From</div>
              <div style={{ fontSize: 10, lineHeight: 1.8, color: NV, fontWeight: 600 }}>{co.name}</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.7 }}>
                <div>{co.a1}</div><div>{co.a2}</div><div>{co.tel}</div>
              </div>
            </div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
            <thead>
              <tr><TH>No</TH><TH>Deskripsi</TH><TH>Qty</TH><TH>Satuan</TH><TH>Harga Satuan</TH><TH>Total</TH></tr>
            </thead>
            <tbody>
              {items.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                  <TD>{r.no}</TD><TD>{r.desc}</TD><TD right>{r.qty}</TD><TD>{r.unit}</TD>
                  <TD right>{fmt(r.price)}</TD><TD right>{fmt(r.qty * r.price)}</TD>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: 260 }}>
              {[["Subtotal", sub], ["PPN 11%", ppn]].map(([l, v]) => (
                <div key={String(l)} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, padding: "5px 0", borderBottom: "1px solid #E2E8F0", color: SL }}>
                  <span>{l}</span><span>{fmt(Number(v))}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", marginTop: 4, background: NV, borderRadius: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>TOTAL</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>{fmt(total)}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20, padding: 14, background: "#F8FAFC", borderRadius: 8, border: "1px solid #E2E8F0" }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: NV, marginBottom: 6 }}>Syarat & Ketentuan</div>
            {["Pembayaran: 50% DP, 50% sebelum serah terima", "Pengerjaan: ±60 hari kerja setelah PO diterima", "Garansi: 12 bulan setelah go-live", "Harga belum termasuk biaya server & domain"].map((t, i) => (
              <div key={i} style={{ fontSize: 9, color: SL, lineHeight: 1.7 }}>• {t}</div>
            ))}
          </div>

          <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: 9, color: SL }}>Menyetujui,<br /><br /><br />
              <div style={{ borderTop: "1px solid #94A3B8", width: 140, paddingTop: 4 }}>Nama & Cap Perusahaan</div>
            </div>
            <div style={{ fontSize: 9, textAlign: "right" }}>
              <div style={{ color: SL }}>Hormat kami,</div>
              <div style={{ color: NV, fontWeight: 700, marginTop: 2 }}>PT NEXT AURA SEJAHTERA</div>
              <div style={{ marginTop: 24, borderTop: "1px solid " + NV, width: 160, paddingTop: 4 }}>
                <div style={{ fontWeight: 700, color: NV, fontSize: 10 }}>Budi Santoso, S.T., M.M.</div>
                <div style={{ color: SL, fontSize: 9 }}>Direktur Utama</div>
              </div>
            </div>
          </div>
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

function PageProposal() {
  return (
    <div>
      <PageTitle title="Proposal" sub="Cover halaman proposal bisnis" />
      <A4>
        {/* Cover */}
        <div style={{ background: NV, minHeight: 400, padding: "48px 48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: "50%", border: `60px solid ${BL}`, opacity: 0.15 }} />
          <div style={{ position: "absolute", right: 60, bottom: -80, width: 200, height: 200, borderRadius: "50%", border: `40px solid ${BL}`, opacity: 0.1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 14, zIndex: 1 }}>
            <Logo sz={48} v="white" />
            <div>
              <Wordmark color="#fff" size={22} />
              <div style={{ fontSize: 8, color: "#93C5FD", letterSpacing: "0.15em", marginTop: 2 }}>{co.tag.toUpperCase()}</div>
            </div>
          </div>
          <div style={{ zIndex: 1 }}>
            <div style={{ width: 48, height: 3, background: BL, borderRadius: 2, marginBottom: 20 }} />
            <div style={{ fontSize: 11, color: "#60A5FA", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Proposal Kerja Sama</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
              Pengembangan Sistem<br />Informasi Terintegrasi
            </div>
            <div style={{ fontSize: 10, color: "#94A3B8" }}>Disiapkan untuk: PT Mitra Teknologi Nusantara</div>
            <div style={{ fontSize: 10, color: "#94A3B8", marginTop: 4 }}>09 September 2026  ·  No. PRO-2026-09-001</div>
          </div>
        </div>
        <div style={{ height: 4, background: `linear-gradient(90deg, ${BL}, #60A5FA)` }} />

        {/* Intro section */}
        <div style={{ padding: "28px 48px 120px" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: NV, marginBottom: 12 }}>Ringkasan Eksekutif</div>
          <p style={{ fontSize: 10, lineHeight: 2, color: "#334155", marginTop: 0 }}>
            PT Next Aura Sejahtera dengan bangga mempersembahkan proposal ini sebagai solusi komprehensif untuk kebutuhan transformasi digital PT Mitra Teknologi Nusantara. Proposal ini mencakup rancangan arsitektur sistem, metodologi pengembangan, jadwal implementasi, dan struktur biaya yang transparan.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, margin: "20px 0" }}>
            {[
              { icon: "⚙️", title: "Teknologi Modern", desc: "Stack terkini yang proven di industri" },
              { icon: "🔒", title: "Keamanan Tinggi", desc: "Enkripsi end-to-end & audit trail" },
              { icon: "📈", title: "Skalabel", desc: "Arsitektur cloud-native yang fleksibel" },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: LB, borderRadius: 8, padding: 14, borderTop: `3px solid ${BL}` }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: NV, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 9, color: SL, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, color: NV, margin: "20px 0 10px" }}>Daftar Isi</div>
          {["1. Latar Belakang & Tujuan", "2. Ruang Lingkup Pekerjaan", "3. Metodologi & Jadwal", "4. Tim Pelaksana", "5. Anggaran Biaya", "6. Syarat & Ketentuan"].map((t, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #F1F5F9", fontSize: 10, color: "#334155" }}>
              <span>{t}</span>
              <span style={{ color: SL }}>hal. {i + 2}</span>
            </div>
          ))}
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

function PagePO() {
  const items = [
    { no: 1, sku: "NX-WEB-001", desc: "Pengembangan Website Korporat", qty: 1, unit: "Paket", price: 45000000 },
    { no: 2, sku: "NX-CMS-001", desc: "Sistem Manajemen Konten Custom", qty: 1, unit: "Paket", price: 25000000 },
    { no: 3, sku: "NX-INT-001", desc: "Integrasi API & Payment Gateway", qty: 1, unit: "Paket", price: 15000000 },
  ]
  const sub = items.reduce((a, i) => a + i.qty * i.price, 0)
  const ppn = Math.round(sub * 0.11)
  const total = sub + ppn

  return (
    <div>
      <PageTitle title="Purchase Order (PO)" />
      <A4>
        <DocHeader />
        <div style={{ padding: "20px 40px 120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: NV, letterSpacing: "0.05em" }}>PURCHASE ORDER</div>
              <div style={{ fontSize: 9, color: SL, marginTop: 2 }}>No. PO: PO-2026-09-001</div>
            </div>
            <div style={{ background: LB, border: `1px solid ${BL}`, borderRadius: 8, padding: "8px 16px", textAlign: "right" }}>
              <div style={{ fontSize: 9, color: BL, fontWeight: 700 }}>TANGGAL PO</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: NV }}>09 Sep 2026</div>
              <div style={{ fontSize: 9, color: SL }}>Batas: 09 Okt 2026</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: NV, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, borderBottom: `2px solid ${BL}`, paddingBottom: 4 }}>Pembeli (Buyer)</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: NV }}>{co.name}</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.8 }}>
                <div>{co.a1}</div><div>{co.a2}</div>
                <div>NPWP: {co.npwp}</div>
              </div>
            </div>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: NV, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, borderBottom: `2px solid ${BL}`, paddingBottom: 4 }}>Vendor / Penjual</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: NV }}>PT Solusi Digital Prima</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.8 }}>
                <div>Jl. TB Simatupang No. 12, Jakarta Selatan</div>
                <div>NPWP: 98.765.432.1-012.000</div>
                <div>Telp: +62 21 7890-1234</div>
              </div>
            </div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14 }}>
            <thead>
              <tr><TH>No</TH><TH>Kode SKU</TH><TH>Deskripsi</TH><TH>Qty</TH><TH>Satuan</TH><TH>Harga</TH><TH>Total</TH></tr>
            </thead>
            <tbody>
              {items.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                  <TD>{r.no}</TD><TD><span style={{ fontFamily: "monospace", fontSize: 9 }}>{r.sku}</span></TD>
                  <TD>{r.desc}</TD><TD right>{r.qty}</TD><TD>{r.unit}</TD>
                  <TD right>{fmt(r.price)}</TD><TD right>{fmt(r.qty * r.price)}</TD>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <div style={{ width: 260 }}>
              {[["Subtotal", sub], ["PPN 11%", ppn]].map(([l, v]) => (
                <div key={String(l)} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, padding: "4px 0", borderBottom: "1px solid #E2E8F0", color: SL }}>
                  <span>{l}</span><span>{fmt(Number(v))}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", marginTop: 4, background: NV, borderRadius: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>TOTAL PO</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>{fmt(total)}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: 14, background: "#F8FAFC", borderRadius: 8, border: "1px solid #E2E8F0", marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: NV, marginBottom: 6 }}>Ketentuan Pengiriman & Pembayaran</div>
            {["Pengiriman/Penyelesaian: maks. 60 hari kerja dari tanggal PO", "Pembayaran: 30 hari setelah BAST (Berita Acara Serah Terima)", "Transfer ke: " + co.bank + " · No. Rek: " + co.rek + " a/n " + co.an].map((t, i) => (
              <div key={i} style={{ fontSize: 9, color: SL, lineHeight: 1.8 }}>• {t}</div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: 9 }}>
              <div style={{ color: SL }}>Disetujui oleh,</div>
              <div style={{ color: NV, fontWeight: 700, marginTop: 2 }}>PT NEXT AURA SEJAHTERA</div>
              <div style={{ marginTop: 28, borderTop: "1px solid " + NV, width: 150, paddingTop: 4 }}>
                <div style={{ fontWeight: 700, color: NV }}>Budi Santoso, S.T., M.M.</div>
                <div style={{ color: SL }}>Direktur Utama</div>
              </div>
            </div>
            <div style={{ fontSize: 9, textAlign: "right" }}>
              <div style={{ color: SL }}>Mengetahui,</div>
              <div style={{ color: NV, fontWeight: 700, marginTop: 2 }}>Manajer Keuangan</div>
              <div style={{ marginTop: 28, borderTop: "1px solid #94A3B8", width: 150, paddingTop: 4, marginLeft: "auto" }}>
                <div style={{ fontWeight: 700, color: NV }}>Dewi Rahayu, S.E.</div>
                <div style={{ color: SL }}>Finance Manager</div>
              </div>
            </div>
          </div>
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

function PageInvoice() {
  const items = [
    { no: 1, desc: "Pengembangan Website Korporat", qty: 1, unit: "Paket", price: 45000000 },
    { no: 2, desc: "Sistem Manajemen Konten Custom", qty: 1, unit: "Paket", price: 25000000 },
    { no: 3, desc: "Integrasi API & Payment Gateway", qty: 1, unit: "Paket", price: 15000000 },
    { no: 4, desc: "Pelatihan Penggunaan (2 hari)", qty: 1, unit: "Sesi", price: 5000000 },
  ]
  const sub = items.reduce((a, i) => a + i.qty * i.price, 0)
  const ppn = Math.round(sub * 0.11)
  const total = sub + ppn

  return (
    <div>
      <PageTitle title="Invoice" />
      <A4>
        <DocHeader />
        <div style={{ padding: "20px 40px 120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: NV, letterSpacing: "0.05em" }}>INVOICE</div>
              <div style={{ fontSize: 9, color: SL }}>No: INV-2026-09-001</div>
            </div>
            <div style={{ textAlign: "right", fontSize: 9, color: SL, lineHeight: 1.8 }}>
              <div style={{ fontWeight: 700, color: NV, fontSize: 10 }}>Ref. PO: PO-2026-09-001</div>
              <div>Tanggal: 09 September 2026</div>
              <div>Jatuh Tempo: 09 Oktober 2026</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ flex: 1, background: "#F8FAFC", borderRadius: 8, padding: 14, border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: NV, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, borderBottom: `2px solid ${BL}`, paddingBottom: 4 }}>Tagihan Kepada</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: NV }}>PT Mitra Teknologi Nusantara</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.8 }}>
                <div>Jl. HR. Rasuna Said Kav. C-22</div><div>Jakarta Selatan 12940</div>
                <div>NPWP: 98.765.432.1-012.000</div>
              </div>
            </div>
            <div style={{ flex: 1, background: LB, borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: BL, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Info Pembayaran</div>
              <div style={{ fontSize: 9, color: SL, lineHeight: 1.8 }}>
                <div><b style={{ color: NV }}>Bank:</b> {co.bank}</div>
                <div><b style={{ color: NV }}>No. Rek:</b> {co.rek}</div>
                <div><b style={{ color: NV }}>a/n:</b> {co.an}</div>
              </div>
            </div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14 }}>
            <thead>
              <tr><TH>No</TH><TH>Deskripsi Layanan</TH><TH>Qty</TH><TH>Satuan</TH><TH>Harga Satuan</TH><TH>Jumlah</TH></tr>
            </thead>
            <tbody>
              {items.map((r, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                  <TD>{r.no}</TD><TD>{r.desc}</TD><TD right>{r.qty}</TD><TD>{r.unit}</TD>
                  <TD right>{fmt(r.price)}</TD><TD right>{fmt(r.qty * r.price)}</TD>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <div style={{ width: 280 }}>
              {[["Subtotal", sub], ["PPN 11%", ppn]].map(([l, v]) => (
                <div key={String(l)} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, padding: "5px 0", borderBottom: "1px solid #E2E8F0", color: SL }}>
                  <span>{l}</span><span>{fmt(Number(v))}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", marginTop: 6, background: NV, borderRadius: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>TOTAL TAGIHAN</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{fmt(total)}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: 12, background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 8, marginBottom: 20, fontSize: 9, color: "#92400E" }}>
            ⚠️ Harap melakukan pembayaran sebelum tanggal jatuh tempo <b>09 Oktober 2026</b> untuk menghindari denda keterlambatan 2% per bulan.
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ fontSize: 9, color: SL }}>
              <div style={{ fontWeight: 600, color: NV, marginBottom: 4 }}>Catatan:</div>
              <div>Pembayaran dianggap lunas setelah dana diterima.</div>
              <div>Bukti transfer harap dikonfirmasi ke {co.email}</div>
            </div>
            <div style={{ textAlign: "right", fontSize: 9 }}>
              <div style={{ color: SL }}>Dibuat oleh,</div>
              <div style={{ color: NV, fontWeight: 700, marginTop: 2 }}>PT NEXT AURA SEJAHTERA</div>
              <div style={{ marginTop: 28, borderTop: "1px solid " + NV, width: 160, paddingTop: 4 }}>
                <div style={{ fontWeight: 700, color: NV }}>Dewi Rahayu, S.E.</div>
                <div style={{ color: SL }}>Finance Manager</div>
              </div>
            </div>
          </div>
        </div>
        <DocFooter />
      </A4>
    </div>
  )
}

function PageKwitansi() {
  const total = 45000000

  return (
    <div>
      <PageTitle title="Kwitansi" sub="Bukti penerimaan pembayaran resmi" />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Main receipt */}
        <div style={{ width: 680, background: "#fff", borderRadius: 12, border: `2px solid ${NV}`, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,.08)", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
          <div style={{ background: NV, padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Logo sz={34} v="white" />
              <Wordmark color="#fff" size={16} />
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", letterSpacing: "0.05em" }}>KWITANSI</div>
              <div style={{ fontSize: 8, color: "#93C5FD" }}>BUKTI PENERIMAAN PEMBAYARAN</div>
            </div>
          </div>
          <div style={{ height: 3, background: `linear-gradient(90deg, ${BL}, #60A5FA)` }} />

          <div style={{ padding: "20px 28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, fontSize: 10 }}>
              <div>
                <InfoRow label="No. Kwitansi" value="KWT-2026-09-001" />
                <InfoRow label="Ref. Invoice" value="INV-2026-09-001" />
              </div>
              <div style={{ textAlign: "right", fontSize: 10, color: SL }}>
                <div>Jakarta, 09 September 2026</div>
              </div>
            </div>

            <div style={{ border: "1px solid #E2E8F0", borderRadius: 8, padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", gap: 8, fontSize: 10, marginBottom: 8 }}>
                <span style={{ color: SL, minWidth: 130 }}>Telah diterima dari</span>
                <span style={{ color: NV, fontWeight: 700 }}>: PT Mitra Teknologi Nusantara</span>
              </div>
              <div style={{ display: "flex", gap: 8, fontSize: 10, marginBottom: 8 }}>
                <span style={{ color: SL, minWidth: 130 }}>Uang sejumlah</span>
                <span style={{ color: NV, fontWeight: 800, fontSize: 12 }}>: {fmt(total)}</span>
              </div>
              <div style={{ background: LB, border: `1px solid ${BL}`, borderRadius: 6, padding: "8px 12px", fontSize: 9, color: NV, fontStyle: "italic", marginTop: 8 }}>
                "Empat Puluh Lima Juta Rupiah"
              </div>
              <div style={{ display: "flex", gap: 8, fontSize: 10, marginTop: 12 }}>
                <span style={{ color: SL, minWidth: 130 }}>Untuk pembayaran</span>
                <span style={{ color: "#334155" }}>: Pembayaran DP 50% Pengembangan Website Korporat sesuai PO-2026-09-001</span>
              </div>
              <div style={{ display: "flex", gap: 8, fontSize: 10, marginTop: 8 }}>
                <span style={{ color: SL, minWidth: 130 }}>Metode pembayaran</span>
                <span style={{ color: "#334155" }}>: Transfer Bank BCA</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ fontSize: 9, color: SL }}>
                <div>Dokumen ini sah sebagai bukti pembayaran</div>
                <div>tanpa tanda tangan & cap basah tidak berlaku.</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 130, height: 60, border: "1px dashed #CBD5E1", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 8, color: "#CBD5E1" }}>[Tanda Tangan & Cap]</span>
                </div>
                <div style={{ borderTop: "1px solid " + NV, paddingTop: 4, width: 130 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: NV }}>Dewi Rahayu, S.E.</div>
                  <div style={{ fontSize: 8, color: SL }}>Finance Manager</div>
                </div>
              </div>
            </div>
          </div>

          {/* Slip copy */}
          <div style={{ borderTop: "2px dashed #CBD5E1", background: "#F8FAFC", padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 8, color: SL }}>✂ Lembar Penerima (Arsip)</div>
            <div style={{ fontSize: 9 }}>
              <span style={{ color: SL }}>KWT-2026-09-001  </span>
              <span style={{ color: NV, fontWeight: 700 }}>|  {fmt(total)}</span>
              <span style={{ color: SL }}>  |  09 Sep 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main App ─────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("logo")

  const pages: Record<string, React.ReactNode> = {
    logo: <PageLogo />,
    kopsurat: <PageKopSurat />,
    stempel: <PageStempel />,
    email: <PageEmail />,
    kartuname: <PageKartuNama />,
    suratresmi: <PageSuratResmi />,
    penawaran: <PagePenawaran />,
    proposal: <PageProposal />,
    po: <PagePO />,
    invoice: <PageInvoice />,
    kwitansi: <PageKwitansi />,
  }

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "'Inter',sans-serif", background: BG }}>
      {/* Sidebar */}
      <div style={{ width: 220, background: NV, display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto" }}>
        {/* Brand */}
        <div style={{ padding: "20px 18px 16px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo sz={32} v="white" />
            <div>
              <Wordmark color="#fff" size={14} />
              <div style={{ fontSize: 8, color: "#60A5FA", letterSpacing: "0.1em", marginTop: 2 }}>IDENTITY KIT</div>
            </div>
          </div>
        </div>
        {/* Nav */}
        <nav style={{ padding: "12px 0", flex: 1 }}>
          {NAV.map(({ group, items }) => (
            <div key={group} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#475569", letterSpacing: "0.14em", textTransform: "uppercase", padding: "8px 18px 4px" }}>
                {group}
              </div>
              {items.map(({ id, label }) => {
                const isActive = active === id
                return (
                  <button
                    key={id}
                    onClick={() => setActive(id)}
                    style={{
                      width: "100%", textAlign: "left", padding: "8px 18px",
                      background: isActive ? "rgba(37,88,232,.35)" : "transparent",
                      borderLeft: isActive ? `3px solid ${BL}` : "3px solid transparent",
                      color: isActive ? "#fff" : "#94A3B8",
                      fontSize: 11, fontWeight: isActive ? 600 : 400,
                      border: "none", cursor: "pointer", letterSpacing: "0.01em",
                      transition: "all .15s",
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>
        <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,.08)", fontSize: 8, color: "#475569" }}>
          © 2026 PT Next Aura Sejahtera
        </div>
      </div>

      {/* Content */}
      <main style={{ flex: 1, overflowY: "auto", padding: "32px 28px" }}>
        {pages[active]}
      </main>
    </div>
  )
}
