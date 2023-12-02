const fs = require('fs')
const chalk = require('chalk')

global.owner = "6285162713889"
global.ownerStore = "6285162713889"
global.namabot = "DZX - PRIVATE"
global.namaCreator = "DZXAK"
global.namaStore = "DZXAK"
global.autoJoin = false
global.antilink = false
global.themeemoji = '🪀'
global.versisc = '5.0.0'
global.namasc = 'DZXAK SC PRIVATE'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.packname = "DZX"
global.author = "By DZXAK"
global.jumlah = "5"
global.youtube = "https://youtube.com/@"
global.grup = "https://chat.whatsapp.com/HHXXYLAvsE560B3R6rYmO2"
global.telegram = "*Masih Proses Kak*"
global.instagram = "*Masih Proses Kak"
global.github = "Dzxak-Cloud"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})