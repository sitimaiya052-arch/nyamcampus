
function checkout() {

    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let nomorWA = "6282283756725"; 
    // GANTI dengan nomor WhatsApp penjual

    let pesanWA = "HALO NYAM CAMPUS!\n";
    pesanWA += "Saya ingin memesan makanan dan minuman:\n\n";

    let total = 0;

    keranjang.forEach((item, index) => {

        let subtotal = item.harga * item.jumlah;
        total += subtotal;

        pesanWA += (index + 1) + ". " + item.nama + "\n";
        pesanWA += "Jumlah: " + item.jumlah + "\n";
        pesanWA += "Harga: Rp " + item.harga.toLocaleString("id-ID") + "\n";
        pesanWA += "Subtotal: Rp " + subtotal.toLocaleString("id-ID") + "\n\n";
    });

    pesanWA += "------------------------\n";
    pesanWA += "TOTAL PESANAN: Rp " + total.toLocaleString("id-ID") + "\n";
    pesanWA += "Terima kasih.";

    let url = "https://api.whatsapp.com/send?phone=" +
        nomorWA + "&text=" + encodeURIComponent(pesanWA);

    window.location.href = url;
}
