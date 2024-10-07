const fetch = require('node-fetch');
require("../../config");

module.exports = {
    type: 'download',
    command: ['mediafire', 'mfdl', 'mdf'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, reply } = context;

        if (!q) {
            await reply(`Add input, Example: *${prefix + command} https://www.mediafire.com/file/example*`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            await reaction(m.chat, "⬇️");

            let respon = await fetch(`https://widipe.com/mediafire?link=${q}`);
            let anu = await respon.json();

            let hasdl = anu.result.link;
            let namafile = anu.result.title;

            await sam.sendMessage(m.chat, { 
                document: { url: hasdl }, 
                fileName: namafile, 
                mimetype: '*/*' 
            }, { quoted: m });

            await reaction(m.chat, "🦄");
        } catch (error) {
            console.error('Error:', error);
            await xreply('Failed to download from Mediafire. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};