let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• FERDI HASAN
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS/USE HP 
┃• FFmpeg
┃• ImageMagick
┃
┃> Thanks To :
┃• Nurutomo
┃• Zevano
┃• WARD |ME)
┃• NAYLA 
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [089687890508]
┣➥ *Dana:* [089687890502]
┣➥ *indosat:* [089687890508]
┣➥ *LinkAja:* [blom bkin ]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6289687890508*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NAYLABOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
