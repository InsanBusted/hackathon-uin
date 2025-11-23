const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto text-center">
        {/* Happy Users */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <p className="text-white font-medium">5000+ Happy Users</p>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Temukan Pekerjaan Yang Tepat,
          <br />
          Secara <span className="text-[#003C82]">Otomatis</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white max-w-2xl mx-auto mt-4">
          Platform Kami Memanfaatkan AI Dan Analisis Data Untuk Menemukan
          Peluang Kerja Terbaik Bagi Anda, Tanpa Proses Rumit, Agar Anda Bisa
          Fokus Mengembangkan Diri Dan Karier.
        </p>
      </div>
    </section>
  );
};

export default Hero;
