let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *indosat:* [085722539582]
┣➥ *Tri:* [089687890508]
┣➥ *Dana:* [089687890502]
┣➥ *Saweria:* [https://saweria.co/Scaff]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289687890508*
┃ *BIAR BOT ON TRUS DONASI 🗿🚬
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
