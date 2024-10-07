const axios = require("axios");
const { G4F } = require("g4f");
let g4f = new G4F();
require("../../config");

module.exports = {
    type: 'openai',
    command: ['jinx-ai'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reply } = context;
        if (!q) return xreply(`*Example*:\n${prefix + command} Hello Jinx?`);
        
        async function chat(prompt) {
            const messages = [
                { role: "system", content: `you are jinx ai` },
                { role: "assistant", content: `Hello Im Jinx-Ai the most powerful ai.` },
                { role: "user", content: prompt }
            ];
            let res = await g4f.chatCompletion(messages);
            return res;
        }

        try {
            await m.reply(mess.wait);
            let response = await chat(q);
            await sam.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    externalAdReply: {
                        title: "Jinx - 2024",
                        body: "By-𝕶𝖎𝖓𝖌 𝕾𝖆𝖒",
                        thumbnailUrl: 'https://telegra.ph/file/dc9d3bdc97bb45d2d8a53.jpg',
                        thumbnail: { url: 'https://telegra.ph/file/dc9d3bdc97bb45d2d8a53.jpg' },
                        sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                        previewType: "VIDEO",
                        showAdAttribution: true,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (error) {
            console.error(error);
            await m.reply("An error occurred while processing your request.");
        }
    }
};
