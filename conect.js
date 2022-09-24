const { default: makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, mentionedJid, processTime, Presence, Mimetype, Browsers, delay 
} = require('@adiwajshing/baileys');

const { hx, fs, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, createExif, wait, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, kyun, state, SaveState, P } = require('./consts-func.js')


const { startAle } = require("./index.js")

console.log(banner3.string)   
console.log(banner2.string)

module.exports = conn = async (conn, update) => {
  
const { connection, lastDisconnect, qr } = update
if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)


console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)


console.log(color("Boa sorte, caso de bugs, apenas desligue e ligue novamente, pressionando volume de menos do celular e apertando letra C"))

if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm baileys_store_multi.json")  
exec("rm auth_info_multi.json")
console.log(color("QRCODE MORTO, NÃO ESCANEOU CORRETAMENTE, IREI APAGAR ELE E GERAR UM NOVO QRCODE...", "red"))
process.exit()
}

}

if(connection === 'connecting') {
 start('2', 'CONECTANDO CONSOLE')    
}

if(connection === 'open') {
success('2', 'SUPSHOCK CONSOLE CONECTADO')
}

if(shouldReconnect) {
 startAle()
}

}
