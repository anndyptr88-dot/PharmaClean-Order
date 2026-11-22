
// ======================================================
// PHARMACLEAN - JAVASCRIPT
// File: script.js
//
// Fungsi:
// 1. Menghitung total harga produk.
// 2. Mengambil data pemesan.
// 3. Menyimpan data pesanan ke Local Storage.
// 4. Menampilkan data pesanan di halaman pembayaran.
// ======================================================


// HARGA PRODUK
// Harga satu botol PharmaClean adalah Rp15.000.
const hargaProduk = 15000;


// FUNGSI FORMAT RUPIAH
// Mengubah angka menjadi format mata uang Rupiah.
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}


// ======================================================
// BAGIAN 1: FORM PEMESANAN
// ======================================================

// Mengambil elemen jumlah produk dan total harga.
const inputJumlah = document.getElementById("jumlah");
const totalHarga = document.getElementById("totalHarga");

// Mengambil form pemesanan.
const orderForm = document.getElementById("orderForm");


// Memastikan kode hanya berjalan jika halaman
// yang sedang dibuka memiliki form pemesanan.
if (inputJumlah && totalHarga && orderForm) {

    // Fungsi untuk menghitung total harga.
    function hitungTotal() {

        // Mengambil jumlah produk dari input.
        let jumlah = parseInt(inputJumlah.value);

        // Jika jumlah tidak valid atau kurang dari 1,
        // gunakan jumlah 1.
        if (isNaN(jumlah) || jumlah < 1) {
            jumlah = 1;
        }

        // Menghitung jumlah dikali harga produk.
        const total = jumlah * hargaProduk;

        // Menampilkan hasil perhitungan.
        totalHarga.textContent = formatRupiah(total);
    }


    // Menghitung ulang total ketika jumlah diubah.
    inputJumlah.addEventListener("input", hitungTotal);


    // Menampilkan total awal saat halaman dibuka.
    hitungTotal();


    // Menjalankan proses ketika form dikirim.
    orderForm.addEventListener("submit", function(event) {

        // Mencegah halaman dimuat ulang secara otomatis.
        event.preventDefault();

        // Mengambil data dari setiap input.
        const nama = document.getElementById("nama").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const alamat = document.getElementById("alamat").value.trim();
        const jumlah = parseInt(inputJumlah.value);

        // Memeriksa jumlah produk.
        if (isNaN(jumlah) || jumlah < 1) {
            alert("Jumlah produk minimal 1.");
            return;
        }

        // Menghitung total pembayaran.
        const total = jumlah * hargaProduk;

        // Menggabungkan semua data pesanan.
        const dataPesanan = {
            nama: nama,
            whatsapp: whatsapp,
            alamat: alamat,
            jumlah: jumlah,
            harga: hargaProduk,
            total: total
        };

        // Menyimpan data pesanan di browser.
        localStorage.setItem(
            "dataPesanan",
            JSON.stringify(dataPesanan)
        );

        // Mengarahkan pelanggan ke halaman pembayaran.
        window.location.href = "pembayaran.html";

    });

}


// ======================================================
// BAGIAN 2: HALAMAN PEMBAYARAN
// ======================================================

// Mengambil data pesanan yang tersimpan.
const dataTersimpan = localStorage.getItem("dataPesanan");

// Memeriksa apakah halaman memiliki elemen ringkasan.
const namaPembeli = document.getElementById("namaPembeli");
const nomorPembeli = document.getElementById("nomorPembeli");
const jumlahProduk = document.getElementById("jumlahProduk");
const alamatPembeli = document.getElementById("alamatPembeli");
const totalPembayaran = document.getElementById("totalPembayaran");
// Mengisi harga dan jumlah pada ringkasan tambahan.
const hargaRingkasan = document.getElementById("hargaRingkasan");
const jumlahRingkasan = document.getElementById("jumlahRingkasan");
const totalRingkasan = document.getElementById("totalRingkasan");

if (hargaRingkasan) {
    hargaRingkasan.textContent = formatRupiah(pesanan.harga);
}

if (jumlahRingkasan) {
    jumlahRingkasan.textContent = pesanan.jumlah + " produk";
}

if (totalRingkasan) {
    totalRingkasan.textContent = formatRupiah(pesanan.total);
}


