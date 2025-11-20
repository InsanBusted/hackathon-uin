const Pricing = () => {
  return (
    <div className="w-full py-20 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#63D9FA] to-[#1565C0] bg-clip-text text-transparent">
        Pick The Plan That Fits Your
      </h2>
      <br />
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#63D9FA] to-[#1565C0] bg-clip-text text-transparent mb-10">
        Job Application Needs
      </h2>

      <p className="text-gray-500 text-center mb-10 max-w-xl">
        Real Results From People Who Use Our AI To Apply For Jobs Faster,
        Smarter, And Automatically.
      </p>

      <div className="flex flex-col justify-center items-center md:flex-row gap-8 w-full max-w-6xl">
        {/* Free Plan */}
        <div
          className="rounded-3xl p-8 shadow-lg bg-[#0A2F5A] text-white h-[500px] w-[500px]"
        >
          <h3 className="text-2xl font-bold mb-3">Free</h3>
          <p className="text-xl font-semibold mb-3">
            Rp0 <span className="text-sm opacity-80">/ forever</span>
          </p>
          <p className="mb-3">
          Ideal untuk pencari kerja pemula
          </p>

          <button className="w-full py-2 rounded-3xl bg-transparent border border-[#6B5AD2] text-[#FFFFFF] font-semibold mb-8">
            Start free
          </button>
          <hr className="border-t-2 border-white mb-4" />

          <ul className="space-y-3 text-sm opacity-90">
            <li>✔ Pencarian Lowongan Otomatis</li>
            <li>✔ Basic AI Resume Matching</li>
            <li>✔ 5 Aplikasi Bulanan</li>
            <li>✔ Notifikasi Lowongan Dasar</li>
            <li>✔ Template CV Sederhana</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div
          className="rounded-3xl p-8 shadow-2xl bg-linear-to-b from-[#0A2F5A] to-[#269EFF] text-white h-[500px] w-[500px]"
        >
          <h3 className="text-2xl font-bold mb-1">Pro Most Popular</h3>
          <p className="text-xl font-semibold mb-3">
            Rp100.000 <span className="text-sm opacity-80">/ bln</span>
          </p>
          <p className="mb-3">
            Untuk profesional yang serius untuk mencari pekerjaan
          </p>

          <button className="w-full py-2 rounded-3xl bg-linear-to-r from-[#63D9FA] to-[#1565C0] text-[#FFFFFF] font-semibold mb-8">
            Upgrade to Pro – $19/mo
          </button>
          <hr className="border-t-2 border-white mb-4" />

          <ul className="space-y-3 text-sm opacity-90">
            <li>✔ AI Resume Optimization</li>
            <li>✔ Auto-Apply (60 aplikasi/bulan)</li>
            <li>✔ Wawancara AI Mock Interview</li>
            <li>✔ Analytics Peluang Kerja</li>
            <li>✔ Priority Job Matching</li>
          </ul>
        </div>

        {/* Prime+ Plan */}
        <div
          className="rounded-3xl p-8 shadow-lg bg-[#0A2F5A] text-white h-[500px] w-[500px]"
        >
          <h3 className="text-2xl font-bold mb-3">Prime+</h3>
          <p className="text-xl font-semibold mb-3">
            Rp250.000 <span className="text-sm opacity-80">/ bln</span>
          </p>
          <p className="mb-3">
            Untuk pencari kerja yang ingin akselerasi karir
          </p>

          <button className="w-full py-2 rounded-3xl bg-transparent border border-[#6B5AD2] text-white font-semibold mb-8">
            Contact Sales
          </button>
          <hr className="border-t-2 border-white mb-4" />

          <ul className="space-y-3 text-sm opacity-90">
            <li>✔ All Pro Plan Features</li>
            <li>✔ Unlimited Auto-Apply</li>
            <li>✔ Personal Career Coach AI</li>
            <li>✔ LinkedIn Profile Optimization</li>
            <li>✔ Salary Negotiation AI Assistant</li>
            <li>✔ Multi-Industry Job Matching</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="rounded-4xl bg-linear-to-r from-[#269EFF] to-[#0A2F5A] text-white font-bold py-2 px-4 mt-10 hover:from-[#63D9FA] hover:to-[#1565C0] transition-colors duration-300">
          Pelajari lebih banyak
        </button>
      </div>
    </div>
  );
};

export default Pricing;
