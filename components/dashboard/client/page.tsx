const DashboardClient = () => {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center min-h-screen gap-4 ">
      <h1 className="text-4xl font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] py-2 font-baloo bg-clip-text text-transparent">
        Saatnya Tambah Project Lagi
      </h1>
      <p className="text-md text-[#0A2F5A]">
        Lokerin Akan Mempertemukan Anda Dengan Potensi Terbaik Yang Telah Di
        Seleksi Oleh AI Kami
      </p>
      <button className="bg-[#64B5F6] rounded-lg text-white px-4 py-2 flex items-center hover:bg-[#42A5F5] transition">
        + <span className="ml-3">Buat Project</span>
      </button>
    </div>
  );
};

export default DashboardClient;
