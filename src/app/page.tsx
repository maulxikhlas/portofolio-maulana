"use client";

export default function Home() {
  const handleDownloadPDF = async () => {
    const element = document.getElementById("portfolio-content");
    if (!element) return;

    // Dynamically import html2canvas-pro and jspdf to prevent SSR issues in Next.js
    const html2canvas = (await import("html2canvas-pro")).default;
    const { jsPDF } = await import("jspdf");

    // Add temporary styling class for light mode pdf rendering
    document.body.classList.add("generating-pdf");

    // Wait a brief moment for the browser to repaint in light mode
    await new Promise((resolve) => setTimeout(resolve, 150));

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save("M_Maulana_Ikhlas_Portfolio.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      // Revert styling class back to original dark mode
      document.body.classList.remove("generating-pdf");
    }
  };

  return (
    <main id="portfolio-content" className="min-h-screen bg-slate-950 text-slate-300 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
              M Maulana Ikhlas
            </h1>
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              Cybersecurity & IT Enthusiast
            </p>
          </div>
          <div className="text-sm space-y-2 text-slate-400 flex flex-col md:items-end">

            {/* Icon Lokasi */}
            {/* Icon Email */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=m.maulikhlas19@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span>m.maulikhlas19@gmail.com</span>
            </a>

            {/* Icon LinkedIn (Bisa di-klik) */}
            <a href="https://linkedin.com/in/username-lu-disini" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span>@maulanaikhlas</span>
            </a>

            {/* Icon GitHub (Bisa di-klik) */}
            <a href="https://github.com/maulxikhlas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <span>github.com/maulxikhlas</span>
            </a>

            {/* Tombol PDF */}
            <button
              onClick={handleDownloadPDF}
              className="mt-2 px-4 py-2 bg-slate-100 text-slate-900 font-bold rounded-md hover:bg-cyan-400 transition-colors text-xs flex items-center gap-2 print:hidden"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Export PDF
            </button>

          </div>
        </header>

        {/* --- PROFIL --- */}
        <section>
          <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-cyan-500 inline-block pb-1">
            Profil
          </h2>
          <p className="leading-relaxed text-slate-400 text-justify">
            Saya adalah mahasiswa program studi Pendidikan Teknologi Informasi dengan minat mendalam di bidang eksplorasi keamanan siber (Cybersecurity) dan pengembangan web. Saya memiliki pengalaman praktis dalam membangun antarmuka pengguna modern, merancang basis data, serta melakukan analisis komparatif antara kode rentan dan kode aman pada ekosistem framework modern.
          </p>
        </section>

        {/* --- DUA KOLOM: PROYEK & PENDIDIKAN --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* KOLOM KIRI: PROYEK & PENGALAMAN */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-cyan-500 inline-block pb-1">
              Proyek & Eksplorasi
            </h2>
            <div className="space-y-6">

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-lg">CRUD Rental PS</h3>
                  <span className="text-xs font-mono text-slate-500">2026</span>
                </div>
                <p className="text-sm font-medium text-cyan-400 mb-2">Web Developer</p>
                <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-slate-400">
                  <li>Membangun sistem manajemen rental PlayStation berbasis Next.js dan Tailwind CSS.</li>
                  <li>Mengimplementasikan fitur pencatatan inventaris dan kalkulasi durasi sewa otomatis.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-lg">Cyber Fortress Tycoon</h3>
                  <span className="text-xs font-mono text-slate-500">2026</span>
                </div>
                <p className="text-sm font-medium text-cyan-400 mb-2">Cybersecurity Educational Simulation Developer</p>
                <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-slate-400">
                  <li>Dikembangkan sebagai simulation game berbasis text-based yang berfokus pada pendidikan cybersecurity dasar.</li>
                  <li>Mendesain game mechanics untuk mensimulasikan arsitektur jaringan dasar, firewalls, dan analisis kerentanan.</li>
                  <li>Menggunakan game sebagai alat bantu edukasi untuk mengajarkan keamanan kata sandi, deteksi phishing, dan incident response.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-lg">Vulnerable vs Secure Lab</h3>
                  <span className="text-xs font-mono text-slate-500">2026</span>
                </div>
                <p className="text-sm font-medium text-cyan-400 mb-2">Security Researcher</p>
                <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-slate-400">
                  <li>Mendokumentasikan simulasi serangan injeksi pada *raw queries* di framework Laravel.</li>
                  <li>Memberikan solusi mitigasi keamanan menggunakan standarisasi Eloquent ORM.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* KOLOM KANAN: PENDIDIKAN */}
          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-cyan-500 inline-block pb-1">
              Riwayat Pendidikan
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-lg">Pendidikan Teknologi Informasi</h3>
                  <span className="text-xs font-mono text-slate-500">2025 - Skrg</span>
                </div>
                <p className="text-sm text-slate-400">Universitas Metamedia, Padang</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-white text-lg">Multimedia</h3>
                  <span className="text-xs font-mono text-slate-500">2020 - 2023</span>
                </div>
                <p className="text-sm text-slate-400">SMK Negeri 4 Padang</p>
              </div>
            </div>
          </section>

        </div>

        {/* --- DUA KOLOM: KEMAMPUAN & BAHASA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-cyan-500 inline-block pb-1">
              Kemampuan
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Cybersecurity', 'Next.js', 'React', 'Tailwind CSS', 'Laravel', 'Python', 'MySQL'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300 hover:border-cyan-500 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-cyan-500 inline-block pb-1">
              Bahasa
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
              <li>Bahasa Indonesia</li>
              <li>Bahasa Inggris (Membaca Dokumentasi Teknis)</li>
            </ul>
          </section>

        </div>

        {/* --- FOOTER --- */}
        <footer className="pt-12 text-center text-xs text-slate-600 font-mono">
          &copy; 2026 M Maulana Ikhlas. Crafted with Next.js & Tailwind.
        </footer>

      </div>
    </main>
  );
}