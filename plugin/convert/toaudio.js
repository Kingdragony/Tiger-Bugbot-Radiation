const fs = require('fs');
const { exec } = require('child_process');
require("../../config");

module.exports = {
    type: 'convert',
    command: ['tomp3', 'toaudio'],
    operate: async (context) => {
        const { sam, m, prefix, command, qmsg, reaction, xreply, sleep, getRandom, mime } = context;

        if (!/video/.test(mime) && !/audio/.test(mime)) {
            await reply(`Reply to a video message with the command ${prefix+command} to convert it to audio.`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            await reaction(m.chat, "🪄");
            let media = await sam.downloadAndSaveMediaMessage(m.quoted);
            let audioPath = getRandom('.opus');

            exec(`ffmpeg -i ${media} -vn -c:a libopus -b:a 128k -vbr on -compression_level 10 ${audioPath}`, async (err) => {
                fs.unlinkSync(media);
                if (err) {
                    console.error('Error converting video to audio:', err);
                    await xreply('Failed to convert video to audio. Please try again later.');
                    await reaction(m.chat, "💔");
                    return;
                }

                let audio = fs.readFileSync(audioPath);
                await sleep(1500);
                await tdx.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                });
                await reaction(m.chat, "🦄");
                fs.unlinkSync(audioPath);
            });
        } catch (error) {
            console.error('Error processing video message:', error);
            await xreply('Failed to process video message. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};