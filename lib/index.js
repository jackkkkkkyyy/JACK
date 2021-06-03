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
const fs = require("fs")
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
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./ANBOTDIDIN')
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


const ZeksApi = 'apivinz'
const leysKey = 'MNQYOVSL'
const XteamD = '7415bc4287ad5ca8'
const apiKey = '7ed90d537ab5edddb6ba6465'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:INI ORANG\n'
            + 'ORG: ANBOT-D;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285298595430:+6285298595430\n'
            + 'END:VCARD'
prefix = '#'
battre = 85
blocked = []   
didinlimit = '50'
cr = `*ANBOT-D*`
mendo = '*SEDEKAH*'
reply = '*REPLY BY DIDIN*'
mensa = '*KODE BAHASA*'
vr = '*ANBOT-D*'
/******** OWNER NUMBER**********/
const ownerNumber = ["6285298595430@s.whatsapp.net"]
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
const slott = [
		'🐡 : 🐬 : 🐋',
		'🐋 : 🐋 : 🐋',
		'🐓 : 🐬 : 🦉',
		'🐓 : 🐓 : 🐓',
    '🐿 : 🦔 : 🐲',
    '🐡 : 🐡 : 🐡',
    '🐭 : 🐱 : 🐿',
    '🐡 : 🐭 : 🐋',
    '🐭 : 🐬 : 🐶',
    '🦄 : 🦄 : 🦄',
    '🦘 : 🐬 : 🦥',
    '🐡 : 🐠 : 🦄',
    '🦀 : 🦀 : 🦀',
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
				if (!packname) packname = 'ANBOT-D'; if (!author) author = ' DIDIN';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = didinnp.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
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

				const buf2 = didinnp.from(last, "hex")
				const buf3 = didinnp.from(bytes)
				const buf4 = didinnp.from(JSON.stringify(json))

				const didinnp = didinnp.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, didinnp, (err) => {
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
	console.log(color('(+)','white'), color('ANBOT-D','red'), color('(+)','white'), color(' SCAN QR CODENYA','aqua'), color('SUBSCRIBE YT HADIR_HMM','yellow'))
})

	didin.on('credentials-updated', () => {
		fs.writeFileSync('./DIDIN.json', JSON.stringify(didin.base64EncodedAuthInfo(), null, '\t'))
		info('2', '「 INFO 」')
	})
	fs.existsSync('./DIDIN.json') && didin.loadAuthInfo('./DIDIN.json')
	didin.on('connecting', () => {
		start('2', color('「 HADIR_HMM 」    ','aqua'))
	})
	didin.on('open', () => {
		success('2', color('「 TERHUBUNG KE ANBOT-D 」','red'))
	})
	didin.connect({timeoutMs: 30*1000})

didin.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await didin.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini jangan lupa intro 
┏━━━━━━━━━━━━━━━━━━━━
┃ HAY SAYA BOT SALAM KENAL
┃ YA, KETIK ${prefix}daftar ${pushname} | 17
┣━━━━━━━━━━━━━━━━━━━━
┃ NAMA    :
┃ TINGGAL :
┃ UMUR    :
┗━━━━━━━━━━━━━━━━━━━━`
				
				reply(teks)
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `Sayonara @${num.split('@')[0]} Jangan Lupa Untuk Selalu Tersenyum Ya😊`
				let buff = await getBuffer(ppimg)
reply(teks)
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
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
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const txt = mek.message.conversation
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
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
            const ultah = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=09&bulan=04')
            const idf = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=05')
		      const ucapan = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
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
				premi = 'Didin'
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
            if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  
            if (mesejAnti.includes("◢▜⃟▜⃟⃟⃟▜✰̚c҇߯͠ყ͈ɓεͥ̂ɾรͣρ̃αͫc͛ε✰◢▜⃟▜⃟⃟z")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini antiVirtex, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
            if (mesejAnti.includes("*๖ۣۜH๖ۣۜe๖ۣۜk๖ۣۜe๖ۣۜl๖ۣۜK๖ۣۜo๖ۣۜk๖ۣۜU๖ۣۜn๖ۣۜi๖ۣۜc๖ۣۜo๖ۣۜd๖ۣۜe๖ۣۜB๖ۣۜy๖ۣۜF๖ۣۜr๖ۣۜe๖ۣۜ")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini antiVirtex, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  
if (mesejAnti.includes("://www.tiktok.com")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }

if (mesejAnti.includes("://www.instagram.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  
if (mesejAnti.includes("://i.ibb.co/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
            if (mesejAnti.includes("://youtu.be/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
            if (mesejAnti.includes("://www.facebook.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply(`${pushname} ADALAH ADMIN`)
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("didinganteng")) return reply("Iya Izin Di Terima Tapi Kalau Spam Terkick")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti link, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*「 ANBOT-D HARUS JADI ADMIN 」*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }


		  if (mesejAnti.includes("bego")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("bokep")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("bangsat")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("netnot")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("tolol")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("anjir")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("goblok")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("ajg")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("ngentot")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
if (mesejAnti.includes("anjing")){
		        if (!isGroup) return
		        if (!isBotGroupAdmins) return
		        if (!isBadWord) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("babi")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("kontl")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("kontol")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  if (mesejAnti.includes("memek")){
		        if (!isGroup) return
		        if (!isBadWord) return
		        if (!isBotGroupAdmins) return
		        didin.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf, ${sender.split("@")[0]}, tapi Grup ini anti berkata dan ketikan kasar, anda akan di kick oleh ANBOT-D`)
		        setTimeout( () => {
			        didin.groupRemove(from, [kic]).catch((e)=>{reply(`*ANBOT-D harus jadi admin*`)})
		        }, 3000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("1")
		        }, 2000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("2")
		        }, 1000)
		        setTimeout( () => {
			        didin.updatePresence(from, Presence.composing)
			        reply("3")
		        }, 0)
		  }
		  


           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedDidin = type === 'extendedTextMessage' && content.includes('textMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
	
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIBADI ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  PUBLIK  ]", "aqua"), color(budy, "white"), "DARI", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			let authorname = didin.contacts[from] != undefined ? didin.contacts[from].vname || didin.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) {
				case 'addprem':
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isOwner) return reply('*anda siapa? ini hanya untuk owner*')
					if (args.length < 1) return reply(`contoh ${prefix + command} 6285298595430\n\natau bisa juga dengan ${prefix + command} tag target`)
					adpr = body.slice(10)
					premium.push(`${adpr}@s.whatsapp.net`)
					fs.writeFileSync('./ANBOT-D/didin.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan ${adpr} Ke Daftar Premium`)
				await limitAdd(sender)
					break
					case 'slot':
            const slottt = slott[Math.floor(Math.random() * slott.length)]
            didin.sendMessage(from, `[   | SLOTS ]\n-----------------\n :  : \n${slottt}<=====\n :  : \n[   | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : 🦂<=====`, text, { quoted: mek })
            break
				case 'dellprem':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isOwner) return reply(ind.ownerb())
					din02 = body.slice(11)
					delp = premium.indexOf(din02)
					premium.splice(delp, 1)
					fs.writeFileSync('./ANBOT-D/didin.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus ${din02} Dari Daftar Premium`)
					await limitAdd(sender)
					break				
					case 'bannedlist':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					didin.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					teks = `*JUMLAH BAN*\n`
					no = 0
					for (let bann of ban) {
						no += 1
						teks += `${no.toString()} @${bann.split('@')[0]}\n`
					}
					teks += `Jumlah BAN : ${ban.length}\n *${pushname}*`
					didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					await limitAdd(sender)
					break
					case 'premiumlist':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					didin.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					teks = `*JUMLAH USER PREMIUM*\n`
					no = 0
					for (let premi of premium) {
						no += 1
						teks += `${no.toString()} @${premi.split('@')[0]}\n`
					}
					teks += `Jumlah User Premium : ${premium.length}\n *${pushname}*`
					didin.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					await limitAdd(sender)
					break
				case 'dompet':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				
				break
 case 'ytplaymp3':
   case 'ytplaymp4':
if (isBanned) return reply( ind.banned(pushname))
              if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
        if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    dinnnnnnnnnp = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&q=${query}`)
                    dinnnnnnnnnp = dinnnnnnnnnp.result
                     dinn =`TITLE = ${dinnnnnnnnnp.title}\nSIZE = ${dinnnnnnnnnp.size}`
                    gambary = await getBuffer(dinnnnnnnnnp.thumbnail)
                    didin.sendMessage(from, gambary, image, { quoted: mek, caption: dinn })
                    get_audio = await getBuffer(dinnnnnnnnnp.url_audio)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${dinnnnnnnnnp.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(dinnnnnnnnnp.url_video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${dinnnnnnnnnp.title}.mp4`, quoted: mek})
                    await limitAdd(sender)
                    break

				case 'joox':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
    if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
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
                 didin.sendMessage(from, darkjokes, image, {quoted: mek, caption: '*~SENTER MANA SENTER~*'})
				await limitAdd(sender)
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
                 didin.sendMessage(from, memeall, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
                 didin.sendMessage(from, bokunohero, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
                 didin.sendMessage(from, swordartonline, image, {quoted: mek, caption: '*swort art online*\n*YT = HADIR_HMM*'})
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
                 didin.sendMessage(from, highschooldxd, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
                 didin.sendMessage(from, lovelive, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
                 didin.sendMessage(from, memeall, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
					didin.sendMessage(from, Laki, image, didinanbot, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
		      Cewe = await getBuffer(randKey.result.cewek)
					didin.sendMessage(from, Cewe, image, didinanbot, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
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
					didin.sendMessage(from, Anime, image, { caption: '*_YT = HADIR_HMM_*', quoted: mek })
				await limitAdd(sender) 
					break
					case 'persegi':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} 2\njika kalian bertanya apa 2\n2 itu sisi 2 dalam persegi yo know lah apa itu persegi yap persegi bukan lah kotak`)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${body.slice(9)}&apikey=MNQYOVSL`)
				ini_saya = `Rumus K : ${anu.rumus_keliling}\nHasil K : ${anu.hasil_keliling}\nRumus L : ${anu.rumus_luas}\nHasil L : ${anu.hasil_luas}\nKalau Mau Lebih Pintar Ya Belajar\nSaya Didin`
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
			case 'sticker':
			case 's':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					await limitAdd(sender)
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
								didinnp = fs.readFileSync(ran)
								didin.sendMessage(from, didinnp, sticker, {quoted: mek})
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
								didinnp = fs.readFileSync(ran)
								didin.sendMessage(from, didinnp, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix + command} atau reply/tag gambar`)
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
case 'daftar':
if (isBanned) return reply( ind.banned(pushname))
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(`contoh = ${prefix}daftar ${pushname}|17`)
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('*UMUR KAMU HARUS BERUPA ANGKA*')       
                if (namaUser.length >= 30) return reply(`*WHY, YOUR NAME NDAK BISA BAHASA INGGRIS*`)
                if (umurUser > 30) return reply(`*UMUR KAMU TERLALU TUA, MAKSIMAL 30*`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA*`)
              logo = fs.readFileSync(`./src/logo.jpg`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await didin.sendMessage(from, logo, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    reply('Terima Kasih')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await didin.sendMessage(from, logo, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[DAFTAR anBOT-D]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
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
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim* : ANBOT-D\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
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
	  dinhmmp = await getBuffer(`http://lolhuman.herokuapp.com/api/convert/towebp?apikey=7ed90d537ab5edddb6ba6465&img=${anu.display_url}`)
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
	  dinhmmp = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${anu.display_url}`)
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
	case 'comunism':
	  case 'wanted':
	  case 'trigger':
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
	case 'ttp':
if (isBanned) return reply( ind.banned(pushname))
	  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
	  ini_didin = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp3?apikey=${apiKey}&text=${body.slice(5)}`)
	  didin.sendMessage(from, ini_didin, sticker, {quoted: mek})
	  await limitAdd(sender)
	  break
			  case 'attp':
if (isBanned) return reply( ind.banned(pushname))
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
            teks = args.join(" ")
					didinnp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					didin.sendMessage(from, didinnp, sticker, {quoted: mek})
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
							didinnp = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							didin.sendMessage(from, didinnp, audio, {quoted: mek, ptt:true})
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
case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: \n*${prefix}next* — find a new partner`)
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
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(enmedia)
					await didin.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya')
					break 
				case 'tiktokstalk':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
try {
						if (args.length < 1) return didin.sendMessage(from, 'USERNAMENYA MANA?', text, {quoted: mek})
          hmm = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${body.slice(12)}&apikey=${leysKey}`)
					didinnp = await getBuffer(hmm.result.user.avatarLarger)

					hasil = `Nickname : ${hmm.result.user.nickname}\nPengikut : ${hmm.result.stats.followerCount}\nMengikuti : ${hmm.result.stats.followingCount}\nBio : ${hmm.result.user.signature}\nVerified : ${hmm.result.user.verified}`
					didin.sendMessage(from, didinnp, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[NTAHLAH] MUNGKIN USERNAMENYA TIDAK VALID')
					}
					await limitAdd(sender)
					break
   
				case 'igstalk':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				try {
						if (args.length < 1) return didin.sendMessage(from, 'USERNAMENYA MANA?', text, {quoted: mek})
hmm = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${body.slice(9)}&APIKEY=7415bc4287ad5ca8`)
hmm = hmm.result
					didinnp = await getBuffer(hmm.user.profile_pic_url)

					hasil = `Fullname : ${hmm.user.full_name}\nUsername : ${hmm.user.username}\nPengikut : ${hmm.friendship_status.followed_by}\nMengikuti : ${hmm.friendship_status.following}`
					didin.sendMessage(from, didinnp, image, {quoted: mek, caption: hasil})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[NTAHLAH] MUNGKIN USERNAMENYA TIDAK VALID')
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
					reply(`Berhasil Menghapus ${din02} Dari Daftar ban`)
				break
			       case 'block':
				 didin.updatePresence(from, Presence.composing) 
				 didin.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					didin.blockUser (`${body.slice(7)}@c.us`, "add")
					didin.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    didin.blockUser (`${body.slice(9)}@c.us`, "remove")
					didin.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
        anu = await didin.groupLeave(from, `Bye Semua Member *${groupMetadata.subject}*`, groupId)
        break
					case 'gombal':
if (isBanned) return reply( ind.banned(pushname))
       if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = gombal[Math.floor(Math.random() * (gombal.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~GOMBAL ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'qmuslim':
if (isBanned) return reply( ind.banned(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = muslim[Math.floor(Math.random() * (muslim.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'rdoadl':
if (isBanned) return reply( ind.banned(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup) return reply(ind.groupo())
			if (!isRegistered) return reply(ind.noregis())
			  hasil = tahlil[Math.floor(Math.random() * (tahlil.length))]
						didin.sendMessage(from, '*'+hasil+'*\n\n*~ANBOT-D~*', text, {quoted: mek})
						await limitAdd(sender)
					break
			case 'hapus':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
       if (!isBotGroupAdmins) return reply(ind.badmin())
					didin.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'brainly':
if (isBanned) return reply( ind.banned(pushname))
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					didin.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
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
				if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
                didin.groupUpdateSubject(from, `${body.slice(9)}`)
                didin.sendMessage(from, 'SUKSES MENGGANTI NAMA GROUP,TAPI ANDA KOK KOK REBAHAN SAMBIL KAKI KALIAN DI ATAS KAKI LAINNYA', text, {quoted: mek})
					break
				
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
                didin.groupUpdateDescription(from, `${body.slice(9)}`)
                didin.sendMessage(from, 'SUKSES MENGGANTI DESC,TAPI ANDA KOK KOK REBAHAN SAMBIL KAKI KALIAN DI ATAS KAKI LAINNYA', text, {quoted: mek})
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
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					teks = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/simsimi/?teks=${teks}`, {method: 'get'})
					simii = `*${anu.result.jawaban}*`
					didin.sendMessage(from, simii, text, {quoted: mek})
					await limitAdd(sender) 
					break 
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan dari admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat anda menjadi member :\n`
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

			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply atau tag target yang ingin di tendang!')

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
                mentions(`*Perintah Di Terima, Selamat Tinggal* @${mentioned[0].split('@')[0]} Nomor Anda Akan Hilang Dari List Grup Ini`, mentioned, true)
                didin.groupRemove(from, mentioned)
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
						didinnp = fs.readFileSync(ran)
						didin.sendMessage(from, didinnp, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'tagme':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
          await costum(`@${sender.split('@')[0]}`, text, `@${sender.split('@')[0]}`)
          await limitAdd(sender)
				break
					case 'tovideo':
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await didin.downloadAndSaveMediaMessage(anumedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						didin.sendMessage(from, buffers, video, { quoted: mek, caption: 'DONE...' })
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
if (isBanned) return reply( ind.banned(pushname))
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await didin.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						didinnp = fs.readFileSync(ran)
						didin.sendMessage(from, didinnp, image, {quoted: mek, caption: 'ini '})
						fs.unlinkSync(ran)
					})
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
didin.sendMessage(from, `
*Selamat* *${ucapan.data.result}* *_KAK_* *_「${pushname}」_* *Saya ANBOT-D*

       ────✪ Ini Bot ✪────
       ───────────────
       
        Hai *「${pushname}」*
        ───────────────͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
        ───────────────
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
MY GROUP : https://chat.whatsapp.com/FifltPBD71wI8aaNHLAAlZ

┏━━━━━━━━━━━━━━━━━━━
┃───〘 *HITUNG MUNDUR* 〙───
┃━━━━━━━━━━━━━━━━━━━
*Ultah Didin* : ${ultah.data.result}
*Idul Fitri* : ${idf.data.result}
┗━━━━━━━━━━━━━━━━
	
┏━━━━━━━━━━━━━━━━━━━
┃────〘 *ANBOT-D* 〙─────
┃━━━━━━━━━━━━━━━━━━━
┠⊷ *Nama* : 「${pushname}」
┠⊷ *Nomer* : wa.me/${sender.split("@")[0]}
┠⊷ *Jam* : ${day} ${jam}:${menit}:${detik} ${ampm}
┠⊷ *Tanggal* : ${day} - ${myMonths[bulan]} - ${year}
┠⊷ *Speed* : ${process.uptime()}
┠⊷ *Aktif* : ${kyun(uptime)}
┠⊷ *Baterai :* ${battre}%
┗━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃────〘 *INFO* 〙─────
┃━━━━━━━━━━━━━━━━━━━
┠⊷ *Premium* : 「${premi}」
┠⊷ *Banned* : 「${bann}」
┠⊷ *welcome* : 「${welcomee}」
┠⊷ *Simih* : 「${simihh}」
┠⊷ *AntiLink* : 「${antiLinkk}」
┠⊷ *Antivirtex* : 「${antiVirtexx}」
┠⊷ *NoBadword* : 「 ${badWordd}」
┠⊷ *Nsfw* : 「 ${nsfww} 」
┠⊷ *Prefix* : 「 ${prefix} 」
┠⊷ *User register* :「 ${_registered.length} 」
┗━━━━━━━━━━━━━━━━

┠⊷ *${prefix}bug* <jika ada yang tidak work harap beritahu ke owner dengan cara ketik bug dan menu apa yang tidak work>

┠⊷ *${prefix}rules*

┠⊷ *${prefix}req* <jika ingin memberi saran untuk penambahan menu harap memberitahu ke owner dengan cara, ketik req dan menu apa yang ingin di tambahkan>

${prefix}slot

╔•••═══════•••╗     
┃─〘 *ANIME* 〙─┃
╚•••═══════•••╝
┠⊷ *${prefix}anime*
┠⊷ *${prefix}bokunh*
┠⊷ *${prefix}sao*
┠⊷ *${prefix}lovelive*
┠⊷ *${prefix}animesaran/animesaran2*
┠⊷ *${prefix}loli*
┠⊷ *${prefix}hsdxd*
┠⊷ *${prefix}husbu*
┠⊷ *${prefix}waifu*
┠⊷ *${prefix}neko*
┠⊷ *${prefix}chika*
┠⊷ *${prefix}kurumi*
┠⊷ *${prefix}kaneki*
┠⊷ *${prefix}touka*
┠⊷ *${prefix}aot*
┠⊷ *${prefix}naruto*
┠⊷ *${prefix}minato*
┠⊷ *${prefix}sagiri*
┠⊷ *${prefix}tokyoghoul*
┗━━━━━━━━━━━━━━━━

╔•••═══════════•••╗ 
       〘 *SERTIFIKAT* 〙
╚•••═══════════•••╝
┠⊷ *${prefix}tserti*
┠⊷ *${prefix}ffserti*
┠⊷ *${prefix}ffserti2*
┠⊷ *${prefix}ffserti3*
┠⊷ *${prefix}mlserti*
┠⊷ *${prefix}mlserti2*
┠⊷ *${prefix}mlserti3*
┠⊷ *${prefix}pubgserti*
┠⊷ *${prefix}pubgserti2*
┠⊷ *${prefix}pubgserti3*
┗━━━━━━━━━━━━━━━━

╔•••═════════•••╗     
       〘 *EDITING* 〙
╚•••═════════•••╝
┠⊷ *${prefix}gaminglogo*
┠⊷ *${prefix}stiker*
┠⊷ *${prefix}ttp*
┠⊷ *${prefix}wait*
┠⊷ *${prefix}removebg*
┠⊷ *${prefix}rip*
┠⊷ *${prefix}fuse*
┠⊷ *${prefix}wanted*
┠⊷ *${prefix}comunism*
┠⊷ *${prefix}trigger*
┠⊷ *${prefix}rotate*
┠⊷ *${prefix}delete*
┠⊷ *${prefix}thuglife*
┠⊷ *${prefix}tobecontinue*
┠⊷ *${prefix}smoke* <teks>
┠⊷ *${prefix}camuflage* <teks>
┠⊷ *${prefix}stars* <teks>
┠⊷ *${prefix}3dglowing* <teks>
┠⊷ *${prefix}underwaterocean* <teks>
┠⊷ *${prefix}wolfmetal* <teks>
┠⊷ *${prefix}rainbowshine* <teks>
┠⊷ *${prefix}gtavposter*
┠⊷ *${prefix}pencil*
┠⊷ *${prefix}pencildrawing*
┠⊷ *${prefix}burneffect*
┠⊷ *${prefix}crossgun*
┠⊷ *${prefix}customwp*
┠⊷ *${prefix}nightbeach*
┠⊷ *${prefix}raindrop*
┠⊷ *${prefix}3dlinephoto*
┠⊷ *${prefix}stikerr*
┠⊷ *${prefix}tahta* <teks>
┠⊷ *${prefix}woodblock* <text>
┠⊷ *${prefix}darkneon* <text>
┠⊷ *${prefix}tlight* <text>
┠⊷ *${prefix}paper* <text>
┠⊷ *${prefix}matrix* <teks>
┠⊷ *${prefix}text3dbox* <teks>
┠⊷ *${prefix}breakwall* <text>
┠⊷ *${prefix}didin* <text|text>
┠⊷ *${prefix}gtext* <text|text>
┠⊷ *${prefix}pornhub* <text|text>
┠⊷ *${prefix}bneon* <text>
┠⊷ *${prefix}coffee* <text>
┠⊷ *${prefix}logobp* <text>
┠⊷ *${prefix}leavest* <text>
┠⊷ *${prefix}shadowt* <text>
┠⊷ *${prefix}nulis* <text>
┠⊷ *${prefix}attp* <text>
┠⊷ *${prefix}ppcouple*
┠⊷ *${prefix}porncomen* <text>
┠⊷ *${prefix}tts* <kode bahasa> <text>
┗━━━━━━━━━━━━━━━━

╔•••══════════•••╗    
           〘 *MTM* 〙
╚•••══════════•••╝
┠⊷ *${prefix}persegi*
┠⊷ *${prefix}perkalian*
┗━━━━━━━━━━━━━━━━

╔•••══════════•••╗    
      〘 *FUN/GAME* 〙
╚•••══════════•••╝
┠⊷ *${prefix}apakah*
┠⊷ *${prefix}siapakah*
┠⊷ *${prefix}katailham*
┠⊷ *${prefix}memeindo*
┠⊷ *${prefix}darkjoke*
┠⊷ *${prefix}asupan*
┠⊷ *${prefix}pantun*
┠⊷ *${prefix}quotes*
┠⊷ *${prefix}cerhor*
┠⊷ *${prefix}gombal*
┠⊷ *${prefix}bucin*
┠⊷ *${prefix}jadian*
┠⊷ *${prefix}watak* <nama>
┠⊷ *${prefix}kapankah* <teks>
┠⊷ *${prefix}bisakah* <teks>
┠⊷ *${prefix}terpintar*
┠⊷ *${prefix}terganteng*
┠⊷ *${prefix}tercantik*
┠⊷ *${prefix}tebakkata*
┠⊷ *${prefix}family100*
┠⊷ *${prefix}caklontong*
┠⊷ *${prefix}tebakgambar*
┠⊷ *${prefix}doge*
┗━━━━━━━━━━━━━━━━

╔•••═══════•••╗     
      〘 *ISLAM* 〙
╚•••═══════•••╝
┠⊷ *${prefix}hadits*
┠⊷ *${prefix}audiomuslim*
┠⊷ *${prefix}asmaulhusna* <nomor>
┠⊷ *${prefix}jadwalsalat*
┠⊷ *${prefix}alquran*
┠⊷ *${prefix}sedekah*
┠⊷ *${prefix}qmuslim*
┠⊷ *${prefix}ceramah*
┠⊷ *${prefix}rdoadl*
┠⊷ *${prefix}listsurah*
┠⊷ *${prefix}quranaudio*
┠⊷ *${prefix}kisahnabi* <nama nabi>
┗━━━━━━━━━━━━━━━━

╔•••══════•••╗     
┃─〘 *USER* 〙─┃
╚•••══════•••╝
┠⊷ *${prefix}dompet*
┠⊷ *${prefix}buylimit*
┠⊷ *${prefix}transfer*
┠⊷ *${prefix}limit*
┠⊷ *${prefix}level*
┠⊷ *${prefix}bahasa*
┠⊷ *${prefix}qrcode*
┗━━━━━━━━━━━━━━━━

╔•••═════•••╗     
┃─〘 *ALL* 〙─┃
╚•••═════•••╝
┠⊷ *${prefix}translate*
┠⊷ *${prefix}jedakjeduk*
┠⊷ *${prefix}caristiker*
┠⊷ *${prefix}fakta*
┠⊷ *${prefix}nickgame*
┠⊷ *${prefix}simi*
┠⊷ *${prefix}mining*
┠⊷ *${prefix}wattpadsearch*
┠⊷ *${prefix}sindiran*
┠⊷ *${prefix}namajawa*
┠⊷ *${prefix}itr*
┠⊷ *${prefix}pinterest* <text>
┠⊷ *${prefix}lb/leaderboard*
┠⊷ *${prefix}aesthetic*
┠⊷ *${prefix}listsound*
┠⊷ *${prefix}cecen*
┠⊷ *${prefix}cogan*
┠⊷ *${prefix}tumur* <nama>
┠⊷ *${prefix}mutual*
┠⊷ *${prefix}spamcall* <nomor>
┠⊷ *${prefix}spamsms* <nomor>
┠⊷ *${prefix}spamgmail* <gmail/email>
┠⊷ *${prefix}artinama* <nama>
┠⊷ *${prefix}brainly* <pertanyaan>
┠⊷ *${prefix}next*
┠⊷ *${prefix}mimpi* <nama mimpi>
┠⊷ *${prefix}tomp3* <merubah video menjadi audio>
┠⊷ *${prefix}tovideo* 
┠⊷ *${prefix}toimg* <merubah stiker menjadi gambar>
┠⊷ *${prefix}resepmasak*
┠⊷ *${prefix}rate* <text>
┠⊷ *${prefix}addbucin* <text>
┠⊷ *${prefix}gantengcek* <nana>
┠⊷ *${prefix}cantikcek* <nama>
┠⊷ *${prefix}kucing*
┠⊷ *${prefix}listbadword*
┠⊷ *${prefix}lizard*
┠⊷ *${prefix}lirik* <text>
┠⊷ *${prefix}igstalk* <username>
┠⊷ *${prefix}tiktokstalk* <username>
┗━━━━━━━━━━━━━━━━

╔•••═════════•••╗     
     〘 *PREM & DL* 〙
╚•••═════════•••╝
┠⊷ *${prefix}igdownload* <link foto/video>
┠⊷ *${prefix}fbdownload* <link video>
┠⊷ *${prefix}tiktokaudio* <link video>
┠⊷ *${prefix}ytmp3* <link video yt>
┠⊷ *${prefix}ytmp4* <link video yt>
┠⊷ *${prefix}ytplaymp3/ytplaymp4* <judul>
┠⊷ *${prefix}joox* <judul lagu>
┗━━━━━━━━━━━━━━━━

╔•••═════════•••╗     
      〘 *INFO BOT* 〙
╚•••═════════•••╝
┠⊷ *${prefix}info*
┠⊷ *${prefix}premiumlist*
┠⊷ *${prefix}owner*
┗━━━━━━━━━━━━━━━━

╔•••══════•••╗     
     〘 *GRUP* 〙
╚•••══════•••╝
┠⊷ *${prefix}tagme*
┠⊷ *${prefix}demote*
┠⊷ *${prefix}grup* buka/tutup
┠⊷ *${prefix}promote*
┠⊷ *${prefix}kick*
┠⊷ *${prefix}listadmin*
┠⊷ *${prefix}add*
┠⊷ *${prefix}tagall*
┠⊷ *${prefix}linkgc*
┠⊷ *${prefix}hapus*
┠⊷ *${prefix}setdesc*
┠⊷ *${prefix}setname*
┗━━━━━━━━━━━━━━━━

╔•••═══════•••╗     
     〘 *OWNER* 〙
╚•••═══════•••╝
┠⊷ *${prefix}bc*
┠⊷ *${prefix}ban*
┠⊷ *${prefix}unban*
┠⊷ *${prefix}setppbot*
┠⊷ *${prefix}unblock*
┠⊷ *${prefix}setprefix*
┠⊷ *${prefix}addbadword*
┠⊷ *${prefix}block*
┠⊷ *${prefix}addprem*
┠⊷ *${prefix}dellprem*
┠⊷ *${prefix}leave*
┠⊷ *${prefix}clearall*
┗━━━━━━━━━━━━━━━━

╔•••═══════•••╗     
      〘 *ON/OF* 〙
╚•••═══════•••╝
┠⊷ *${prefix}antilink* [1/0]
┠⊷ *${prefix}antivirtex* [1/0]
┠⊷ *${prefix}leveling* [enable/disable]
┠⊷ *${prefix}nsfw* <1/0>
┠⊷ *${prefix}nobadword* <enable/disable>
┠⊷ *${prefix}welcome* [1/0]
┠⊷ *${prefix}event* <1/0>
┗━━━━━━━━━━━━━━━━
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

*「 ANBOT-D 」*`, MessageType.text, {quoted: mek})
                    break
			
				  case 'sedekah':
            var wadidin = "0@s.whatsapp.net"
        var anbotdidin = "SEDEKAH ANBOT-D"
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
                    await reply(`minimal 10 user untuk bisa mengakses anBOT-D`)
                }
					break
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
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./ANBOT-D/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
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
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						didin.sendMessage(from,`PERINGATAN!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./ANBOT-D/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply(`untuk Mengaktifkan ketik ${prefix + command} 1 dan untuk Menonaktif ketik ${prefix + command} 0`)
					}
					break
					case 'owner': //case by Didin
					  uptime = process.uptime()
		const NTAHLAH = fs.readFileSync('./sticker/NTAHLAH');
                didin.sendMessage(from, NTAHLAH, MessageType.image, {quoted: mek, caption: `*Owner* : *Didin*\n*Nomor* : 085298595430\n*Chat* : wa.me/6285298595430\n\n*Ultah Owner* : ${ultah.data.result}`})
  
                 break
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
					didinnp = await getBuffer(me.imgUrl)
					didin.sendMessage(from, didinnp, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
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
anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
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
if (args.length < 1) return reply(`Contoh : ${prefix}tahta ANBOT-D`)
didinnp = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${body.slice(7)}&apikey=apivinz`)
didin.sendMessage(from, didinnp, image, {quoted: mek})
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
					didin.sendMessage(from, nye, image, { caption: '*YT = HADIR_HMM*', quoted: mek })
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
					didin.sendMessage(from, nye, image, { caption: 'YT = HADIR_HMM', quoted: mek })
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
						anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cogans?apikey=alpin1`, {method: 'get'})
       nye = await getBuffer(anu.result)
					didin.sendMessage(from, nye, image, { caption: 'GANTENG SEPERTI SAYA', quoted: mek })
					await limitAdd(sender)
					break
					case 'gaminglogo':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`Contoh *${prefix + command} Didin*`)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/gaming/logo?nama=${body.slice(12)}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, {quoted: mek, caption: 'YOUTUBE*_HADIR_HMM_*'})
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
                 didin.sendMessage(from, nekoo, image, {quoted: mek, caption: '*YT* = *HADIR_HMM*'})
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
                 didin.sendMessage(from, loliii, image, {quoted: mek, caption: '*YT* = *HADIR_HMM*'})
                 await limitAdd(sender)
				break
			case 'waifu':
				    try {
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = didinnp.from(response, 'base64');
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
						imageToBase64(res.data.url).then((response) => {var buf = didinnp.from(response, 'base64');
					didin.sendMessage(from, buf, image, {quoted: mek,caption: "ANBOT-D"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
         await limitAdd(sender) 
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
				        case 'sewabot':
				   sewa ='hay mau sewa ya, anda pikir saya apaan, main sewa aja, 10k perbulan+premuim + jadi pacar aku kyaaa'
				          didin.sendMessage(from, sewa, text, {quoted: mek})
				          break
					case 'watak':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
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
					teks = `Ciee cieee yang lagi jadian @${sayadin.jid.split('@')[0]} ️💜 @${diadin.jid.split('@')[0]} `
					hmmd.push(sayadin.jid)
					hmmd.push(diadin.jid)
					mentions(teks, hmmd, true)
					await limitAdd(sender)
					break
                case 'gantengcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					didin.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ewe':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
ganteng = body.slice(5)
					const ew =['TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN']
					const we = ew[Math.floor(Math.random() * ew.length)]
					didin.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
      case 'cantikcek':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					didin.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					await limitAdd(sender)
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
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					siapakah = body.slice(10)
					const sia =['Manusia','Monyet','Orang','Ikan','Babi','Buaya','Anjing','Hewan','Tumbuhan','Ayam','Kucing','Begal','Maling','Jambret','Polwan','Polisi','Nelayan','Pelaut','Tentara','Hacker','K-popers','Pemabuk','Wibu','Gay','Setan','Tukang Tambal Ban','Petani','Beban Keluarga','Beban Masyarakat','Beban Negara','Beban Dunia','Ahli Dunia','Ahli Akhirat','Ahli Dunia Dan Akhirat','Hafiz Al-Quran','Pembalap','Penyanyi','Rapper','Editor','Pro Epep','Pro Emel','Pemain Game','Youtuber','Kuli Jawa','Tkj : Teknik Komputer Jawa','Pembohong','Tukang Bucin']
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
					case 'sindiran': //tetep saya Didin
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
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/fakta?apikey=MNQYOVSL`)
				faktanya = `DIDIN FAKTA : ${anu.result}`
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
					didin.sendMessage(from, dogee, image, {quoted: mek, caption: '*YT = HADIR_HMM*'})
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
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			var media = await  didin.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
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
				data = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=7415bc4287ad5ca8`)
					if (data.result) return reply(data.result)
					hasil = `Punyamu : *${data.jawabanmu}*\nANBOT-D : *${data.jawabanbot}*\nHasil : *${data.hasil}*\nPoin : ${data.poin}`
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
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, Pertanyaan, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
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
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 300000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
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
					didin.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					didin.sendMessage(from, '_1 Menit lagi_…', text) // ur cods
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
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(10)}`, {method: 'get'})
										pin = JSON.parse(JSON.stringify(anu));
					hadirhmm =  pin[Math.floor(Math.random() * pin.length)];
					nye = await getBuffer(hadirhmm)
					didin.sendMessage(from, nye, image, { caption: 'DIDIN, SAYA DIDIN', quoted: mek })
					await limitAdd(sender)
					break
					case 'translate':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					  anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/translate?kata=${body.slice(11)}&apikey=alpin1`)
					  translatee = `Teks : ${anu.result.text}\nType : ${anu.result.typo}\nBahasa Dari : ${anu.result.from}\nTranslate Ke : ${anu.result.to}`
					  reply(translatee)
					  break
					case 'resepmasak':
if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} ayam bakar`)
					  anu = await fetchJson(`https://api.zeks.xyz/api/resep-masak?apikey=apivinz&q=${body.slice(12)}`)
					  masak = `Judul : ${anu.title}\nTingkat : ${anu.tingkat}\nDurasi : ${anu.duration}\nBanyak : ${anu.banyak}\n\nBahan : ${anu.bahan}\n\nCara : ${anu.cara}\n\nUntuk Gambarnya Nggak Gua Pasang Karna Puasa`
					  reply(masak)
					  break
					case 'katailham':
					 case 'ketikandidin':
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
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
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
					if (args.length < 1) return reply(ind.wrongf())
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					mgs = body.slice(11)
pub = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=HADIR_HMM&msg=${mgs}`)
didin.sendMessage(from, pub, image, {caption: 'PORNHUB COMMENT', quoted: mek})

					await limitAdd(sender)

					break
// awal serti menu
case 'tserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ini_tserti = body.slice(8)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/tolol?nama=${ini_tserti}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
				case 'ffserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				bodyy = body.slice(9)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/freefire?nama=${bodyy}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'ffserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ini_anu = body.slice(10)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/freefire2?nama=${ini_anu}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'mlserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ini_slice = body.slice(9)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/ml?nama=${ini_slice}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'mlserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ml_serti = body.slice(10)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/ml2?nama=${ml_serti}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'mlserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ml_serti3 = body.slice(10)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/ml3?nama=${ml_serti3}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'ffserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				ffsertii = body.slice(10)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/freefire3?nama=${ffsertii}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'pubgserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				pubg_sertii = body.slice(11)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/pubg?nama=${pubg_sertii}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
case 'pubgserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				pubg_sertii2 = body.slice(12)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/pubg2?nama=${pubg_sertii2}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
				case 'pubgserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`*Contoh ${prefix + command} ANBOT-D*`)
				pubg_sertii3 = body.slice(12)
				anu = await getBuffer(`https://alpin-api-2021.herokuapp.com/api/serti/pubg3?nama=${pubg_sertii3}&apikey=alpin1`)
				didin.sendMessage(from, anu, image, { quoted: mek, caption: 'YOUTUBE *_HADIR_HMM_*' })
				break
// akhir serti menu
                    case 'nulis':
         if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
				nuliss = body.slice(7)
				reply(ind.wait())
				didinnp = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nuliss}&apikey=${ZeksApi}`)
				didin.sendMessage(from, didinnp, image, {caption: '*_YT = HADIR_HMM_*', quoted: mek})
				await limitAdd(sender)
				break
					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply(`contoh ${prefix + command} ANBOT-D ON`)
					anu = await didin.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await didin.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							didin.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ANBOT-D 」*\n\n${body.slice(4)}`)
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
if (args.length < 1) return reply(`contoh ${prefix + command} Didin`)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebakumur?apiKey=${apiKey}&name=${body.slice(7)}`, {method: 'get'})
				result =	`Nama = ${anu.result.name}\nUmur = ${anu.result.age}`
					didin.sendMessage(from, result, text, {quoted: mek})
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
		fbdl = `${fbdl.result.url}`
		fbdlg = await getBuffer(fbdl)
		didin.sendMessage(from, fbdlg, video, {quoted: mek})
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
                    didinnp = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=${ZeksApi}&text=${textm}`)
                    didin.sendMessage(from, didinnp, image, { quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'leavest':
                      case 'logobp':
          if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
                    textm = args.join(" ")
                    didinnp = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${textm}&apikey=${ZeksApi}`)
                    didin.sendMessage(from, didinnp, image, { quoted: mek})
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
didin.sendMessage(from, dinb, image, {caption: 'SAYA DIDIN', quoted: mek})
await limitAdd(sender)
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
					porn = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${hub1}&text2=${hub2}&apikey=apivinz`)
					didin.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: mek})
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
                    if (args.length == 0) return reply(`Example: ${prefix + command} ANBOT-D`)
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
			didin.sendMessage(from, darkne, image, {quoted: mek, caption: 'DARKNEON'})
			await limitAdd(sender)
			break
			case 'woodblock':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}woodblock didin`)
		 didin120 = body.slice(11)
			din120 = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${didin120}`)
			didin.sendMessage(from, din120, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'paper':
			  if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(`Contoh: ${prefix}paper didin`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
			didin.sendMessage(from, glass, image, {quoted: mek, caption: 'INI'})
			await limitAdd(sender)
			break
			case 'ytmp3':
   case 'ytmp4':
if (!isPrem) return reply(ind.premium())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/uodAdkNAd10`)
                    query = body.slice(7)
                    didinnp = await fetchJson(`https://api.zeks.xyz/api/${command}?url=${query}&apikey=${ZeksApi}`)
                    didinnp = didinnp.result
                     dinn =`TITLE = ${didinnp.title}\nSIZE = ${didinnp.size}`
        gambary = await getBuffer(didinnp.thumbnail)
                    didin.sendMessage(from, gambary, image, { quoted: mek, caption: dinn })
      get_audio = await getBuffer(didinnp.url_audio)
                    didin.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${didinnp.title}.mp3`, quoted: mek})
         get_video = await getBuffer(didinnp.url_video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${didinnp.title}.mp4`, quoted: mek})
                    
                    break
      case 'igdownload':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CLTaUViskMB/`)
                    query = body.slice(12)
                    didinnp = await fetchJson(`https://videfikri.com/api/igdl/?url=${query}`)
                    didinnp = didinnp.result
                     dinn =`TITLE = ${didinnp.caption}\nType = ${didinnp.type_post}\nUsername : ${didinnp.username}\nFullname : ${didinnp.full_name}\nLike : ${didinnp.like}\nComment : ${didinnp.comment}\nDurasi : ${didinnp.duration}`
        gambary = await getBuffer(didinnp.thumb)
                    didin.sendMessage(from, gambary, image, { quoted: mek})
         get_video = await getBuffer(didinnp.video)
                    didin.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${didinnp.caption}.mp4`, quoted: mek})
                    
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
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(12)}`, {method: 'get'})
didinnp = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
stickerr = (anu.sticker)
didin.sendMessage(from, didinnp, image, {quoted: mek, caption: teks})
var tekss =  stickerr[Math.floor(Math.random() * stickerr.length)];
exec(`wget ${tekss} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('*EROR*')
						fs.unlinkSync(ranp)
						
						didinnp2 = fs.readFileSync(rano)
						costum(didinnp2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
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
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama`)
                  }
       if (budy.includes(`@6281999637234`)) {
                  reply(`Jangan Tag Didin, Dia Lagi Sibuk🗣`)
                  }

			 
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ANBOT-D]','aqua'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
			}

		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	}
starts()
	