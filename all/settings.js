require("./module")

global.owner = "6285162713889"
global.ownerStore = "6185162713889"
global.namabot = "dzx"
global.namaCreator = "DZXAK"
global.namaStore = "DZXAK"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0.0'
global.namasc = 'DZX - private'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.packname = ""
global.author = "DZXAK"
global.jumlah = "5"
global.youtube = "-" // Isi Sendiri
global.grup = "https://chat.whatsapp.com/B4zxIYEV1fxEpt7I1N64go" // Isi Sendiri
global.telegram = "dzxaktech" // Isi Sendiri
global.github = "-" // Isi Sendiri

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})