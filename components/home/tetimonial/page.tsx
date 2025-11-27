"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
  {
    text: "Dulu aku harus apply satu per satu, edit CV buat tiap perusahaan, capek banget. Setelah pakai platform ini, aku bisa kirim lamaran ke puluhan perusahaan dalam waktu kurang dari 10 menit.",
    name: "Zacky Alvansyah",
    jobType: "CO-FOUNDER",
    socialMedia: "LinkedIn",
    nameSocialMedia: "@Zackyalvansyah",
  },
];

const TestimonialPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 sm:px-6 py-14">
      <h1 className="text-black text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-10">
        Kata Mereka yang Sudah Merasakan
      </h1>

      <div className="w-full max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent
            className="-ml-4 md:overflow-x-auto pb-7 cursor-grab active:cursor-grabbing"

          >
            {listTestimonial.map((item, i) => (
              <CarouselItem
                key={i}
                className="
                  pl-4
                  basis-[85%]
                  sm:basis-[60%]
                  md:basis-[45%]
                  lg:basis-[32%]
                "
              >
                <div
                  className="
                  w-full 
                  min-h-80 sm:min-h-[340px] 
                  border border-[#CBCBCB] 
                  bg-white 
                  rounded-xl 
                  shadow-sm 
                  p-5 sm:p-6 
                  flex flex-col justify-between 
                  transition-transform duration-300 
                  hover:scale-[1.03]
                "
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent leading-relaxed">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] bg-[#D9D9D9] rounded-full" />

                    <div className="flex flex-col">
                      <p className="text-black text-base sm:text-lg font-semibold">
                        {item.name}
                      </p>
                      <p className="text-black text-xs sm:text-sm">
                        {item.jobType}, {item.socialMedia}
                      </p>
                      <p className="text-[#959595] text-xs sm:text-sm">
                        {item.nameSocialMedia}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialPage;
