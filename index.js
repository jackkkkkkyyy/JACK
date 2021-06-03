const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require("fs-extra")
const axios = require('axios')
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktok = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./ANBOTdidin')
const { color, bgcolor } = require('./lib/color')
const { exif } = require('./lib/exif')
const { animesaran } = require('./src/animesaran')
const { animesaran2 } = require('./src/animesaran2')
const { help } = require('./lib/help')
const { rules } = require('./src/rules')
const { listsurah } = require('./src/listsurah')
const { sound } = require('./lib/sound')
const { bahasa } = require('./lib/bahasa')
const { donasi } = require('./lib/donasi')
const { didinp } = require('./src/didin')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')

const { wait, banner, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')


const ZeksApi = 'HADIR_HMM'
const leysKey = 'MNQYOVSL'
const XteamD = '7415bc4287ad5ca8'
const apiKey = '7ed90d537ab5edddb6ba6465'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:OWNER\n'
            + 'ORG: JACK-BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285262317166:+6285262317166\n'
            + 'END:VCARD'
prefix = ''
battre = 85
blockcall = false
blocked = []   
didinlimit = '50'
cr = `*JACK-BOT*`
reply = '*REPLY BY didin*'
wmstiker = 'JACK-BOT'
anbotwm = 'JACK'
vr = '*JACK-BOT*'
/******** OWNER NUMBER**********/
const ownerNumber = ["6285262317166@s.whatsapp.net"]
/*********ANBOT-D********/
const _leveling = JSON.parse(fs.readFileSync('./ANBOT-D/leveling.json'))
const gombal = JSON.parse(fs.readFileSync('./src/gombal.json'))
const muslim = JSON.parse(fs.readFileSync('./didin/muslim.json'))
const tahlil = JSON.parse(fs.readFileSync('./didin/tahlil.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./src/hekerbucin.json'))
const ban = JSON.parse(fs.readFileSync('./ANBOT-D/banned.json'))
const _samih = JSON.parse(fs.readFileSync('./ANBOT-D/simi.json'))
const katailham = JSON.parse(fs.readFileSync('./src/katailham.json'))
const premium = JSON.parse(fs.readFileSync('./ANBOT-D/didin.json'))
const _level = JSON.parse(fs.readFileSync('./ANBOT-D/level.json'))
const _registered = JSON.parse(fs.readFileSync('./ANBOT-D/registered.json'))
const badword = JSON.parse(fs.readFileSync('./ANBOT-D/badword.json'))
const antivirtex = JSON.parse(fs.readFileSync('./ANBOT-D/antivirtex.json'))
const katakasar = JSON.parse(fs.readFileSync('./ANBOT-D/katakasar.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./ANBOT-D/bucin.json'))
const welkom = JSON.parse(fs.readFileSync('./ANBOT-D/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./ANBOT-D/nsfw.json'))
const event = JSON.parse(fs.readFileSync('./ANBOT-D/event.json'))
const _limit = JSON.parse(fs.readFileSync('./ANBOT-D/limit.json'))
const uang = JSON.parse(fs.readFileSync('./ANBOT-D/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./ANBOT-D/antilink.json'))
/*********** END LOAD ***********/
//memburu
const hasilburuan = [
  '🐇 kelinci',
  '🦖 Tirex',
  '🦏 Badak',
  '🐒 Monyet',
  '🐅 Harimau',
  '🐆 Macan Tutul',
  '🐎 Kuda',
  '🐘 Gajah',
  '🦇 Kelelawar',
  '🕊 Merpati',
  '🐊 Buaya',
  '🐉 Naga',
  '🦕 Sauropod'
  ]
//batas memburu
// ini slott
const slotnohoki = [
		'🐡 : 🐬 : 🐋',
		'🐓 : 🐬 : 🦉',
    '🐿 : 🦔 : 🐲',
    '🐭 : 🐱 : 🐿',
    '🐡 : 🐭 : 🐋',
    '🐭 : 🐬 : 🐶',
    '🦘 : 🐬 : 🦥',
    '🐡 : 🐠 : 🦄',
    '🦀 : 🐬 : 🐠',
    '🦋 : 🐜 : 🐋',
    '🐡 : 🐞 : 🐌',
    '🐜 : 🐞 : 🐌',
    '🐘 : 🐬 : 🐋',
    '🐡 : 🐃 : 🐋',
    '🐡 : 🐬 : 🦏',
    '🦏 : 🐘 : 🐃',
    '🐜 : 🦂 : 🦏'
  ]
const slott = [
		'🐡 : 🐬 : 🐋 YOU LOSE',
		'🐋 : 🐋 : 🐋 YOU WIN',
		'🐓 : 🐬 : 🦉 YOU LOSE',
		'🐓 : 🐓 : 🐓 YOU WIN',
    '🐿 : 🦔 : 🐲 YOU LOSE',
    '🐡 : 🐡 : 🐡 YOU WIN',
    '🐭 : 🐱 : 🐿 YOU LOSE',
    '🐡 : 🐭 : 🐋 YOU LOSE',
    '🐭 : 🐬 : 🐶 YOU LOSE',
    '🦄 : 🦄 : 🦄 YOU WIN',
    '🦘 : 🐬 : 🦥 YOU LOSE',
    '🐡 : 🐠 : 🦄 YOU LOSE',
    '🦀 : 🦀 : 🦀 YOU WIN',
    '🦀 : 🐬 : 🐠 YOU LOSE',
    '🦋 : 🐜 : 🐋 YOU LOSE',
    '🐡 : 🐞 : 🐌 YOU LOSE',
    '🐜 : 🐞 : 🐌 YOU LOSE',
    '🐘 : 🐬 : 🐋 YOU LOSE',
    '🐡 : 🐃 : 🐋 YOU LOSE',
    '🐡 : 🐬 : 🦏 YOU LOSE',
    '🦏 : 🐘 : 🐃 YOU LOSE',
    '🐜 : 🦂 : 🦏 YOU LOSE'
  ]
/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./ANBOT-D/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./ANBOT-D/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./ANBOT-D/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
            }
        }


function monospace(string) {
return '```' + string + '```'
}
        
function addMetadata(packname, author) {
				if (!packname) packname = 'JACKBOT'; if (!author) author = ' didin';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = jacknp.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = jacknp.from(last, "hex")
				const buf3 = jacknp.from(bytes)
				const buf4 = jacknp.from(JSON.stringify(json))

				const jacknp = jacknp.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, jacknp, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION *********/
async function starts() {
const didin = new WAConnection()
console.log(banner.string)
   didin.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('JACK-BOT','red'), color('(+)','white'), color(' SCAN QR CODENYA','aqua'), color('JACK GANTENG','yellow'))
})

	didin.on('credentials-updated', () => {
		fs.writeFileSync('./didin.json', JSON.stringify(didin.base64EncodedAuthInfo(), null, '\t'))
		info('2', '「 INFO 」')
	})
	fs.existsSync('./didin.json') && didin.loadAuthInfo('./didin.json')
	didin.on('connecting', () => {
		start('2', color('「 JACK-BOT 」    ','aqua'))
	})
	didin.on('open', () => {
		success('2', color('「 TERHUBUNG JACK-BOT 」','red'))
	})
	didin.connect({timeoutMs: 30*1000})

didin.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
mem = anu.participants[0]

			console.log(anu)

            try {
            pp_user = await didin.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await didin.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'demote') {
            mdata = await didin.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = didin.contacts[mem]
            teks = `*Selamat Untuk @${num.split('@')[0]}*\n*Anda Telah Turun Pangkat, Tadinya Admin Sekarang Member*`
	        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Turun Pangkat&pp=${pp_user}&bg=${pp_grup}`)
	        
		didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
		if (anu.action == 'promote') {
            mdata = await didin.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = didin.contacts[mem]
            teks = `*Selamat Kepada @${num.split('@')[0]}*\n*Anda Telah Naik Pangkat, Dari Member Menjadi Admin*`
	        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Naik Pangkat&pp=${pp_user}&bg=${pp_grup}`)
	        
		didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'add') {
            mdata = await didin.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = didin.contacts[mem]
            teks = `*Halo @${num.split('@')[0]}*\n*Welcome in ${mdata.subject}*\n\n*Silahkan Intro ya*\n*Nama* : \n*Umur* : \n*Gender* : \n*Asal* : \n\n*Semoga Betah dan Jangan Lupa isi*`
	        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
	        
		didin.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await didin.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = didin.contacts[mem]
                member = mdata.participants.length
                out = `*Sayonara @${num.split('@')[0]}  Beban GC 😏*`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
                didin.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
)
	didin.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	

	
	didin.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (!mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (!mek.key.fromMe && mek.key.fromMe) return
			global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
			const txt = mek.message.conversation
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			didin.chatRead(from)
const meNumber = didin.user.jid
			const didinanbot = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = didin.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = didin.contacts[sender] != undefined ? didin.contacts[sender].vname || didin.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await didin.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					didin.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
      //ucapan waktu
		    const jam_ini = moment().format('HH')
        var ucapan = 'Menunaikan Salat Subuh'
        if (jam_ini >= '04' && jam_ini <= '06') {
          ucapan = 'Pagi'
        } else if (jam_ini >= '06' && jam_ini <= '10') {
         ucapan = 'siang'
        } else if (jam_ini >= '10' && jam_ini <= '12') {
          ucapan = 'Menunaikan Salat Dzuhur'
        } else if (jam_ini >= '12' && jam_ini <= '13') {
          ucapan = 'siang'
        } else if (jam_ini >= '13' && jam_ini <= '15') {
          ucapan = 'Menunaikan Salat Ashr'
        } else if (jam_ini >= '15' && jam_ini <= '16') {
          ucapan = 'petang'
        } else if (jam_ini >= '16' && jam_ini <= '18') {
          ucapan = 'Menunaikan Salat Maghrib'
        } else if (jam_ini >= '18' && jam_ini <= '17') {
          ucapan = 'Malam'
        } else if (jam_ini >= '17' && jam_ini <= '19') {
          ucapan = 'Menunaikan Salat Isya'
        } else if (jam_ini >= '19' && jam_ini <= '20') {
          ucapan = 'Malam'
        } else {
          ucapan = 'Tidur'
        }
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false
		  const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			const totalChat = didin.chats.all()
			const isBadWord = isGroup ? badword.includes(from) : false
			const isAntiVirtex= isGroup ? antivirtex.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
didin.on (`CB:action,,battery`, json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
        })
didin.on('CB:action,,call', async json => {
        const penelpon = json[2][0][1].from;
        didin.updatePresence(from, Presence.composing) 
        didin.blockUser(penelpon, 'add')
        });
{}
			const reply = (teks) => {
				didin.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				didin.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? didin.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    didin.sendMessage(from, teks, image, {quoted:mek})
		    }

		    const costum = (pesan, tipe, target, target2) => {
			didin.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    didin.sendMessage(from, audio, mp3, {quoted:mek})
		    }

			var premi = 'NO'
			if (isPrem) {
				premi = 'YES'
			} 
			if (isOwner) {
				premi = 'didin'
			}
			var bann = 'NO'
			if(isBanned) {
			bann = 'YES'
			}
      var simihh = 'OFF'
			if(isSimi) {
			simihh = 'ON'
			}
			var welcomee = 'OFF'
			if (isWelkom) {
			welcomee = 'ON'
			}
			var nsfww = 'OFF'
			if (isNsfw) {
			nsfww = 'ON'
			}
			var badWordd = 'OFF'
			if (isBadWord) {
			badWordd = 'ON'
			}
			var antiLinkk = 'OFF'
			if (isAntiLink) {
			antiLinkk = 'ON'
			}
			var antiVirtexx = 'OFF'
			if (isAntiVirtex) {
			antiVirtexx = 'ON'
			}
			
			
			

            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = didinlimit - lmt.limit
                            if (limitCounts <= 0) return didin.sendMessage(from,`Limit anda sudah habis\n\n_Note : Limit akan direset setiap jam 00.00! atau anda bisa membeli limit dengan ${prefix}buylimit 2_`, text,{ quoted: mek})
                            didin.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(_limit))
                        didin.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= didinlimit ) {
              	  position = true
                    didin.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./ANBOT-D/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	
        
      
            //function bance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
            if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname} Adalah Admin Group Kamu Tidak Akan Di Kick*`)
		didin.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('*Hmm Bye Beban GC*')
		}, 1100)
		setTimeout( () => {
		didin.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`*Byee Kamu Akan Di Kick Sbntr Lgi Karena Anda Share Link GC,Byee Ini Group Antilink*`)
		}, 0)
		}
		  


           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuoteddidin = type === 'extendedTextMessage' && content.includes('textMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
	
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIBADI ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  PUBLIK  ]", "aqua"), color(budy, "white"), "DARI", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			let authorname = didin.contacts[from] != undefined ? didin.contacts[from].vname || didin.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) {
            case 'unreadall':
        		if (!isOwner) return reply(ind.ownerb())
                var chats = await didin.chats.all()
                chats.map( async ({ jid }) => {
                await didin.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await didin.sendMessage(from, teks, MessageType.text, {quoted: mek})
		    console.log(chats.length)
	        break
            case 'readall':
			if (!isOwner) return reply(ind.ownerb())
                var chats = await didin.chats.all()
                chats.map( async ({ jid }) => {
                await didin.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await didin.sendMessage(from, teks, MessageType.text, {quoted: mek})
		console.log(chats.length)
		break
		case 'panah':
		  const hasilburuann = hasilburuan[Math.floor(Math.random() * hasilburuan.length)]
                    if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${command +  ini}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${hasilburuann}* ]`)
                    }, 20000)
                    break
                    
					
					case 'slot':
            const slottt = slott[Math.floor(Math.random() * slott.length)]
            const slote = slotnohoki[Math.floor(Math.random() * slotnohoki.length)]
            didin.sendMessage(from, `[ SLOTS ]\n\n${slote}\n${slottt}\n${slote}\n\n[ SLOTS ]`, text, { quoted: mek })
            break
					case 'bannedlist':
ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					didin.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'dompet':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				
				break
				case 'joox':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`*Example: ${prefix + command} Melukis Senja*`)
                    query = args.join(" ")
                    jooxbydidin = await fetchJson(`https://api.xteam.xyz/dl/jooxdl?lagu=${query}&APIKEY=${XteamD}`)
                    jooxbydidin = jooxbydidin.result
                    didinbot = `Title : ${jooxbydidin.songname}\nArtists : ${jooxbydidin.singers}\nDuration : ${jooxbydidin.duration}\nAlbum : ${jooxbydidin.album}\nUkuran : ${jooxbydidin.filesize}\nke : ${jooxbydidin.ext}\n`
                    thumbnail = await getBuffer(jooxbydidin.album_url)
                    didin.sendMessage(from, thumbnail, image, { quoted: mek, caption: didinbot })
                    get_audio = await getBuffer(jooxbydidin.download_url)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${jooxbydidin.songname}.mp3`, quoted: mek})
                    await limitAdd(sender)
                    break
case 'nickgame':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=MNQYOVSL`)
				nick = anu.result
				reply(nick)
				break
				case 'darklogo': 
		//NEW BY AnggaGanzz XZ
				gatauda = body.slice(9)
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teksnya mana um')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${gatauda}&APIKEY=f5823afb6bf99782`, {method: 'get'})
				Angga.sendMessage(from, buffer, image, {quoted: mek, caption: '*INI BROH*'})
				await limitAdd(sender)
				break
				case 'darkjoke':
         if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 didin.sendMessage(from, darkjokes, image, {quoted: mek, caption: '*SENTER MANA SENTER*'})
				await limitAdd(sender)
				break
				case 'bagaimanakah':
					//  Case by castleroboXv15&YogPw
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: MythicXbot })
					await limitAdd(sender)
					break
				case 'autosticker': 
				    if (!isRegistered) return reply(ind.noregis())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (args[0] === 'enable') {
						if (isAutoStickerOn) return reply('*Autosticker sudah aktif sebelumnya*')
						_autosticker.push(from)
						fs.writeFileSync('./database/json/autosticker.json', JSON.stringify(_autosticker))
						reply('「 *AUTOSTICKER* 」 *SUKSES*...')
					} else if (args[0] === 'disable') {
						_autosticker.splice(from, 1)
						fs.writeFileSync('./database/json/autosticker.json', JSON.stringify(_autosticker))
						reply('「 *AUTO STICKER* 」 *Sukses dimatikan*')
					} else {
						reply('*enable untuk mengaktifkan, disable untuk menonaktifkan*')
					}
					break
				case 'meme':
				  case 'memeindo':
if (isBanned) return reply( ind.banned(pushname))
        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 didin.sendMessage(from, memeall, image, {quoted: mek, caption: '*INI*'})
                await limitAdd(sender)
				break
				  case 'bokunh':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/bokunohero.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 bokunohero = await getBuffer(randKey.result)
                 didin.sendMessage(from, bokunohero, image, {quoted: mek, caption: '*INI*'})
                 await limitAdd(sender)
				break
				case 'hobby':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				  case 'sao':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 didin.sendMessage(from, swordartonline, image, {quoted: mek, caption: '*swort art online*\n*INI*'})
                 await limitAdd(sender)
				break
				  case 'hsdxd':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 didin.sendMessage(from, highschooldxd, image, {quoted: mek, caption: '*INI*'})
                 await limitAdd(sender)
				break
				  case 'lovelive':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./ANIME/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 didin.sendMessage(from, lovelive, image, {quoted: mek, caption: '*INI*'})
                 await limitAdd(sender)
				break
		case 'aesthetic':
	 case 'estetic':
if (isBanned) return reply( ind.banned(pushname))
				        if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				didin.updatePresence(from, Presence.composing) 
				 if (!isRegistered) return reply(ind.noregis())
				 data = fs.readFileSync('./src/estetik.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 didin.sendMessage(from, memeall, image, {quoted: mek, caption: '*INI*'})
                await limitAdd(sender)
				break
				case 'ppcouple':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/ppcouple.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					Laki = await getBuffer(randKey.result.laki)
					didin.sendMessage(from, Laki, image, didinanbot, { caption: '*_INI_*', quoted: mek })
		      Cewe = await getBuffer(randKey.result.cewek)
					didin.sendMessage(from, Cewe, image, didinanbot, { caption: '*_INI_*', quoted: mek })
				await limitAdd(sender) 
					break
case 'anime':
  case 'animerandom':
    if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./ANIME/anime.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					Anime = await getBuffer(randKey.result.ranime)
					didin.sendMessage(from, Anime, image, { caption: '*_INI_*', quoted: mek })
				await limitAdd(sender) 
					break
					case 'persegi':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} 2\njika kalian bertanya apa 2\n2 itu sisi 2 dalam persegi yo know lah apa itu persegi yap persegi bukan lah kotak`)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${body.slice(9)}&apikey=MNQYOVSL`)
				ini_saya = `Rumus K : ${anu.rumus_keliling}\nHasil K : ${anu.hasil_keliling}\nRumus L : ${anu.rumus_luas}\nHasil L : ${anu.hasil_luas}\nKalau Mau Lebih Pintar Ya Belajar\nSaya didin`
				reply(ini_saya)
				await limitAdd(sender)
				break
					case 'perkalian':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} 2|2`)
			teks = `${body.slice(11)}`
					pertama = teks.split("|")[0];
					kedua = teks.split("|")[1];
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/perkalian?angka1=${pertama}&angka2=${kedua}&apikey=MNQYOVSL`)
didin.sendMessage(from, anu.result, text,  {quoted: mek})
				await limitAdd(sender)
				break
				case 'mp3toptt':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
                	didin.updatePresence(from, Presence.composing) 
					if (!isQuotedAudio) return reply('❌ *reply videonya Kack* ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ *Gagal, pada saat mengkonversi video ke ptt* ❌')
						buffer = fs.readFileSync(ran)
						JACK.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
					case 'play':   
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				didin.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				didin.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
				case 'vibra':     
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group) 
				    if (!isQuotedAudio) return reply('*Reply audio nya*!!')
				    var req = args.join(' ')      
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await didin.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp4')
                    exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
                    	fs.unlinkSync(media)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
                    fs.unlinkSync(ran)
                    })
                    break
                    case 'semoji': 
                    if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    Angga.sendMessage(from, ini_buffer, sticker, { quoted: nayy1})
                    break      
                   case 'fast1':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
                   if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'gemes':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
					if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
            case 'tempo':
            if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
                   if (!isQuotedAudio) return reply('*Reply audio nya*!!')
                   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'hode':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
				    if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'blub':  
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
				if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					    didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					}) 
				break
				case 'slow1':
				case 'slowmo1':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
				if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=44000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
				if (!isQuotedAudio) return reply('*Reply audio nya*!!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						didin.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'transfer':
if (isBanned) return reply( ind.banned(pushname))
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
				if (args.length < 1) return reply(`contoh : ${prefix}transfer ${tujuantf}|${jumblah}`)
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285298595430@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
                case 'stickergif':
			case 'stikergif':
			case 'gifstiker':
			case 'gifsticker':
			case 'sgif':
			case 'stiker': 
			case 'STIKER':
			case 'stick':
			case 's':
case 'sticker': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await didin.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								didin.sendMessage(from, buffer, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await didin.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								didin.sendMessage(from, buffer, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`*Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik*)`)
					}
					break
				case 'resetlimit':
			if (!isOwner) return reply(ind.ownerb)
      var obj = []
				   fs.writeFileSync('./ANBOT-D/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				case 'limit':
if (isBanned) return reply( ind.banned(pushname))
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
				case 'verify':
				case 'daftar':
        if (isRegistered) return  reply(ind.rediregis())
        fs.writeFileSync('./ANBOT-D/registered.json', JSON.stringify(_registered))
	            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const ini_tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
				const serialUser = createSerial(20)
				try {
				ppimg = await didin.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://i.ibb.co/HGs89qJ/60a510d2324fe.jpg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				_registered.push(sender)
				addRegisteredUser(sender, serialUser)
       addATM(sender)
       addLevelingId(sender)
				const teksnya = 
`
*╭─ 「 PENDAFTARAN USER 」*
*│Pendaftaran Berhasil Dengan*
*│SN: ${serialUser}*
*│Pada Hari ${thisDay}, Jam ${jam}:${menit}:${detik} ${ampm}*
*│Nama: ${pushname}*
*│Nomor: wa.me/${sender.split("@")[0]}*
*│Untuk Menggunakan BOT*
*│Silahkan Kirim ${prefix}menu*
*│Total Pengguna: ${_registered.length} User*
*╰─────────────────────────*

۞۩۞۩۩۞۩۩۞۩۩۞۩۩۞
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔══╦╗────╔╗─╔╗╔╗
╚╗╔╣╚╦═╦═╣╚╗║╚╝╠═╦╦╗
─║║║║║╬║║║╩║╚╗╔╣║║║║
─╚╝╚╩╩╩╩╩╩╩╝─╚╝╚═╩═╝
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
۞۩۞۩۩۞۩۩۞۩۩۞۩۩۞
`
let ini_gambarnya = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=ANBOT-D&pp=${ppimg}&bg=${imglu}`)

                didin.sendMessage(from, ini_gambarnya, MessageType.image, {quoted: mek, caption: teksnya, contextInfo: {"mentionedJid": [sender]}})
                    break
				case 'buylimit':
if (isBanned) return reply( ind.banned(pushname))
				if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply(`mau beli berapa? misal 1 atau 2 dst, harga perlimit 500 Contoh ${prefix + command} 3`)
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				case 'sider':

              

            try {
                    const reader = await message(quotedMsgObj.id)
                    let list = ''
                    for (let pembaca of reader) {
                    list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                    sendTextWithMentions(from, `Ciee, Ngeread...\n${list}`)
            } catch (e) {
                    console.log(e)
                    reply(`Maaf, Belum Ada Yang Membaca Pesan JACK-BOT`)    
            }
                    break
case 'giftlimit': 
				if (!mek.key.fromMe) return
                 if (!isRegistered) return reply( ind.noregis())
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal berbagi limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6285262317166 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            _limit[found].limit -= jmla
                     updated = _limit[found]
                     
        	const result = `「 SUKSES 」\nNS : ${createSerial(20)} \nPADA : ${moment().format('DD/MM/YY HH:mm:ss')}\n\n*「 GIFT KUOTA LIMIT 」*\n• Dari : @${sender.split("@")[0]}\n• Tujuan : ${nomerr}\n• Limit: ${didinlimit-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./ANBOT-D/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, tapi nomor ${nomerr} tidak terdaftar di BOT!`)
                        	}
               			break
  
case 'stikerr':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://api-self.herokuapp.com/api/towebp?url=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, sticker, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break

	case 'removebg':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
	  var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=${ZeksApi}&url=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
case 'gtavposter':
case 'pencil':
case 'pencildrawing':
case 'burneffect':
case 'crossgun':
case 'customwp':
case 'nightbeach':
case 'raindrop':
case '3dlinephoto':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?urlgbr=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
	case 'triggered':
  case 'wasted':
	case 'gay':
	case 'sepia':
	case 'red':
	case 'green':
	case 'blue':
	case 'glass':
var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await  didin.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anuu = `https://some-random-api.ml/canvas/${command}?avatar=${teks}`
					exec(`wget ${anuu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply('*[GAGAL]*')
					exec(`webpmux -set exif ${addMetadata('ANBOT-D', 'didin')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply('*[GAGAL]*')
					didin.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply(`Kirim Foto/Tag Foto yang Sudah di Kirim Dengan Caption ${prefix + command}`)
					}
					await limitAdd(sender) 
					break 
	case 'comunism':
	  case 'wanted':
	    case 'rotate':
	     case 'rip':
	       case 'fuse':
	      case 'delete':
	        case 'tobecontinue':
	          case 'thuglife':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await didin.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 didin.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	await limitAdd(sender)
	break
	var ghs = body.slice(11)
if (isBanned) return reply( ind.banned(pushname))
	  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
	  ini_didin = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp3?apikey=${apiKey}&text=${body.slice(5)}`)
	  didin.sendMessage(from, ini_didin, sticker, {quoted: mek})
	  await limitAdd(sender)
	  break
			  case 'attp':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} BOT`)
            teks = args.join(" ")
					jacknp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					didin.sendMessage(from, jacknp, sticker, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'tts':
if (isBanned) return reply( ind.banned(pushname))
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return didin.sendMessage(from, `Diperlukan kode bahasa!! untuk melihat list bahasa, ketik ${prefix}bahasa`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 3) return didin.sendMessage(from, 'teksnya mana?', text, {quoted: mek})
if (args.length < 2) return didin.sendMessage(from, 'kode bahasa salah', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('teksnya kepanjangan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							jacknp = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							didin.sendMessage(from, jacknp, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
    
					case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						didin.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    didin.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(enmedia)
					await didin.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break 
					case 'tiktoknowm': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    didin.sendMessage(from, buffer, video, )
				    break
				case 'tiktokstalk':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
try {
						if (args.length < 1) return didin.sendMessage(from, '*USERNAMENYA MANA?*', text, {quoted: mek})
          hmm = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${body.slice(12)}&apikey=${leysKey}`)
					jacknp = await getBuffer(hmm.result.user.avatarLarger)

					hasil = `*Nickname : ${hmm.result.user.nickname}*\n*Pengikut : ${hmm.result.stats.followerCount}*\n*Mengikuti : ${hmm.result.stats.followingCount}*\n*Bio : ${hmm.result.user.signature}*\n*Verified : ${hmm.result.user.verified}*`
					didin.sendMessage(from, jacknp, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*[NTAHLAH MUNGKIN USERNAMENYA TIDAK VALID]*')
					}
					await limitAdd(sender)
					break
   
				case 'igstalk':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				try {
						if (args.length < 1) return didin.sendMessage(from, '*USERNAMENYA MANA?*', text, {quoted: mek})
hmm = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${body.slice(9)}&APIKEY=${XteamD}`)
hmm = hmm.result
					jacknp = await getBuffer(hmm.user.profile_pic_url)

					hasil = `*Fullname : ${hmm.user.full_name}*\n*Username : ${hmm.user.username}*\n*Pengikut : ${hmm.friendship_status.followed_by}*\n*Mengikuti : ${hmm.friendship_status.following}*`
					didin.sendMessage(from, jacknp, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*[NTAHLAH MUNGKIN USERNAMENYA TIDAK VALID]*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
if (isBanned) return reply( ind.banned(pushname))
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await didin.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    didin.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
					case 'tagall':
          if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 *BOT TAGALL* 〙', members_id, true)
					break
				case 'hidetag':
if (isBanned) return reply( ind.banned(pushname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                var value = body.slice(8)
                var group = await didin.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                didin.sendMessage(from, options, text)
                await limitAdd(sender)
                break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await didin.chats.all()
					didin.setMaxListeners(25)
					for (let _ of anu) {
						didin.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'ban':
					  if (args.length < 1) return reply(`*contoh* *${prefix + command} @${bnnd}*`)
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./ANBOT-D/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isOwner) return reply(ind.ownerb())
					din02 = body.slice(7)
					delp = ban.indexOf(din02)
					ban.splice(delp, 1)
					fs.writeFileSync('./ANBOT-D/banned.json', JSON.stringify(ban))
					reply(`*Berhasil Menghapus ${din02} Dari Daftar ban*`)
				break
			       case 'block':
				 didin.updatePresence(from, Presence.composing) 
				 didin.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					didin.blockUser (`${body.slice(7)}@c.us`, "add")
					didin.sendMessage(from, `*perintah Diterima, memblokir ${body.slice(7)}@c.us*`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    didin.blockUser (`${body.slice(9)}@c.us`, "remove")
					didin.sendMessage(from, `*Perintah diterima, Membuka ${body.slice(9)}@c.us*`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
        anu = await didin.groupLeave(from, `*Bye Semua Member* *${groupMetadata.subject}*`, groupId)
        break
					case 'gombal':
if (isBanned) return reply( ind.banned(pushname))
       if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = gombal[Math.floor(Math.random() * (gombal.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*GOMBAL BOT*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'qmuslim':
if (isBanned) return reply( ind.banned(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = muslim[Math.floor(Math.random() * (muslim.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*JACK-BOT*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'rdoadl':
if (isBanned) return reply( ind.banned(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = tahlil[Math.floor(Math.random() * (tahlil.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*JACK-BOT*', text, {quoted: mek})
						await limitAdd(sender)
					break
			case 'hapus':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
       if (!isBotGroupAdmins) return reply(ind.badmin())
					didin.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Apa yang mau dicari um*?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
					case 'brainly':                  
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '>🖕l───────────|🖕<\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					didin.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						didin.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						didin.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break  
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
                didin.groupUpdateSubject(from, `${body.slice(9)}`)
                didin.sendMessage(from, '*SUKSES*', text, {quoted: mek})
					break
            case 'setpp':
				                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix + Command} atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(enmedia)
				await didin.updateProfilePicture (from, media)
				
				reply(`\`\`\`✓*Sukses Mengganti Profil Group*\`\`\` *${groupMetadata.subject}*`)
			break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
                didin.groupUpdateDescription(from, `${body.slice(9)}`)
                didin.sendMessage(from, '*SUKSES*', text, {quoted: mek})
					break
case 'ocr': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await didin.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
					case 'ytsearch':
			   if (args.length < 1) return reply('Tolong masukan query!')
		       const srch = args[0];
		       try {
           	var aramas = await yts(srch);
           	} catch {
           	return await didin.sendMessage(from, 'Error!', MessageType.text, dload)
       		}
       		aramat = aramas.all 
       		var tbuff = await getBuffer(aramat[0].image)
       		var ytresult = '';
       		ytresult += '「 *YOUTUBE SEARCH* 」'
       		ytresult += '\n_______________________________\n\n'
   			aramas.all.map((video) => {
           	ytresult += 'Title: ' + video.title + '\n'
               ytresult += 'Link: ' + video.url + '\n_______________________________\n\n'
       		});
       		await didin.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./src/logo.jpg'),quoted : mek, caption: ytresult})
			   break
          case 'online':
          case 'listonline':
          if (!isRegistered) return reply( ind.noregis())
                if (!isGroup) return reply(`*Only group*`)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(didin.chats.get(ido).presences), didin.user.jid]
			    didin.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
					case 'wait':
					  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await didin.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							didin.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						})
					} else {
						reply('Foto aja')
					}
					await limitAdd(sender)
					break
					case 'simi':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					teks = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/simsimi/?teks=${teks}`, {method: 'get'})
					simii = `*${anu.result.jawaban}*`
					didin.sendMessage(from, simii, text, {quoted: mek})
					await limitAdd(sender) 
					break 
           				case 'demote':
         if (!mek.key.fromMe && mek.key.fromMe) return reply(`hmm`)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan dari admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat anda menjadi member* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						didin.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`kasihan si @${mentioned[0].split('@')[0]}, tapi maaf anda harus jadi member`, mentioned, true)
						didin.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						didin.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub`, mentioned, true)
						didin.groupMakeAdmin(from, mentioned)
					}
					break
					case 'mutual':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('*Looking for a partner*...')
                await reply(`wa.me/${anug}`)
                await reply( `*Partner found: 🙉*\n*${prefix}next* — *find a new partner*`)
           	break
		case 'next':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('*Looking for a partner*...')
                await reply(`wa.me/${anug}`)
                await reply( `*Partner found: 🙉*\n*${prefix}next* — *find a new partner*`)
        	break
			        case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isGroupAdmins) return reply(ind.admin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*reply atau tag target yang ingin di tendang*!')

                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*ANBOT-D HMM* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                didin.groupRemove(from, mentioned)
                } else {
                mentions(`*Perintah Di Terima, Selamat Tinggal* @${mentioned[0].split('@')[0]} *Nomor Anda Akan Saya Hilangkan Dari Group Sini Kontol*`, mentioned, true)
                didin.groupRemove(from, mentioned)
                }
                break
case 'stickmeme':

if (!isRegistered) return reply( ind.noregis())

				if (isLimit(sender)) return reply(ind.limitend(pusname))

									 var ghs = body.slice(11)

									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {

                                          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

                                        

					owgi = await didin.downloadAndSaveMediaMessage(ger)

					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)

              teks = `${anu.display_url}`

										ini_untuk_hmm = await getBuffer(`https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${ghs}`)

										didin.sendMessage(from, ini_untuk_hmm, sticker, {quoted: mek})

									 }

									break
case 'tomp3':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                	didin.updatePresence(from, Presence.composing) 

					if (!isQuotedVideo) return reply('❌ reply videonya ❌')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						jacknp = fs.readFileSync(ran)
						didin.sendMessage(from, jacknp, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'tagme':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					var nomor = mek.participant
					const tag = {
					text: `@${nomor.split("@s.whatsapp.net")[0]} nih bang`,
					contextInfo: { mentionedJid: [nomor] }
					}
					didin.sendMessage(from, tag, text, {quoted: mek})
					break
					case 'fitnah':
					if (!isRegistered) return reply(ind.noregis())
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (!isGroup)return reply(mess.only.group)
				    if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				    var gh = body.slice(8)
				    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					didin.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case prefix+'tovideo':
					if (!isQuotedSticker) return reply(`*Reply Sticker Nya Kack*`)
					reply(`PROSES...`)
					anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await didin.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						didin.sendMessage(from, buffers, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Sukses*..'})
						fs.unlinkSync(ran)
					})
					break
		case 'tiktokaudio':
if (isBanned) return reply( ind.banned(pushname))
				         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/yqyjPX/`)
                    link = body.slice(7)
				anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktok?url=${link}`)
				cekk = `Desc : ${anu.result.desc}\nUsername : ${anu.result.username}`
				didin.sendMessage(from, cekk, text, {quoted: mek})
                    get_audio = await getBuffer(anu.result)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${anu.result.username}.mp3`, quoted: mek})
                    break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('*Reply/tag sticker* !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						didin.sendMessage(from, buffer, image, {quoted: mek, caption: '*tuh dh jadi*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'samehadaku':
					 
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`*Contoh ${prefix + command} boruto*`)
				anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/samehadaku?q=${body.slice(12)}`)
				if (anu.error) return reply(anu.error)
				nani = `Judul : ${anu.title}\nLink : ${anu.link}\nDesc : ${anu.desc}`
				gaammbar = await getBuffer(anu.thumb)
				didin.sendMessage(from, gaammbar, image, {quoted: mek, caption: nani})

				await limitAdd(sender)
				break
               			case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis())
const uptime = process.uptime()
		            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`

const ini_teksnya = `*Selamat* *${ucapan}* *KAK* *「${pushname}」* *Saya BOT*
       
╔══════════════════
║ *Hai* *「 ${pushname}  」*
╠══════════════════
║͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ *Nama* : *「${pushname}」*
║ *Nomer* : *wa.me/${sender.split("@")[0]}*
╠══════════════════
║┏━━⊱ *「  INFO BOT 」*
║┃
║┣❏ *Jam* : ${thisDay} ${jam}:${menit}:${detik} ${ampm}
║┣❏ *Tanggal* : ${day} - ${myMonths[bulan]} - ${year}
║┣❏ *Speed* : ${process.uptime()}
║┣❏ *Aktif* : ${kyun(uptime)}
║┣❏ *Baterai :* ${battre}%
║┃
║┣━━⊱ *「  INFO  」*
║┃
║┣❏ *Premium* : *「 ${premi} 」*
║┣❏ *Banned* : *「 ${bann} 」*
║┣❏ *welcome* : *「 ${welcomee} 」*
║┣❏ *Simih* : *「 ${simihh} 」*
║┣❏ *AntiLink* : *「 ${antiLinkk} 」*
║┣❏ *Antivirtex* : *「 ${antiVirtexx} 」*
║┣❏ *NoBadword* : *「 ${badWordd} 」*
║┣❏ *Nsfw* : *「 ${nsfww} 」*
║┣❏ *Prefix* : *「 ${prefix} 」*
║┣❏ *register* : *「 ${_registered.length} 」*
║┃
║┣━━⊱ *「  ANIME  」*
║┃
║┣❏ *${prefix}anime*
║┣❏ *${prefix}bokunh*
║┣❏ *${prefix}sao*
║┣❏ *${prefix}lovelive*
║┣❏ *${prefix}animesaran/animesaran2*
║┣❏ *${prefix}loli*
║┣❏ *${prefix}hsdxd*
║┣❏ *${prefix}husbu*
║┣❏ *${prefix}waifu*
║┣❏ *${prefix}neko*
║┣❏ *${prefix}chika*
║┣❏ *${prefix}kurumi*
║┣❏ *${prefix}kaneki*
║┣❏ *${prefix}touka*
║┣❏ *${prefix}aot*
║┣❏ *${prefix}naruto*
║┣❏ *${prefix}minato*
║┣❏ *${prefix}sagiri*
║┣❏ *${prefix}tokyoghoul*
║┣❏ *${prefix}samehadaku*
║┣❏ *${prefix}quotesnime*
║┃
║┣━━⊱ *「  EDITING  」*
║┃
║┣❏ *${prefix}font*
║┣❏ *${prefix}font2*
║┣❏ *${prefix}gaminglogo*
║┣❏ *${prefix}stiker*
║┣❏ *${prefix}ttp*
║┣❏ *${prefix}ocr*
║┣❏ *${prefix}wait*
║┣❏ *${prefix}removebg*
║┣❏ *${prefix}rip*
║┣❏ *${prefix}fuse*
║┣❏ *${prefix}wanted*
║┣❏ *${prefix}comunism*
║┣❏ *${prefix}triggered*
║┣❏ *${prefix}wasted*
║┣❏ *${prefix}gay*
║┣❏ *${prefix}sepia*
║┣❏ *${prefix}red*
║┣❏ *${prefix}green*
║┣❏ *${prefix}glass*
║┣❏ *${prefix}blue*
║┣❏ *${prefix}rotate*
║┣❏ *${prefix}delete*
║┣❏ *${prefix}thuglife*
║┣❏ *${prefix}tobecontinue*
║┣❏ *${prefix}smoke* <teks>
║┣❏ *${prefix}camuflage* <teks>
║┣❏ *${prefix}stars* <teks>
║┣❏ *${prefix}3dglowing* <teks>
║┣❏ *${prefix}underwaterocean* <teks>
║┣❏ *${prefix}wolfmetal* <teks>
║┣❏ *${prefix}rainbowshine* <teks>
║┣❏ *${prefix}gtavposter*
║┣❏ *${prefix}pencil*
║┣❏ *${prefix}pencildrawing*
║┣❏ *${prefix}burneffect*
║┣❏ *${prefix}crossgun*
║┣❏ *${prefix}customwp*
║┣❏ *${prefix}nightbeach*
║┣❏ *${prefix}raindrop*
║┣❏ *${prefix}3dlinephoto*
║┣❏ *${prefix}sticker*
║┣❏ *${prefix}tahta* <teks>
║┣❏ *${prefix}woodblock* <text>
║┣❏ *${prefix}darkneon* <text>
║┣❏ *${prefix}tlight* <text>
║┣❏ *${prefix}paper* <text>
║┣❏ *${prefix}matrix* <teks>
║┣❏ *${prefix}text3dbox* <teks>
║┣❏ *${prefix}breakwall* <text>
║┣❏ *${prefix}didin* <text|text>
║┣❏ *${prefix}gtext* <text|text>
║┣❏ *${prefix}pornhub* <text|text>
║┣❏ *${prefix}bneon* <text>
║┣❏ *${prefix}coffee* <text>
║┣❏ *${prefix}logobp* <text>
║┣❏ *${prefix}leavest* <text>
║┣❏ *${prefix}shadowt* <text>
║┣❏ *${prefix}nulis* <text>
║┣❏ *${prefix}attp* <text>
║┣❏ *${prefix}ppcouple*
║┣❏ *${prefix}porncomen* <text>
║┣❏ *${prefix}tts* <kode bahasa> <text>
║┃
║┣━━⊱ *「  PENGUBAH SUARA  」*
║┃
║┣❏ *${prefix}slow/slowmo1*
║┣❏ *${prefix}tupai*
║┣❏ *${prefix}blub*
║┣❏ *${prefix}hode*
║┣❏ *${prefix}tempo*
║┣❏ *${prefix}gemes*
║┣❏ *${prefix}fast1*
║┣❏ *${prefix}vibra*
║
║┣━━⊱ *「  MTK  」*
║┃
║┣❏ *${prefix}persegi*
║┣❏ *${prefix}perkalian*
║┃ 
║┣━━⊱ *「  FUN/GAME  」*
║┃
║┣❏ *${prefix}darkjoke*
║┣❏ *${prefix}katacinta*
║┣❏ *${prefix}memburu*
║┣❏ *${prefix}apakah*
║┣❏ *${prefix}siapakah*
║┣❏ *${prefix}bagaimanakah*
║┣❏ *${prefix}katailham*
║┣❏ *${prefix}asupan*
║┣❏ *${prefix}pantun*
║┣❏ *${prefix}quotes*
║┣❏ *${prefix}cerhor*
║┣❏ *${prefix}gombal*
║┣❏ *${prefix}gantengcek*
║┣❏ *${prefix}lesbicek*
║┣❏ *${prefix}sangecek*
║┣❏ *${prefix}bucin*
║┣❏ *${prefix}jadian*
║┣❏ *${prefix}watak* <nama>
║┣❏ *${prefix}kapankah* <teks>
║┣❏ *${prefix}bisakah* <teks>
║┣❏ *${prefix}terpintar*
║┣❏ *${prefix}terganteng*
║┣❏ *${prefix}tercantik*
║┣❏ *${prefix}tebakkata*
║┣❏ *${prefix}family100*
║┣❏ *${prefix}caklontong*
║┣❏ *${prefix}tebakgambar*
║┣❏ *${prefix}doge*
║┃
║┣━━⊱ *「  ISLAM  」*
║┃
║┣❏ *${prefix}hadits*
║┣❏ *${prefix}audiomuslim*
║┣❏ *${prefix}asmaulhusna* <nomor>
║┣❏ *${prefix}jadwalsalat*
║┣❏ *${prefix}alquran*
║┣❏ *${prefix}sedekah*
║┣❏ *${prefix}qmuslim*
║┣❏ *${prefix}ceramah*
║┣❏ *${prefix}rdoadl*
║┣❏ *${prefix}listsurah*
║┣❏ *${prefix}quranaudio*
║┣❏ *${prefix}kisahnabi* <nama nabi>
║┃
║┣━━⊱ *「  USER  」*
║┃
║┣❏ *${prefix}dompet*
║┣❏ *${prefix}giftlimit*
║┣❏ *${prefix}buylimit*
║┣❏ *${prefix}transfer*
║┣❏ *${prefix}limit*
║┣❏ *${prefix}level*
║┣❏ *${prefix}bahasa*
║┣❏ *${prefix}qrcode*
║┃
║┣━━⊱ *「  ALL  」*
║┃
║┣❏ *${prefix}citacita*
║┣❏ *${prefix}film*
║┣❏ *${prefix}translate*
║┣❏ *${prefix}jedakjeduk*
║┣❏ *${prefix}caristiker*
║┣❏ *${prefix}fakta*
║┣❏ *${prefix}igsearch*
║┣❏ *${prefix}nickgame*
║┣❏ *${prefix}simi*
║┣❏ *${prefix}mining*
║┣❏ *${prefix}hobby*
║┣❏ *${prefix}wattpadsearch*
║┣❏ *${prefix}sindiran*
║┣❏ *${prefix}itr*
║┣❏ *${prefix}kalkulator*
║┣❏ *${prefix}ngewe*
║┣❏ *${prefix}ytsearch*
║┣❏ *${prefix}bug [TEXT]*
║┣❏ *${prefix}req [TEXT]*
║┣❏ *${prefix}rules*
║┣❏ *${prefix}listonline*
║┣❏ *${prefix}pinterest* <text>
║┣❏ *${prefix}lb/leaderboard*
║┣❏ *${prefix}aesthetic*
║┣❏ *${prefix}listsound*
║┣❏ *${prefix}getpic*
║┣❏ *${prefix}cecan*
║┣❏ *${prefix}cogan*
║┣❏ *${prefix}tumur* <nama>
║┣❏ *${prefix}mutual*
║┣❏ *${prefix}spamcall* <nomor>
║┣❏ *${prefix}spamsms* <nomor>
║┣❏ *${prefix}spamgmail* <gmail/email>
║┣❏ *${prefix}artinama* <nama>
║┣❏ *${prefix}brainly* <pertanyaan>
║┣❏ *${prefix}next*
║┣❏ *${prefix}map*
║┣❏ *${prefix}kbbi*
║┣❏ *${prefix}hilih*
║┣❏ *${prefix}halah*
║┣❏ *${prefix}huluh*
║┣❏ *${prefix}fitnah |@tag|text|text*
║┣❏ *${prefix}holoh*
║┣❏ *${prefix}heleh*
║┣❏ *${prefix}wiki*
║┣❏ *${prefix}ytstalk *<username youtube>*
║┣❏ *${prefix}mimpi* *<nama mimpi>*
║┣❏ *${prefix}tomp3* *<merubah video menjadi audio>*
║┣❏ *${prefix}tovideo* 
║┣❏ *${prefix}toimg* *<merubah stiker menjadi gambar>*
║┣❏ *${prefix}resepmasak*
║┣❏ *${prefix}rate* <text>
║┣❏ *${prefix}addbucin* <text>
║┣❏ *${prefix}gantengcek* <nama>
║┣❏ *${prefix}cantikcek* <nama>
║┣❏ *${prefix}kucing*
║┣❏ *${prefix}listbadword*
║┣❏ *${prefix}lizard*
║┣❏ *${prefix}lirik* <text>
║┣❏ *${prefix}igstalk* <username>
║┣❏ *${prefix}tiktokstalk* <username>
║┃
║┣━━⊱ *「 MENU DOWNLOAD 」*
║┃
║┣❏ *${prefix}joox* <Nama Lagu>
║┣❏ *${prefix}igdownload*
║┣❏ *${prefix}fbdownload*
║┣❏ *${prefix}mp3toptt*
║┣❏ *${prefix}play*
║┣❏ *${prefix}tiktokaudio* *<Link Tautan>*
║┣❏ *${prefix}ytmp3* *<Link Tautan>*
║┣❏ *${prefix}ytmp4* *<Link Tautan>
║┃
║┣━━⊱ *「  INFO BOT  」*
║┃
║┣❏ *${prefix}blocklist*
║┣❏ *${prefix}banlist*
║┣❏ *${prefix}info*
║┣❏ *${prefix}owner*
║┃
║┣━━⊱ *「  GRUP  」*
║┃
║┣❏ *${prefix}tutuptime*
║┣❏ *${prefix}bukatime*
║┣❏ *${prefix}slot*
║┣❏ *${prefix}tagme*
║┣❏ *${prefix}demote*
║┣❏ *${prefix}grup* buka/tutup
║┣❏ *${prefix}promote*
║┣❏ *${prefix}kick*
║┣❏ *${prefix}listadmin*
║┣❏ *${prefix}add*
║┣❏ *${prefix}hidetag*
║┣❏ *${prefix}linkgc*
║┣❏ *${prefix}tagall*
║┣❏ *${prefix}hapus*
║┣❏ *${prefix}setpp*
║┣❏ *${prefix}setdesc*
║┣❏ *${prefix}setname*
║┃
║┣━━⊱ *「  OWNER  」*
║┃
║┣❏ *${prefix}bc*
║┣❏ *${prefix}buggc*
║┣❏ *${prefix}troli*
║┣❏ *${prefix}ban*
║┣❏ *${prefix}unban*
║┣❏ *${prefix}readall*
║┣❏ *${prefix}unreadall*
║┣❏ *${prefix}setppbot*
║┣❏ *${prefix}unblock*
║┣❏ *${prefix}setprefix*
║┣❏ *${prefix}addbadword*
║┣❏ *${prefix}block*
║┣❏ *${prefix}leave*
║┣❏ *${prefix}clearall*
║┃
║┣━━⊱  *「 ON  / OF 」*
║┃
║┣❏ *${prefix}antilink* *[1/0]*
║┣❏ *${prefix}autosticker* *[1/0]*
║┣❏ *${prefix}antivirtex* *[1/0]*
║┣❏ *${prefix}leveling* *[enable/disable]*
║┣❏ *${prefix}nsfw* *[1/0]*
║┣❏ *${prefix}nobadword* *[enable/disable]*
║┣❏ *${prefix}welcome* *[1/0]*
║┣❏ *${prefix}event* *[1/0]*
║┗━━━━━━━━━━━━━━━━
╚═════════════════❍
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

*「 JACK-BOT 」*`

let hhmm_gambar = await getBuffer(`http://hadi-api.herokuapp.com/api/photoxy/flaming-fire?teks=${pushname}`)
if (hhmm_gambar.msg) return reply(`Maaf ${pushname}, Sepertinya Anda Tidak Bisa Menggunakan BOT, ${pushname} Anda Harus Merubah Nickname Dahulu Agar Bisa Memakai BOT`)
                didin.sendMessage(from, hhmm_gambar, MessageType.image, {quoted: mek, caption: ini_teksnya, contextInfo: {"mentionedJid": [sender]}})
                    break
			
				  case 'sedekah':
				case 'donasi':
				case 'donate':
            var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "JACK-BOT"
         var gambard = await getBuffer("https://i.ibb.co/vxHvJ9z/IMG-20210329-WA0599.jpg")
         const replyp = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, donasi(prefix), text, replyp)
					  break
					case prefix+'getpic':
			if (args.length < 1) return reply('*TAG YANG MAU DIAMBIL FHOTONYA*')
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				  try {
				  pp = await didin.getProfilePicture(id)
				  buffer = await getBuffer(pp)
				  didin.sendMessage(from, buffer, image, {quoted: mek})
				mentions(`*Sukses mengambil frofil @${id.split('@')[0]}*`, [jid], true)
				   } catch (e) {
				   reply(' *GAGAL!!* ')
				   }
				break
				case 'stickmeme':
									 var ghs = body.slice(11)

									 if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {

                                          ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

                                        

					owgi = await didin.downloadAndSaveMediaMessage(ger)

					 anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)

              teks = `${anu.display_url}`

										ini_untuk_hmm = await getBuffer(`https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${ghs}`)

										didin.sendMessage(from, ini_untuk_hmm, sticker, {quoted: mek})

									 }

									break
									case 'kalkulator':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE:*\n Untuk Perkalian Menggunakan *\n Untuk Pertambahan Menggunakan +\n Untuk Pengurangan Menggunakan -\n Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE:*\n Untuk Perkalian Menggunakan *\n Untuk Pertambahan Menggunakan +\n Untuk Pengurangan Menggunakan -\n Untuk Pembagian Menggunakan /`)
				} else {
					reply(`* MATH *\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
									case 'ngewe':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `*Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]}*`
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
                case 'level':
		case 'lvl':
if (isBanned) return reply( ind.banned(pushname))
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               didin.sendMessage(from, resul, text, didinanbot, vr,{ quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${didinlimit - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses JACK-BOT`)
                }
					break
					case 'take': //Bang
                    var namaPackss = q.substring(0, q.indexOf('|') - 1)
                    var authorPackss = q.substring(q.lastIndexOf('|') + 2)
                    stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    dlstiker_wm = await didin.downloadAndSaveMediaMessage(stiker_wm)
                    stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2" //not sure what this does
                    packname = namaPackss;
                    author = authorPackss;
                    exif321 = getRandom('.exif')
                    exifst = getRandom('.webp')
                    googlelink = `https://wa.me/6285788555068?text=${prefix}menu`;
                    applelink = `https://wa.me/6285788555068?text=${prefix}menu`;
                    json = { "sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink }
                    len = JSON.stringify(json).length
                    f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
                    aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
                    if (len > 256) {
                        len = len - 256
                        aaa.unshift(0x01)
                    } else {
                        aaa.unshift(0x00)
                    }
                    fff = Buffer.from(aaa)
                    ffff = Buffer.from(JSON.stringify(json))

                    if (len < 16) {
                        len = len.toString(16)
                        len = "0" + len
                     } else {
                        len = len.toString(16)
                     }
                     ff = Buffer.from(len, "hex")

                     wm = Buffer.concat([f, ff, fff, ffff])

                     fs.writeFile(exif321, wm, function (err) {
                     if (err) return console.log(err);
                     exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
                            if (err) return console.log(err);
                            didin.sendMessage(from, fs.readFileSync(exifst), sticker, { quoted: mek })
                            fs.unlinkSync(exifst)
                            fs.unlinkSync(exif321)
                            fs.unlinkSync('undefined.webp')
                        })
                    });
                    break //Bagi case
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
                   costum( rules(prefix), text, didinanbot, cr)
                    break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./ANBOT-D/welkom.json', JSON.stringify(welkom))
						reply('*❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/welkom.json', JSON.stringify(welkom))
						reply('*❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini*')
					} else {
						reply(`*untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0*`)
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('salah')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./ANBOT-D/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
					
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./ANBOT-D/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./ANBOT-D/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./ANBOT-D/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
              reply(`untuk Mengaktifkan ketik ${prefix + command} enable dan untuk Menonaktif ketik ${prefix + command} disable`)
                }
					break

case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('*KETIK 1 UNTUK MENGAKTIFKAN*')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*UDAH NYALA KAK*')
						antilink.push(from)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('*SUKSES MENGAKTIFKAN ANTI LINK DI GROUP*')
						didin.sendMessage(from,`*PERINGATAN!!! Jika bukan admin jangan kirim link grup*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('*EMANG AKTIF*?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('*SUKSES MEMATIKAN ANTI LINK DI GROUP*')
					} else {
						reply(`*untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0*`)
					}
					break
case 'owner':
                 didin.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 didin.sendMessage(from, '*TUH KONTAK OWNER GW JANGAN DI SPAM / BLOCK + BAN!!*',text, { quoted: mek} )
                 break
                 case 'sangecek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'bug':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(4)
                      if (pesan.length > 300) return didin.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[BUG]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    didin.sendMessage('6285298595430@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner ANBOT-D, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                case 'req':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Mau request apa?`)
                     const cfrr = body.slice(4)
                      if (cfrr.length > 300) return didin.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
                     var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    didin.sendMessage('6285298595430@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner ANBOT-D, Requests yang dapat membebani owner  tidak akan ditanggapi.')
                    break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = didin.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Ultah Owner* : ${ultah.data.result}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					jacknp = await getBuffer(me.imgUrl)
					didin.sendMessage(from, jacknp, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
			case 'animesaran2':
                                        if (!isRegistered) return reply(ind.noregis())
var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU ANIMESARAN"
         var gambard = await getBuffer("https://i.ibb.co/F0sYQck/IMG-20210329-WA0605.jpg")
         const replydp = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, animesaran2(prefix), text, replydp)
                                        break
				case 'animesaran':
                                        if (!isRegistered) return reply(ind.noregis())
 var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU ANBOT-D"
         var gambard = await getBuffer("https://i.ibb.co/F0sYQck/IMG-20210329-WA0605.jpg")
         const rep = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, animesaran(prefix), text, rep)
                                        break
					case 'bahasa':
					  if (!isRegistered) return reply(ind.noregis())
        var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "MENU BAHASA"
         var gambard = await getBuffer("https://i.ibb.co/LJqBRGH/IMG-20210329-WA0589.jpg")
         const repl = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, bahasa(prefix), text, repl)
					  break

case 'alquran': 
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${body.slice(9)}&apikey=${ZeksApi}`, {method: 'get'})
teks2 = `Surah : ${anu.surah}
Arab : ${anu.asma}
Surah Nomor : ${anu.no}
Diturunkan di : ${anu.type}
Arti : ${anu.ket}
Jumlah ayat : ${anu.jumlah_ayat}`
didin.sendMessage(from, teks2, text, {quoted: mek})
teks = '𝗔𝘆𝗮𝘁\n'
					for (let i of anu.ayat) {
teks += `Ayat ke : ${i.number}
Arab : ${i.text}
Latin EN : ${i.translation_en}
Latin ID : ${i.translation_id} \n\n`
}
reply(teks.trim())
buffer = await getBuffer(anu.audio)
		didin.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `Surah-Alquran.mp3`, quoted: mek})
break
		case 'quranaudio':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran?apiKey=${ZeksApi}`, {method: 'get'})
					faktaaa = `*Nama* : *${anu.result.nama}*\n*Arti* : *${anu.result.arti}*\n*Nomor* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Ayat* : *${anu.result.ayat}*\n*Isi* : *${anu.result.keterangan}*`
					quu = await getBuffer(anu.result.audio)
					didin.sendMessage(from, faktaaa, text, {quoted: mek})
					didin.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break
			case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
					didin.sendMessage(from, listsurah() , text, didinanbot, cr)
					break
                  case 'mining':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isPrem) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 100000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
case 'wattpadsearch':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${apiKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
			case 'qrcode':
			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return didin.sendMessage(from, 'NTAHLAH', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			didin.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break

case 'tahta':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh : ${prefix}tahta JACK`)
jacknp = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${body.slice(7)}&apikey=${ZeksApi}`)
didin.sendMessage(from, jacknp, image, {quoted: mek})
await limitAdd(sender)
break
case 'minato':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					didin.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break
case 'kucing':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kucing`, {method: 'get'})
										ku = JSON.parse(JSON.stringify(anu));
					ci =  ku[Math.floor(Math.random() * ku.length)];
					nye = await getBuffer(ci)
					didin.sendMessage(from, nye, image, { caption: 'kucing', quoted: mek })
					await limitAdd(sender)
					break
					case 'aot':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+attack+on+titan`, {method: 'get'})
					ti = JSON.parse(JSON.stringify(anu));
					tan =  ti[Math.floor(Math.random() * ti.length)];
					nye = await getBuffer(tan)
					didin.sendMessage(from, nye, image, { caption: '*BUATAN GARENA SAMA GW ;V*', quoted: mek })
					await limitAdd(sender)
					break
					case 'tokyoghoul':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
						tokyo = JSON.parse(JSON.stringify(anu));
					ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
					nye = await getBuffer(ghoul)
					didin.sendMessage(from, nye, image, { caption: 'INI', quoted: mek })
					await limitAdd(sender)
					break
					case 'sagiri':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+Izumi+Sagiri`, {method: 'get'})
						sag = JSON.parse(JSON.stringify(anu));
					iri =  sag[Math.floor(Math.random() * sag.length)];
					nye = await getBuffer(iri)
					didin.sendMessage(from, nye, image, { caption: 'SAGIRI CHAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'bugtroliv2':
     for (let i = 0; i < 9999; i++) {
     exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
       if (err) throw err
       console.log('🔥SUKSES🔥')
          console.log('🔥') 
           })
           } 
           break
					case 'ytstalk':
					try {
						const channel = await fetchs.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyCsfaVvE3yzW6YV_R6u_6CC1guKt49QoVA&maxResults=1&type=channel`);
						const resultchannel = await fetchs.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyCsfaVvE3yzW6YV_R6u_6CC1guKt49QoVA`);
						const datachannel = `「 *YOUTUBE-STALK* 」\n\n• *CHANNEL* : ${channel.body.items[0].snippet.channelTitle}\n• *DESKRIPSI* : ${channel.body.items[0].snippet.description}\n• *TOTAL SUBS* : ${convertBalanceToString(resultchannel.body.items[0].statistics.subscriberCount)}\n• *TOTAL VIEW* : ${convertBalanceToString(resultchannel.body.items[0].statistics.viewCount)}\n• *TOTAL VIDEO* : ${convertBalanceToString(resultchannel.body.items[0].statistics.videoCount)}\n• *DATA CREATED* : ${channel.body.items[0].snippet.publishedAt}\n• *LINK* : https://www.youtube.com/channel/${channel.body.items[0].id.channelId}`
						fakegroup(mess.wait)
						var buffer321 = await getBuffer(`${channel.body.items[0].snippet.thumbnails.high.url}`)
						didin.sendMessage(from, buffer321, MessageType.image, { caption: datachannel, quoted: mek })
					} catch (err) {
						fakegroup(`Err: ${err}`)
					}
					break				
					case 'cantik':
					  case 'cans':
					case 'cecen':
					  case 'cecan':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cewe+Cantik`, {method: 'get'})
						ce = JSON.parse(JSON.stringify(anu));
					cen =  ce[Math.floor(Math.random() * ce.length)];
					nye = await getBuffer(cen)
					didin.sendMessage(from, nye, image, { caption: 'PUNYAKU KAWAN', quoted: mek })
					await limitAdd(sender)
					break
					case 'cogan':
					    case 'tampan':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cowo+Ganteng`, {method: 'get'})
       nye = await getBuffer(anu.result)
					didin.sendMessage(from, nye, image, { caption: 'GANTENG SEPERTI SAYA', quoted: mek })
					await limitAdd(sender)
					break
					case 'gaminglogo':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`Contoh *${prefix + command} Jack*`)
				anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(12)}`)
  				didin.sendMessage(from, anu, image, {quoted: mek, caption: '*INI*'})
				await limitAdd(sender)
				break
				case 'chika':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					chi = JSON.parse(JSON.stringify(anu));
					ka =  chi[Math.floor(Math.random() * chi.length)];
					nye = await getBuffer(ka)
					didin.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
			    case 'hilih':
			if (!isRegistered) return reply( ind.noregis())
			if (!isGroup) return reply(ind.groupo())
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "i");
					}
					reply(i(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					i = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "i");
					}
					reply(i(args.join(' ')))
					}
					break
					case 'holoh':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply( ind.noregis())
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					o = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "o");
					}
					reply(o(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					o = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "o");
					}
					reply(o(args.join(' ')))
					}
					break
					case 'huluh':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply( ind.noregis())
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					u = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "u");
					}
					reply(u(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					u = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "u");
					}
					reply(u(args.join(' ')))
					}
					break
					case 'halah':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply( ind.noregis())
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					a = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "a");
					}
					reply(a(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					a = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "a");
					}
					reply(a(args.join(' ')))
					}
					break
					case 'heleh':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply( ind.noregis())
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					e = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "e");
					}
					reply(e(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					e = (teks) => {
					return teks.replace(/['a','o','u','e','i','A','O','U','E','I']/g, "e");
					}
					reply(e(args.join(' ')))
					}
					break
				case 'kurumi':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					didin.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					didin.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					didin.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: mek })
					await limitAdd(sender) 
					break 
case 'neko':
  case 'nekonime':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./ANIME/neko.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 nekoo = await getBuffer(randKey.result)
                 didin.sendMessage(from, nekoo, image, {quoted: mek, caption: '*INI*'})
				break
case 'naruto':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
										naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					didin.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
case 'loli':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./ANIME/loli.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 loliii = await getBuffer(randKey.result)
                 didin.sendMessage(from, loliii, image, {quoted: mek, caption: '*INI*'})
                 await limitAdd(sender)
				break
			case 'waifu':
				    try {
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = jacknp.from(response, 'base64');
					didin.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
await limitAdd(sender) 

					break
					case 'lizard':
             try {
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = jacknp.from(response, 'base64');
					didin.sendMessage(from, buf, image, {quoted: mek,caption: "JACK-BOT"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
         await limitAdd(sender) 
					break
case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					didin.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
                case 'listbadword':
                    let lbw = `Ini adalah list BADWORD\nTotal : ${katakasar.length}\n`
                    for (let i of katakasar) {
                        lbw += `➸ ${i.replace(katakasar)}\n`
                    }
                    await reply(lbw)
                    break 
 case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./ANBOT-D/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./ANBOT-D/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
                }
                break
                case 'bisakah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} Saya Makan`)
         bisakah = body.slice(1)
					const di =['Bisa','Tidak Bisa','Coba Ulangi']
					const din = di[Math.floor(Math.random() * di.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ din, text, { quoted: mek })
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                  await limitAdd(sender)
                  break
        case 'kapankah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} Saya lahir`)
					kapankah = body.slice(1)
					const dinp =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lagi','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const didinpn = dinp[Math.floor(Math.random() * dinp.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ didinpn, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'pantun':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					const pantunn =['Buah pisang buat tomat\nDisimpan di dalam lumbung padi\nPantas baunya menyengat\nTernyata kamu belum mandi','Jalan-jalan ke Kolaka\nSungguh kelak-kelok jalannya\nSyariat Islam jalan kita\nHadits Nabi sebagai petunjuknya','Kalau sauh di pohon randu\nNanti akan jadi benalu\nKalau jauh merasa rindu\Kalau dekat merasa malu','Bunga-bunga sangat indah\nSungguh indah ada lebah\nJangan mencampur amal ibadah\nDengan musyrik ataupun bid’ah','Naik delman\nMau ke taman\nDia tampan\nTapi sayang, jerawatan','Jalan-jalan ke Kenya\nTetap saja makan roti\nIbadah hanya kepada-Nya\nNiat bersih ikhlas hati','Beribu-ribu burung gelatik\nHanya satu berwarna lurik\nBeribu-ribu gadis yang cantik\nHanya kamu yang paling menarik','Pergi ke pantai bersama\nPulangnya berdua\nIbadah di dunia tiada lama\nAkan selesai saat ajal tiba','Bola pingpong\nDimakan gelatik\nBiar ompong\nYang penting cantik','Sangat lapar menjelang siang\nTerik sekali hingga ada bayang-bayang\nAgama tegak karena tiang\nTiangnya adalah sembayang','Jual tanah tak laku-laku\nTentu hati terasa pilu\nKalau saja engkau terima cintaku\nAh langsung saja ke penghulu','Mama baik pergi ke pasar\nSungguh senang tertawa lebar\nBangunlah di saat fajar\nTunaikan subuh dengan sabar','Pagi-pagi baca koran\nKurang nikmat kalau tanpa kopinya\nAku tak peduli banyak Tuhan\nTuhanku Tuhan Yang Maha Esa','Ajak pacar makan di restauran\nBertemu mantan yang sekarang teman\nHati bingung dan gak karuan\nTernayata mantan minta balikan','Ada lagu judul bang Thoyib\nGak pulang-pulang apakah mati syahid?\nDengar dentum adzan Maghrib\nSegeralah pergi ke Masjid','Pergi ke kota Tuban\nBuat beli buah rambutan\nMantan udah masuk pelaminan\Kenapa kamu masih sendirian','Kapal laut kapal selam\nKena ombak goyang-goyang.\nTidak siang tidak malam\nHanya wajahmu yang terbayang','Narok uang di dalam saku\nSakunya robek gara-gara kuku\nJangan sampai ko menghianatiku\nKarena hanya kau yang selalu ada di hatiku','Lintah datang dari kali\nKalau ke darat langsung mati\nTatapanmu tajam sekali\nSampai-sampai menusuk hati','Tanam mangga tanam kemangi\nSapu halaman hingga bersih\nIndahnya warna warni pelangi\nLebih indah wajahmu kekasih','Batik bukan sembarang baik\nBatik seperti kayu gelam\nCantik bukan sembarang cantik\nCantik dirimu luar dan dalam']
					const pengirim = pantunn[Math.floor(Math.random() * pantunn.length)]
					didin.sendMessage(from, pengirim, text, { quoted: mek })
					await limitAdd(sender)
				        break
case 'pedang':

		  const hasilburuannn = hasilburuan[Math.floor(Math.random() * hasilburuan.length)]
		                      if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${command +  ini}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${hasilburuannn}* ]`)
                    }, 20000)
                    break
case 'bom':

		  const hasilburuannnn = hasilburuan[Math.floor(Math.random() * hasilburuan.length)]
		                      if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(4)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${command +  ini}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${hasilburuannnn}* ]`)
                    }, 20000)
                    break
case 'tombak':

		  const hasilburuannnnn = hasilburuan[Math.floor(Math.random() * hasilburuan.length)]
		                      if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${command +  ini}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${hasilburuannnnn}* ]`)
                    }, 20000)
                    break
				        case 'memburu':
				   memburu =`Peralatan Yang Di Gunakan Untuk Memburu\n\n1. ${prefix}panah\n2. ${prefix}pedang\n3. ${prefix}bom\n4. ${prefix}tombak\n\nCARA MENGGUNAKANNYA KETIK ${prefix}panah`
				  didin.sendMessage(from, memburu, text, {quoted: mek})
				          break
					case 'watak':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					watak = body.slice(1)
					const wa =['Penyayang','bertumbuk','Gelud', 'Nanyi', 'Menari','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
				        case 'jadian':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					hmmd = []
					const dinjdn = groupMembers
					const didinhm = groupMembers
					const sayadin = dinjdn[Math.floor(Math.random() * dinjdn.length)]
					const diadin = didinhm[Math.floor(Math.random() * didinhm.length)]
					teks = `*Ciee cieee yang lagi jadian @${sayadin.jid.split('@')[0]} ️💜 @${diadin.jid.split('@')[0]}* `
					hmmd.push(sayadin.jid)
					hmmd.push(diadin.jid)
					mentions(teks, hmmd, true)
					await limitAdd(sender)
					break
                case 'gantengcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%','47%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					didin.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ewe':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
ganteng = body.slice(5)
					const ew =['*TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN*']
					const we = ew[Math.floor(Math.random() * ew.length)]
					didin.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
case 'tutuptime':
              didin.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n*10 detik*")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}*\n*sekarang hanya admin yang dapat mengirim pesan*`,
					contextInfo: { mentionedJid: [nomor] }
					}
					didin.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
case 'bukatime':
		case 'opentime': 
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroupAdmins) return reply(ind.admin())
        if (!isBotGroupAdmins) return reply(ind.badmin())
              didin.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n*10 detik*")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* *ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}*\n*ꜱᴇᴋᴀʀᴀɴɢ ᴍᴇᴍʙᴇʀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ*`,
					contextInfo: { mentionedJid: [nomor] }
					}
					didin.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
      case 'cantikcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					didin.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'wiki':
					  hmm_wiki = await fetchJson(`http://hadi-api.herokuapp.com/api/wiki?query=${body.slice(6)}`)
					  hmm_wiikii = `Sumber : ${hmm_wiki.powered_by}\nResult : ${hmm_wiki.result}`
					  reply(hmm_wiikii)
					  break
					case 'apakah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} Saya Pintar`)
					apakah = body.slice(8)
					const apa =['Mungkin','Tidak Tau','Iya Mungkin','Tidak','Iya','Coba Tanya','Tanya Lagi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					didin.sendMessage(from, 'Pertanyaan : apakah *'+apakah+'*\n\nJawaban : '+ kah +'', text, { quoted: mek })
					await limitAdd(sender)
					break
      case 'siapakah':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					siapakah = body.slice(10)
					const sia =['Manusia','Monyet','Orang','Ikan','Babi','Buaya','Anjing','Hewan','Tumbuhan','Ayam','Kucing','Begal','Maling','Jambret','Polwan','Polisi','Nelayan','Pelaut','Tentara','Hacker','K-popers','Pemabuk','Wibu','Gay','Setan','Tukang Tambal Ban','Petani','Beban Keluarga','Beban Masyarakat','Beban Negara','Beban Dunia','Ahli Dunia','Ahli Akhirat','Ahli Dunia Dan Akhirat','Hafiz Al-Quran','Pembalap','Penyanyi','Rapper','Editor','Pro Epep','Pro Emel','Pemain Game', 'YOUtuber','Kuli Jawa','Tkj : Teknik Komputer Jawa','Pembohong','Tukang Bucin']
					const pakah = sia[Math.floor(Math.random() * sia.length)]
					didin.sendMessage(from, 'Pertanyaan : Siapakah *'+siapakah+'*\n\n*'+siapakah+'* Adalah: '+ pakah +'', text, { quoted: mek })
					await limitAdd(sender)
					break
               case 'terganteng':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const gatn = groupMembers
					const te = groupMembers
					const ng = gatn[Math.floor(Math.random() * gatn.length)]
					teks = `Yang terganteng di grub ini adalah @${ng.jid.split('@')[0]}`
					didinpur.push(ng.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
               case 'tercantik':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const ca = groupMembers
					const nt = groupMembers
					const ik = ca[Math.floor(Math.random() * ca.length)]
					teks = `Yang tercantik di grub ini adalah @${ik.jid.split('@')[0]}`
					didinpur.push(ik.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
               case 'terpintar':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					didinpur = []
					const dinpurn = groupMembers
					const haykawan = groupMembers
					const pintarrr = dinpurn[Math.floor(Math.random() * dinpurn.length)]
					teks = `Terpintar di grup ini adalah @${pintarrr.jid.split('@')[0]}`
					didinpur.push(pintarrr.jid)
					mentions(teks, didinpur, true)
					await limitAdd(sender)
					break	
					case 'kisahnabi':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			    if (args.length < 1) return reply(`contoh ${prefix + command} muhammad`)
			        anu = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${body.slice(11)}`, {method: 'get'})
              gambar0 = await getBuffer(anu.result.image)
			        tekss = `Nama = ${anu.result.nama}\ntahun lahir = ${anu.result.tahun_kelahiran}\nusia = ${anu.result.usia}\nTempat lahir = ${anu.result.tempat_lahir}\nKisah = ${anu.result.description}`
			        didin.sendMessage(from, gambar0, image, {quoted: mek, caption: tekss})
			        await limitAdd(sender)
			        break
		    case 'mimpi':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          query = args.join(" ")
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (args.length < 1) return reply('mimpi apa??')
			        anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${body.slice(7)}`)
			        didin.sendMessage(from, anu.result.artimimpi, text, {quoted: mek})
					await limitAdd(sender) 
			       	break
					case 'quotes':
					  
				didin.updatePresence(from, Presence.composing) 
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./didin/quotes.js');
                   jsonData = JSON.parse(data);
                   randIndex = Math.floor(Math.random() * jsonData.length);
                   randKey = jsonData[randIndex];
                   randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                   didin.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break
					case 'quotesnime':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
				ini_ressult = `*Anime* : *${anu.result.anime}*\n*Character* : *${anu.result.character}*\n*Quotes* : *${anu.result.quotes}*`
				reply(ini_ressult)
				await limitAdd(sender)
				break
					case 'cerhor':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/ceritahoror.js');
        cerh = JSON.parse(data);
				horor = Math.floor(Math.random() * cerh.length);
				randKey = cerh[horor];
				Ceritahoror = randKey.result.Ceritahoror
					didin.sendMessage(from, Ceritahoror, text, didinanbot, reply, {quoted: mek })
					await limitAdd(sender)
					break
					case 'sindiran': //tetep saya didin
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/sindiran.js');
        sind = JSON.parse(data);
				iranbot = Math.floor(Math.random() * sind.length);
				randKey = sind[iranbot];
				Sindiran = randKey.result.Sindiran
					didin.sendMessage(from, Sindiran, text, {quoted: mek })
					await limitAdd(sender)
					break
					case 'fakta':
					  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://videfikri.com/api/fakta/`)
				faktanya = `didin FAKTA : ${anu.result.fakta}`
				reply(faktanya)
				await limitAdd(sender)
				break
				
					case 'jadwalsalat':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)

                    daerah = args.join(" ")

                    data = await fetchJson(`https://xinzbot-api.herokuapp.com/api/jadwalshalat?kota=${daerah}&apikey=XinzBot`)
                teks ='\n\n'
           for (let i of data.result) {
             teks += `Tanggal : ${i.tanggal}\nImsyak : ${i.imsyak}\nShubuh : ${i.shubuh}\nTerbit M : ${i.terbit}\nDhuhar : ${i.dhuha}\nDzuhur : ${i.dzuhur}\nAshar : ${i.ashr}\nMagrib : ${i.magrib}\nIsya : ${i.isya}\n\n`
           }
           reply(teks.trim())
                    break
                    case 'hadits':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`*Contoh ${prefix + command} muslim|2*`)
					tunjang = `${body.slice(8)}`
	hadits = tunjang.split("|")[0];
	hadist = tunjang.split("|")[1];
awal = await fetchJson(`https://xinzbot-api.herokuapp.com/api/hadits?kitab=${hadits}&nomor=${hadist}&apikey=XinzBot`)
ini = `Pesan : ${awal.result.message}\nNomor : ${awal.result.data.contents.number}\n\nArab : ${awal.result.data.contents.arab}\n\nArtinya : ${awal.result.data.contents.id}\n\nHadits ini tersedia : ${awal.result.data.available}`
reply(ini)
await limitAdd(sender)
break
case 'font':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
ini = await fetchJson(`http://hadi-api.herokuapp.com/api/font?teks=${body.slice(6)}`)
ini = `*${ini.result}*`
reply(ini)
await limitAdd(sender)
break
  case 'font2':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
ini = await fetchJson(`http://hadi-api.herokuapp.com/api/font2?teks=${body.slice(7)}`)
hmm = `*${ini.result}*`
reply(hmm)
await limitAdd(sender)
break
					case 'asmaulhusna':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					  if (args.length < 1) return reply(`contoh ${prefix + command} 5`)
					  anu = await fetchJson(`http://zekais-api.herokuapp.com/asmaulhusna?number=${body.slice(13)}`)
					  hmmhadir = `nomor ${anu.number}\nArab : ${anu.arabic}\nLatin : ${anu.latin}\nTranlateid : ${anu.translation_id}\nTranslateen : ${anu.translation_en}`
					  reply(hmmhadir)
					  await limitAdd(sender)
					  break
					case 'doge':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/anjing?apikey=${leysKey}`)
					dogee = await getBuffer(anu.result)
					didin.sendMessage(from, dogee, image, {quoted: mek, caption: '*INI*'})
					await limitAdd(sender)
					break
				case 'artinama':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Apa yang mau dicari?')
					anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${body.slice(10)}`)
					didin.sendMessage(from, anu.result.arti, text, {quoted: mek})
					await limitAdd(sender) 
					break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				_samih.push(from)
				fs.writeFileSync('./ANBOT-D/simi.json', JSON.stringify(_samih))
				reply('Sukses mengaktifkan mode simi di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				_samih.splice(from, 1)
				fs.writeFileSync('./ANBOT-D/simi.json', JSON.stringify(_samih))
				reply('Sukes menonaktifkan mode simi di group ini ✔️')
				} else {
				reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
				}
				break
					case 'itr':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			var encodemedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			var mediahmm = await  didin.downloadAndSaveMediaMessage(encodemedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', mediahmm)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(mediahmm)
			didin.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			await limitAdd(sender) 	
			break
                case 'addbucin':
					if (!isOwner) return reply(ind.ownerb())
				huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./ANBOT-D/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
					break
				case 'tebakgambar':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./didin/tebakgambar.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			case 'suit':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} gunting`)
				data = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=${XteamD}`)
					if (data.result) return reply(data.result)
					hasil = `*KAMU* : *${data.jawabanmu}*\n*JACK-BOT* : *${data.jawabanbot}*\n*Hasil* : *${data.hasil}*\n*Poin : ${data.poin}*`
					reply(hasil)
					await limitAdd(sender)
					break
			case 'tebakkata':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/tebakkata.js');
        tebak = JSON.parse(data);
				kata = Math.floor(Math.random() * tebak.length);
				randKey = tebak[kata];
				Pertanyaan = '*➸ Pertanyaan :* \n```'+randKey.result.soal +'```'
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					didin.sendMessage(from, '*10 Detik lagi*…', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*30 Detik lagi*…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*1 Menit lagi*…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, Pertanyaan, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'buggc':
					if (!isOwner) return reply('*anda siapa? ini hanya untuk owner*')
					    didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0) 
				        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0) 
				        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0) 
				        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0)
					    didin.toggleDisappearingMessages(from, 0)
                        didin.toggleDisappearingMessages(from, 0) 
				        break
			case 'ceramah':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/ceramah.js');
        cera = JSON.parse(data);
				mahdin = Math.floor(Math.random() * cera.length);
				randKey = cera[mahdin];
				ceramah = randKey.result.ceramah
					didin.sendMessage(from, ceramah, text, {quoted: mek })
					await limitAdd(sender)
					break
					case 'asupan':
					  //saya didin, ini wm cuyy
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
data = fs.readFileSync('./src/didin.js');
        asupann = JSON.parse(data);
				didingantengg = Math.floor(Math.random() * asupann.length);
				randKey = asupann[didingantengg];
				videoo = await getBuffer(randKey.result)
				  didin.sendMessage(from, videoo, video, {mimetype: 'video/mp4', filename: `asupan_dari_didin_ganteng.mp4`, quoted: mek, caption: 'asupannya'})
				  await limitAdd(sender)
					break
					case 'audiomuslim':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
        data = fs.readFileSync('./src/audiomuslim.js');
        audiom = JSON.parse(data);
				muslimm = Math.floor(Math.random() * audiom.length);
				randKey = audiom[muslimm];
				vnaudio = await getBuffer(randKey.result)
        didin.sendMessage(from, vnaudio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				  await limitAdd(sender)
					break
					case 'jedakjeduk':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
         data = fs.readFileSync('./src/jedakjeduk.js');
        jedak = JSON.parse(data);
				jeduk = Math.floor(Math.random() * jedak.length);
				randKey = jedak[jeduk];
				videoo = await getBuffer(randKey.result)
				  didin.sendMessage(from, videoo, video, {mimetype: 'video/mp4', filename: `jedak_jeduk.mp4`, quoted: mek, caption: 'INI JEDAK JEDUKNYA BROTHER'})
				  await limitAdd(sender)
					break
					case 'setprefix':
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(`mau di ubah ke apa? *contoh* ${prefix + command} /`)
					prefix = args[0]
					reply(`*Sukses Mengubah prefix Menjadi* : ${prefix} *Jangan Lupa Untuk Tersenyum*`)
					break 
				case 'caklontong':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					didin.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 60000)
					setTimeout( () => {
					didin.sendMessage(from, '*10 Detik lagi*...', text) // ur cods
					}, 300000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*30 Detik lagi*…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*1 Menit lagi*…', text) // ur cods
					}, 2500) // 1000 = 1s
					didin.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				break

				case 'family100':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				data = fs.readFileSync('./didin/family100.js');
fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					didin.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 60000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					didin.sendMessage(from, '*10 Detik lagi*...', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*30 Detik lagi*…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*1 Menit lagi*…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'pinterest':
if (isBanned) return reply(ind.bann(pusname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
										pin = JSON.parse(JSON.stringify(anu));
					hadirhmm =  pin[Math.floor(Math.random() * pin.length)];
					nye = await getBuffer(hadirhmm)
					didin.sendMessage(from, nye, image, { caption: 'INI', quoted: mek })
					await limitAdd(sender)
					break
					case 'translate':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
				
					  anu = await fetchJson(`https://sanzapi.herokuapp.com/api/translate?kata=${body.slice(10)}&apikey=apisanz`)
					  translatee = `Teks : ${body.slice(10)}\nTranslate : ${anu.result.text}\nFrom : ${anu.result.from}\nTranslate ke : ${anu.result.to}`
					  reply(translatee)
					  break
					case 'resepmasak':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} ayam bakar`)
					  anu = await fetchJson(`https://api.zeks.xyz/api/resep-masak?apikey=${ZeksApi}&q=${body.slice(12)}`)
					  masak = `Judul : ${anu.title}\nTingkat : ${anu.tingkat}\nDurasi : ${anu.duration}\nBanyak : ${anu.banyak}\n\nBahan : ${anu.bahan}\n\nCara : ${anu.cara}`
					  gambarrr = await getBuffer(anu.thumb)
					  didin.sendMessage(from, gambarrr, image, {quoted: mek, caption: masak})
					 
					  break
					case 'katailham':
					 case 'katajack':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						hasil = katailham[Math.floor(Math.random() * (katailham.length))]
						didin.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'bucin':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						didin.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
						await limitAdd(sender)
					break
				case 'rate':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const tte = ra[Math.floor(Math.random() * ra.length)]
					didin.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ tte+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'porncomen':
             if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example : ${prefix + command} didin | Ganteng`)
bufg = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=ANBOT-D&msg=${body.slice(11)}`)
didin.sendMessage(from, bufg, image, {quoted: mek})
break

                    case 'nulis':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
				nuliss = body.slice(7)
				reply(ind.wait())
				jacknp = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nuliss}&apikey=${ZeksApi}`)
				didin.sendMessage(from, jacknp, image, {caption: '*_INI_*', quoted: mek})
				await limitAdd(sender)
				break
					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply(`contoh ${prefix + command} BOT ON`)
					anu = await didin.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await didin.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							didin.sendMessage(_.jid, buff, image, {caption: `*「 JACK BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST JACK-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
					case 'tumur':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				
					query = args.join(" ")
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`contoh ${prefix + command} didin`)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apiKey=${apiKey}&name=${body.slice(7)}`, {method: 'get'})
				result =	`Nama = ${anu.result.name}\nUmur = ${anu.result.age}`
reply(result)
					await limitAdd(sender)
					break
					
				case 'tlight':
     if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
				din056 = body.slice(8)
					din056 = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${din056}&apiKey=${ZeksApi}`)
					didin.sendMessage(from, din056, image, {caption: 'Light Text', quoted: mek})
					await limitAdd(sender)
					break
					case 'gtext':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
           if (args.length < 1) return reply('textnya mana?')
					gte = `${body.slice(7)}`
					te1 = gte.split("|")[0];
					te2 = gte.split("|")[1];
					gte = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${te1}&text2=${te2}&apikey=${ZeksApi}`)
					didin.sendMessage(from, gte, image, {caption: 'Glitch Text', quoted: mek})
					await limitAdd(sender)
					break 
					
					case 'fbdownload':
		if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length < 1) return reply(`Example: ${prefix + command} https://www.facebook.com/AFV/posts/10159893666366661`)
		link = body.slice(12)
		fbdl = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${link}`)
		fbdlg = await getBuffer(fbdl.result.url)
		Zitsraa.sendMessage(from, fbdlg, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: mek})
		await limitAdd(sender)
		break
					case 'coffee':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('textnya mana?')
					reply('*Harga = 50.000*')
					didin = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${body.slice(8)}`)
					didin.sendMessage(from, didin, image, {caption: 'jangan lupa untuk selalu tersenyum', quoted: mek})
					await limitAdd(sender)
					break
					case 'breakwall':
					case 'matrix':
					case 'bneon':
					case 'text3dbox':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
                    textm = args.join(" ")
                    jacknp = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${textm}`)
                    didin.sendMessage(from, jacknp, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'leavest':
                      case 'logobp':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} JACK`)
                    textm = args.join(" ")
                    jacknp = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${textm}&apikey=${ZeksApi}`)
                    didin.sendMessage(from, jacknp, image, { quoted: mek})
                    await limitAdd(sender)
                    break
					case 'shadowt':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(ind.wrongf())
					anbot = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${body.slice(9)}`)
					didin.sendMessage(from, anbot, image, {caption: 'SHADOW TEXT', quoted: mek})
					await limitAdd(sender)
					break 
                    case 'spamgmail':
                    if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} contoh@gmail.com`)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda%20sebesar%20500000%20Ribu%20Rupiah%20ya`, {method: 'get'})
			didin.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender)
                    break
					case 'spamsms':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          reply('Wait..')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 08556778`)
			anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/spamsms?nomor=${body.slice(9)}&jumlah=5&apikey=alpin1`)
			didin.sendMessage(from, `${anu.result}`, text, {quoted: mek})
await limitAdd(sender)
break
					case 'spamcall':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh ${prefix + command} 85298643558`)
          reply('Wait..')
      call = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			didin.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
        await limitAdd(sender)
                     break
    case 'didin':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`Contoh : ${prefix}didin ANBOT-D`)
dinb = `${body.slice(7)}`
din6 = dinb.split("|")[0];
din7 = dinb.split("|")[1];
dinb = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${din6}&text2=${din7}`)
didin.sendMessage(from, dinb, image, {caption: 'SAYA didin', quoted: mek})
await limitAdd(sender)
break
case prefix+'igcari':
case 'igsearch':
                reply(mess.wait)
                try {
                    await searchUser(argz).then((us) => {
                        let searchigcapt = `*Hasil pencarian insta from ${argz}*\n\n`
                        for (let i = 0; i < us.length; i++) {
                            searchigcapt += `
◼️ *Urutan* : ${us[i].number}
◼️ *Username* : ${us[i].username}
◼️ *Nama Lengkap* : ${us[i].name}
◼️ *Id Story Terbaru* : ${us[i].latest_reel}
◼️ *Terverifikasi* : ${us[i].is_verified ? "✅" : "❌"}
◼️ *Akun Private* : ${us[i].is_private ? "✅" : "❌"}
                        `
                        }
                        sendMediaURL(from, us[0].pic, searchigcapt, mek)
                    })
                } catch (err){
                    console.log(color('[IG SEARCH]', 'red'), err)
                    reply(`*Error kami akan memperbaiki nya secepatnya*`)
                }
                break
					case 'pornhub':
					if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (isBanned) return reply(ind.bann())
					if (args.length < 1) return reply(ind.wrongf())
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${hub1}&text2=${hub2}&apikey=${ZeksApi}`)
					didin.sendMessage(from, porn, image, {caption: '*PORNHUB*', quoted: mek})
					await limitAdd(sender)
					break 
					case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
					  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} JACK`)
                    teka = args.join(" ")
                    didinpur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teka}&APIKEY=${XteamD}`)
                    didin.sendMessage(from, didinpur, image, { quoted: mek})
                    await limitAdd(sender)
                    break
			case 'husbu':
				didin.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					 data = fs.readFileSync('./src/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
					await limitAdd(sender)
				break

		case 'darkneon':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}darkneon didin`)
			darkn = body.slice(9)
			darkne = await getBuffer(`https://videfikri.com/api/textmaker/darkneon/?text=${darkn}`)
			didin.sendMessage(from, darkne, image, {quoted: mek, caption: '*DARKNEON*'})
			await limitAdd(sender)
			break
			case 'woodblock':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}woodblock didin`)
		 didin120 = body.slice(11)
			din120 = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${didin120}`)
			didin.sendMessage(from, din120, image, {quoted: mek, caption: '*INI*'})
			await limitAdd(sender)
			break
			case 'paper':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`*Contoh: ${prefix}paper Jack*`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			didin.sendMessage(from, glass, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
				case 'film':
				if (isBanned) return reply(ind.bann())    
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('*Mau Cari Film Apa,Contoh #film Fast And Forious*')
				try {
		
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* *${film.Title}*\n• *Rilis Tahun:* *${film.Year}*\n• *Type:* *${film.Type}*\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				} catch (e) {
					reply(ind.stikga)
				}
				await limitAdd(sender) 
					break
          case 'snack':
			try {
			if (isBanned) return reply(ind.bann())    
				if (!isRegistered) return reply(ind.noregis())
				didin.updatePresence(from, Presence.recording)
         if (args.length < 1) return reply('Urlnya mana?')
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}`
                bufferddd = await getBuffer('https://i.ibb.co/H40PSjF/IMG-20210329-WA0118.jpg')
                buff = await getBuffer(anu.result)
                didin.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                didin.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                } catch (e) {
					reply(ind.stikga)
					}
					await limitAdd(sender) 
                break
                case 'ytmp3':
				if (!q) return reply('*Masukan link yt*')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('*Masukan link yt yang benar*')
				reply(`*Lagu sedang dicari,Mohon tunggu beberapa menit*`)
				anu = await y2mateA(q).catch(e => {
				reply('*Error!*')
				})
				acamp3 = `「 *YTMP3 DOWNLOADER* 」\n\nDengan format\n-|> *Judul :* ${anu[0].judul}\n-|> *Ukuran :* ${anu[0].size}\nDATA BERHASIL DIDAPATKAN`
				infomp3 = await getBuffer(anu[0].thumb)
				didin.sendMessage(from, infomp3, image, {quoted: mek, caption: acamp3})
				lagunye = await getBuffer(anu[0].link)
				didin.sendMessage(from, lagunye, audio, {mimetype: 'audio/mp4', filename: `${anu[0].output}`, quoted: mek})
				break
   case 'ytmp4':
                    case 'ytmp4':
				if (!q) return reply('*Masukan url yt*')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('*Maaf link yang anda kirim tidak benaer,Silahkan cek ulang*')
				reply(`*Lagu sedang dicari,Mohon tunggu beberapa menit*`)
				anu = await y2mateV(q).catch(e => {
				reply('*Error!*')
				})
				acamp4 = `「 *YTMP4 DOWNLOADER* 」\n\nDengan format\n-|> *Judul :* ${anu[0].judul}\n-|> *Ukuran :* ${anu[0].size}\nDATA BERHASIL DIDAPATKAN`
				infomp4 = await getBuffer(anu[0].thumb)
				didin.sendMessage(from, infomp4, image, {quoted: mek, caption: acamp4})
				vidionye = await getBuffer(anu[0].link)
				didin.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${anu[0].output}`, quoted: mek})
				break
      case 'igdownload':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CLTaUViskMB/`)
                    query = body.slice(12)
                    jacknp = await fetchJson(`https://videfikri.com/api/igdl/?url=${query}`)
                    jacknp = jacknp.result
                     dinn =`TITLE = ${jacknp.caption}\nType = ${jacknp.type_post}\nUsername : ${jacknp.username}\nFullname : ${jacknp.full_name}\nLike : ${jacknp.like}\nComment : ${jacknp.comment}\nDurasi : ${jacknp.duration}`
        gambary = await getBuffer(jacknp.thumb)
                    didin.sendMessage(from, gambary, image, { quoted: mek, caption: dinn})
         get_video = await getBuffer(jacknp.video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${jacknp.caption}.mp4`, quoted: mek})
                    break
				case 'chord':    
               			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                		reply(ind.wait)
                		if (args.length < 1) return reply('judul lagu sangat di perlukan')
					teks = body.slice(7)
					anu = await fetchJson(`https://videfikri.com/api/chord/?query=${teks}`, {method: 'get'})
					reply('chord dari lagu '+teks+' adalah :\n\n'+anu.result.chord)
					await limitAdd(sender) 
					break

case 'caristiker':
  			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=${ZeksApi}&q=${body.slice(12)}`, {method: 'get'})
jacknp = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
stickerr = (anu.sticker)
didin.sendMessage(from, jacknp, image, {quoted: mek, caption: teks})
var tekss =  stickerr[Math.floor(Math.random() * stickerr.length)];
exec(`wget ${tekss} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('*EROR*')
						fs.unlinkSync(ranp)
						
						jacknp2 = fs.readFileSync(rano)
						costum(jacknp2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
				case 'lirik':    
               			if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                		if (args.length < 1) return reply('judul lagu sangat di perlukan')
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
case 'katacinta':
                 if (!isRegistered) return reply( ind.noregis())
		    if (isLimit(sender)) return reply(ind.limitend(pusname))
		    gatauda = body.slice(8)
		    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
		    reply(anu.result)
		    await limitAdd(sender)
		    break
					case 'map':
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                didin.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					case 'antivirtex':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiVirtex) return reply('SUDAH AKTIF')
						antivirtex.push(from)
						fs.writeFileSync('./ANBOT-D/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						didin.sendMessage(from,`PERINGATAN : Jangan kirim virtex`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiVirtex) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./ANBOT-D/antivirtex.json', JSON.stringify(antivirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break

//sound
case 'cita-cita':
  case 'citacita':
  hmm = await getBuffer(`https://api-self.herokuapp.com/api/citacita`)
  didin.sendMessage(from, hmm, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound1':
const irimp3 = fs.readFileSync('./assets/dj1.mp3');
didin.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound2':
const pa = fs.readFileSync('assets/dj2.mp3')
didin.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
const soun = fs.readFileSync('assets/dj3.mp3')
didin.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound4':
satu = fs.readFileSync('./assets/dj4.mp3');
didin.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
dua = fs.readFileSync('./assets/dj5.mp3');
didin.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
tiga = fs.readFileSync('./assets/dj6.mp3');
didin.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
empat = fs.readFileSync('./assets/dj7.mp3');
didin.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
lima = fs.readFileSync('./assets/dj8.mp3');
didin.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
enam = fs.readFileSync('./assets/dj9.mp3');
didin.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
enam = fs.readFileSync('./assets/dj10.mp3');
didin.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
dj11 = fs.readFileSync('./assets/dj11.mp3');
didin.sendMessage(from, sound11, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound12':
dj12 = fs.readFileSync('./assets/dj12.mp3');
didin.sendMessage(from, dj12, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
dj13 = fs.readFileSync('./assets/dj13.mp3');
didin.sendMessage(from, dj13, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound14':
dj14 = fs.readFileSync('./assets/dj14.mp3');
didin.sendMessage(from, dj14, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
const dj15 = fs.readFileSync('./assets/dj15.mp3');
didin.sendMessage(from, dj15, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound16':
const dj16 = fs.readFileSync('assets/dj16.mp3')
didin.sendMessage(from, dj16, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
const dj17 = fs.readFileSync('assets/dj17.mp3')
didin.sendMessage(from, dj17, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound18':
dj18 = fs.readFileSync('./assets/dj18.mp3');
didin.sendMessage(from, dj18, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
dj19 = fs.readFileSync('./assets/dj19.mp3');
didin.sendMessage(from, dj19, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
dj20 = fs.readFileSync('./assets/dj20.mp3');
didin.sendMessage(from, dj20, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
dj21 = fs.readFileSync('./assets/dj21.mp3');
didin.sendMessage(from, dj21, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
dj22 = fs.readFileSync('./assets/dj22.mp3');
didin.sendMessage(from, dj22, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
dj23 = fs.readFileSync('./assets/dj23.mp3');
didin.sendMessage(from, dj23, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
dj24 = fs.readFileSync('./assets/dj24.mp3');
didin.sendMessage(from, dj24, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dj25 = fs.readFileSync('./assets/dj25.mp3');
didin.sendMessage(from, dj25, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound26':
dj26 = fs.readFileSync('./assets/dj26.mp3');
didin.sendMessage(from, dj26, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
dj27 = fs.readFileSync('./assets/dj27.mp3');
didin.sendMessage(from, dj27, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound28':
dj28 = fs.readFileSync('./assets/dj28.mp3');
didin.sendMessage(from, dj28, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break		
case 'sound29':
dj29 = fs.readFileSync('./assets/dj29.mp3');
didin.sendMessage(from, dj29, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'listsound':
					  case 'soundmenu':
					    case 'menusound':
if (!isRegistered) return reply(ind.noregis())

        var wadidin = "0@s.whatsapp.net"

        var anbotdidin = "MENU SOUND"
         var gambard = await getBuffer("https://i.ibb.co/DMCnjQ5/gtext.jpg")
         const bedareply = {
          contextInfo: {
           stanzaId: 'B826873620DD5947E683E3ABE663F263',
            participant: wadidin,
           remoteJid: 'status@broadcast',
           quotedMessage: {
                                imageMessage: {
                                    caption: anbotdidin,
                                    jpegThumbnail: gambard
                                }
                            }
                        }
                    }
          didin.sendMessage(from, sound(prefix), text, bedareply)
					  break
break
					default:
			if (budy.includes(`assalamualaikum`)) {
                  reply(`*Waalaikumsalam*`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`*Waalaikumsalam*`)
                  }
                  
        if (budy.includes(`Ping`)) {
        	      reply(`*Active Om/Tante*`) 
                  }
                  
                  if (budy.includes('vote')
                  || budy.includes('Vote')
                  || budy.includes('Votee')
                  || budy.includes('votee')) {
                  if (!isGroup) return reply(ind.groupo())
                  if (!isRegistered) return reply( ind.noregis())
                  if (!isGroupAdmins) return reply(ind.admin())
                  if (!isBotGroupAdmins) return reply(ind.badmin())	
    			  quotedis = mek.message.extendedTextMessage.contextInfo.participant
				  await didin.groupRemove(from, [quotedis])
				  reply(`berhasil kick reply`)
				  }
				
		if (budy.includes(`Thanks`)) {
                  reply(`*Sama Sama*`)
                  }
				
		if (budy.includes(`Makasih`)) {
                  reply(`*Sama Sama*`)
                  }
if (budy.includes(`menu`)) {
  vn = fs.readFileSync('./assets/menu.mp3');
didin.sendMessage(from, vn, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
       if (budy.includes(`@6285262317166`)) {
                  reply(`*NGAPAIN TAG GW?*`)
                  }

			 
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[JACK-BOT]','aqua'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
			}

		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	}
starts()
	