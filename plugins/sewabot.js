let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 40K / Permanent
│
│ > Pembayaran :
│• DANA : 089687890502
│• TRI : 089687890508
|• INDOSAT:085722539582
|®®®®®®®®®®®®®®®®®®®®®®®®
|.  KEUNTUNGAN SEWA BOT
|•ANTI LINK GRUP 
|•MENJAGA GRUP DENGAN AMAN 
|•MENCEGAH KIRIMAN BERUPA VIRTEX/PHILIPS DLL
|•DAN BERMAIN DENGAN BOT 
|
|    KEKURANGAN BOT KAMI 
|~FITUR KAMI TIDAK MUNGKIN BISA SEMUA RATA
|RATA ERROR/150-200
|•DAN KAMI SEDANG MEMPERBAIKAN FITUR SATU 
|PERSATU
|•FITUR ASLI KAMI 2500+
|•   HAK PEMILIK BOT
|•OWNER GC HARUS MEMBOLEHKAN BOT SAYA 
|PROMOSI KE GRUP PENYEWA 
|SETUJU ATAU TIDAK ITU HAK SAYA 😁
|TIDAK SETUJU, TIDAK USH SEWA BOT 🙏
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
