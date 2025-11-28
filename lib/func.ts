export function clearName(username: string) {
  return username
    .toLowerCase()          // ubah semua huruf menjadi lowercase
    .trim()                 // hapus spasi di awal/akhir
    .replace(/\s+/g, "-");  // ganti spasi (atau multiple spasi) menjadi "-"
}