document.addEventListener("DOMContentLoaded", function () {
  const biodata = {
    nama: "Gilland Restu Havizullah",
    nim: "042900828",
    jenisKelamin: "Laki-Laki",
    programStudi: "Sistem Informasi",
    fakultas: "Ilmu Komputer",
  };

  document.getElementById("nama").textContent = biodata.nama;
  document.getElementById("nim").textContent = biodata.nim;
  document.getElementById("jenisKelamin").textContent = biodata.jenisKelamin;
  document.getElementById("programStudi").textContent = biodata.programStudi;
  document.getElementById("fakultas").textContent = biodata.fakultas;
});
