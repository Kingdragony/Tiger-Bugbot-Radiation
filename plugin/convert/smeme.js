require("../../config");

module.exports = {
    type: 'convert',
    command: ['smeme'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, sleep, reply, toTelegra, quoted } = context;
        
        if (!m.quoted || !/image/.test(mime)) {
            await reply(`Reply to a sticker with caption *${prefix + command}*`);
            return;
        }

        if (!q) {
            await reply(`Add input, Example: *${prefix + command} king*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let [peenis, pepekk = " "] = q.split("|");

/*        if (!peenis || !pepekk) {
            await xreply(`Invalid input. Ensure you have both top and bottom text separated by '|'. Example: *${prefix + command} teks atas|teks bawah*`);
            await reaction(m.chat, "❗");
            return;
        }*/
        

        try {
            let dwnld = await sam.downloadAndSaveMediaMessage(quoted);
            let Bjirka = await toTelegra(dwnld);
            let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(peenis)}/${encodeURIComponent(pepekk)}.png?background=${Bjirka}`;

            await reaction(m.chat, "🪄");
            await tdx.sendImageAsSticker(m.chat, smeme, m, {
                packname: global.packname,
                author: global.author
            });

            await reaction(m.chat, "🦄");
        } catch (error) {
            console.error('Error:', error);
            await xreply('Failed to generate meme. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};