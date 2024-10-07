const fs = require("fs");
require("../../config");

module.exports = {
    type: 'convert',
    command: ['s', 'sticker', 'tosticker'],
    operate: async (context) => {
        const { sam, m, prefix, command, quoted, reaction, mime, reply } = context;
        
        if (!m.quoted) {
            await reaction(m.chat, "❗");
            await reply(`Send a picture or video, then reply with "${prefix + command}". Durasi video maksimal 10 detik.`);
            return;
        }

        if (/image/.test(mime)) {
            await reaction(m.chat, "🪄");
            try {
                let media = await quoted.download();
                let encmedia = await sam.sendImageAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.promises.unlink(encmedia);
            } catch (error) {
                console.error(error);
                await reaction(m.chat, "❗");
                await xreply("An error occurred while processing the image.");
            }
        } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 10) {
                await reaction(m.chat, "❗");
                await xreply("The video is too long to be used as a sticker. Maximum duration is 10 seconds.");
                return;
            }
            try {
                let media = await quoted.download();
                await reaction(m.chat, "🪄");
                let encmedia = await sam.sendVideoAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.promises.unlink(encmedia);
            } catch (error) {
                console.error(error);
                await reaction(m.chat, "❗");
                await reply("An error occurred while processing the video.");
            }
        } else {
            await reaction(m.chat, "❗");
            await reply(`Send a picture or video, then reply withn "${prefix + command}". Maximum video duration is 10 seconds.`);
        }
    }
};