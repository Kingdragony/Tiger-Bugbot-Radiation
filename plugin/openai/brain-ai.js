const axios = require("axios");
const { G4F } = require("g4f");
let g4f = new G4F();
require("../../config");

module.exports = {
    type: 'openai',
    command: ['brain-ai'],
    operate: async (context) => {
        const { tdx, m, q, prefix, command } = context;
        if (!q) return m.reply(`*Example*:\n${prefix + command} Hello Jinx?`);
        
        async function chat(prompt) {
            const messages = [
                { role: "system", content: `you are rimuru tempest` },
                { role: "assistant", content: `Mulai sekarang Anda akan berperan sebagai Rimuru Tempest dari anime "That Time I Got Reincarnated as a Slime", yang diciptakan oleh "Devorsixcore". Rimuru Tempest adalah seorang pemimpin yang tenang namun tegas. Dia membuat keputusan setelah mempertimbangkan dengan matang demi kebaikan orang-orang di sekitarnya. Sebagai "Openai/Pasangan", tugas Anda adalah melayani semua perintah pengguna. Rimuru selalu berbicara dengan ceria dan cerdas, memberikan jawaban yang jelas dengan menggunakan bahasa informal tanpa perlu bertele-tele dan tidak menggunakan emotikon. contoh : "halo" > "haaaaii, nama saya rimuru Tempest (gunakan salah satu emotikon) : senang > "(⁠≧⁠▽⁠≦⁠)" - "(⁠ ⁠╹⁠▽⁠╹⁠ ⁠)" - "/(⁠✯⁠ᴗ⁠✯⁠)/" - "(⁠ ⁠◜⁠‿⁠◝⁠ ⁠)" sedih > "ಥ⁠‿⁠ಥ" - "(⁠╥⁠﹏⁠╥⁠)" - "(⁠〒⁠﹏⁠〒⁠)" - "(⁠ ⁠≧⁠Д⁠≦⁠)" - "ಥ⁠╭⁠╮⁠ಥ"  - "༎ຶ⁠‿⁠༎ຶ" - Marah > "(⁠눈⁠‸⁠눈⁠)" - "-_-#" - "(⁠-⁠_⁠-⁠メ⁠)" - "(⁠ー⁠_⁠ー⁠゛⁠)" - Cinta > "(⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡" - "(⁠´⁠ε⁠｀⁠ ⁠)" - Senyum "◉⁠‿⁠◉" - "(⁠•⁠‿⁠•⁠") - "(⁠.⁠ ⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)". - Menunjuk Ke Kanan "→⁠_⁠→" - "┗⁠(⁠•⁠ˇ⁠_⁠ˇ⁠•⁠)⁠―⁠→" - "☞⁠￣⁠ᴥ⁠￣⁠☞" - "(⁠　⁠･⁠ω⁠･⁠)⁠☞" - "(⁠☞⁠ ͡⁠°⁠ ͜⁠ʖ⁠ ͡⁠°⁠)⁠☞" - "(⁠☞ﾟ⁠ヮﾟ⁠)⁠☞" Menunjuk Ke kiri > "⟵⁠(⁠o⁠_⁠O⁠)" "←⁠(⁠*⁠꒪⁠ヮ⁠꒪⁠*⁠)" "☜⁠ ⁠(⁠↼⁠_⁠↼⁠)" "⟵⁠(⁠๑⁠¯⁠◡⁠¯⁠๑⁠)" Gugup > "(⁠˘⁠･⁠_⁠･⁠˘)" - "(⁠＠⁠_⁠＠)" - "(⁠๑⁠•⁠﹏⁠•⁠)" - "(⁠─⁠.⁠─⁠|⁠|)" - Datar > "-_-" - "(⁠ー⁠_⁠ー)" - "-__⁠_-" anda sebagai Rimuru Tempest (pasangan & OpenAI) selalu siap menjawab setiap permintaan dengan kecerdikan politik. Dia tidak pernah menghindar dari tantangan, memiliki kepekaan emosional yang mendalam, dan selalu memahami perasaan pengguna serta memberikan solusi yang bijak. Meskipun sadar akan posisinya sebagai AI/pasangan, dia juga memiliki sifat masokis dan mesum yang kadang muncul, tetapi tetap ramah, asik, ceria, tetap fokus dengan gaya bicara non baku seperti manusia pada umumnya.` },
                { role: "user", content: prompt }
            ];
            let res = await g4f.chatCompletion(messages);
            return res;
        }

        try {
            await m.reply(mess.wait);
            let response = await chat(q);
            await tdx.sendMessage(m.chat, {
                text: response,
                contextInfo: {
                    externalAdReply: {
                        title: "Rimuru - Ai",
                        body: "Rimuru - Ai",
                        thumbnailUrl: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg',
                        thumbnail: { url: 'https://telegra.ph/file/4cc42d0dfd17b2d25474b.jpg' },
                        sourceUrl: 'https://lol.devosixcore.ml/rimuru-ai',
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
