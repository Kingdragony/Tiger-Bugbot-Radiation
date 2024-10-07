const fs = require('fs');
const gtts = require('node-gtts');
require("../../config");

module.exports = {
    type: 'convert',
    command: ['tts', 'texttospeech'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, sleep, reply } = context;
        
        if (!q) {
            await reply(`Add input, Example: *${prefix + command} Hello World|en*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let [myText, lang] = q.split("|");
        
        if (!myText || !lang) {
            await xreply(`Invalid input. Ensure you have both text and language code separated by '|'. Example: *${prefix + command} Hello World|en*`);
            await reaction(m.chat, "❗");
            return;
        }

        let outputFile = 'output.mp3';

        let tts = (text, lang) => {
            return new Promise((resolve, reject) => {
                gtts(lang)
                    .stream(text)
                    .pipe(fs.createWriteStream(outputFile))
                    .on('finish', () => {
                        console.log('Text to speech conversion complete.');
                        resolve(outputFile);
                    })
                    .on('error', (err) => reject(err));
            });
        };

        try {
            await tts(myText, lang);
            await sam.sendMessage(m.chat, { audio: fs.readFileSync(outputFile), ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await m.reply('Failed to convert text to speech. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};