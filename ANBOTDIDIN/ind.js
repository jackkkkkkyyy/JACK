exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}


exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.premium = () => {
  return`*MAAF, FITUR INI HANYA BISA DI GUNAKAN JIKA KAMU SUDAH PREMIUM. JIKA KAMU INGIN PREMIUM, CHAT OWNER BOT*`
}
exports.noregis = () => {
	return`*「 MAAF 」 kamu belom terdaftar di JACK-BOT, daftar dulu untuk menggunakan JACK-BOT, cara daftar ${prefix}daftar*`
}

exports.rediregis = () => {
	return`*「 TERDAFTAR 」*\n\n*kamu sudah terdaftar di JACK-BOT*`
}

exports.stikga = () => {
	return`*「 GAGAL 」*`
}

exports.linkga = () => {
	return`*「 MAAF LINK TIDAK VALID 」 *`
}

exports.groupo = () => {
	return`*「 GROUP ONLY 」*`
}

exports.ownerb = () => {
	return`*「 OWNER BOT ONLY 」*`
}

exports.ownerg = () => {
	return`*「 OWNER GROUP ONLY 」*`
}

exports.admin = () => {
	return`*「 ADMIN GROUP ONLY 」*`
}

exports.badmin = () => {
	return`*「 BOT HARUS JADI ADMIN 」*`
}

exports.nsfwoff = () => {
	return`*「 NSFW BELUM AKTIF 」*`
}

exports.bug = () => {
	return`*「 BERHASIL 」 Masalah telah di laporkan ke owner ANBOT-D, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「 FORMAT SALAH ATAU TEXT KOSONG 」*`
}

exports.clears = () => {
	return`*「 SUKSES 」clear all*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER 」*\n\n*WELCOME TO MY BOT*\n\n➣ *NAMA :* *${namaUser}*\n\n➣ *Nomor :* wa.me/${sender.split("@")[0]}\n\n➣ *Umur* : *${umurUser}*\n\n➣ *Waktu* : ${time}\n\n➣ *Kode*: ${serialUser}\n\n*YOUR WELCOME BROTHER/SISTER*\n\n*JANGAN LUPA UNTUK MELIHAT RUSELNYA DENGAN CARA [${prefix}rules]*\n\n۞۩۞۩۩۞۩۩۞۩۩۞۩۩۞
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
╔══╦╗────╔╗─╔╗╔╗
╚╗╔╣╚╦═╦═╣╚╗║╚╝╠═╦╦╗
─║║║║║╬║║║╩║╚╗╔╣║║║║
─╚╝╚╩╩╩╩╩╩╩╝─╚╝╚═╩═╝
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
●▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬●
۞۩۞۩۩۞۩۩۞۩۩۞۩۩۞`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 LEVEL UP 」*
┏➳ *Nama* : ${pushname}
┣➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣➳ *Xp* : ${getLevelingXp(sender)}
┗➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 exports.banned = (pushname) => {
   return`*「 MAAF ${pushname} 」 KAMU SUDAH TERBANNED*`
 }
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 00:00, anda bisa ${prefix}buylimit untuk menambah limit*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣➳ *Nama* : ${pushname}\n┣➳ *Nomer* : ${sender.split("@")[0]}\n┣➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
