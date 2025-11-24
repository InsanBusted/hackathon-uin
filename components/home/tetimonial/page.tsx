const listTestimonial = [
  {
    text: "Fitur Smart Matching-nya juara sih. Lowongan yang direkomendasikan bener-bener sesuai sama skill & gaji yang aku mau. Plus, dataku aman banget karena pakai blockchain. Rasanya kayak punya asisten pribadi buat cari kerja.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Sebelumnya aku harus apply satu-satu, edit CV berkali-kali, dan itu makan waktu banget. Setelah pakai sistem ini, aku bisa apply ratusan lowongan cuma dalam hitungan menit. Jujur, ini ngubah cara aku cari kerja.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit. Sekarang aku hemat waktu, tapi peluang kerjaku justru makin besar.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Aku baru lulus dan bingung mulai dari mana. Sistem ini bantu pilih lowongan yang cocok sama skill-ku, terus apply otomatis.nggak nyangka prosesnya sesimpel ini. Bahkan tanpa pengalaman panjang pun jadi lebih percaya diri.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit. Sekarang aku hemat waktu, tapi peluang kerjaku justru makin besar.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Fitur Smart Matching-nya juara sih. Lowongan yang direkomendasikan bener-bener sesuai sama skill & gaji yang aku mau. Plus, dataku aman banget karena pakai blockchain. Rasanya kayak punya asisten pribadi buat cari kerja.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Sebelumnya aku harus apply satu-satu, edit CV berkali-kali, dan itu makan waktu banget. Setelah pakai sistem ini, aku bisa apply ratusan lowongan cuma dalam hitungan menit. Jujur, ini ngubah cara aku cari kerja.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
]

const TestimonialPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center max-w-4xl w-full">
        <h1 className="text-center text-xl font-semibold mb-10">
          Kata Mereka yang Sudah Merasakan
        </h1>

        <div className="flex items-center justify-center gap-6 w-full">
          {listTestimonial.map((item, i) => (
            <div
              key={i}
              className="border border-[#959595] rounded-lg p-6 shadow-md w-full max-w-md"
            >
              <p className="text-lg font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent mb-4">
                {item.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="rounded-full w-[50px] h-[50px] bg-[#D9D9D9]" />

                <div className="flex flex-col">
                  <p className="text-black text-lg font-semibold">{item.name}</p>
                  <p className="text-black text-sm">
                    {item.jobType}, {item.socialMedia}
                  </p>
                  <p className="text-[#959595] text-sm">{item.nameSocialMedia}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialPage
