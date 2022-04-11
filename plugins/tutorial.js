let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~WarDBotz*

Download dulu apk ny
1) -
2) -
3) -

Sc kalian pindah in ke /storage/emulated/0
setelah itu

Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install 
4) $ pkg install 
5) $ pkg install 
6) $ pkg install 
7) $ pkg install 

Untuk SC Nya BELI :D HARGA ? MURAH CHAT AJ
WA.ME/6289687890508
Cari sendiri :v
8) $ termux-setup-storage
9) $ cd /sdcard/(nama folder sc ny)

*Terakhir*..
Penginstalannya cuy :)
10) *$ npm start* atau *node .*

Klo g muncul qr ny kalian ikuti ini
1) $ pkg install mc
2) $ mc
3) hapus folder session.json atau session.data.json
4) ctrl + z
5) $ *npm start* atau *node .* dan selesai kalian bisa scan

[ Note : Tanda $ Ga Perlu Di Ketik ]
[ Note : Ini Cuma Cara Pemasangan]
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
