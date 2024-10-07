const fetch = require('node-fetch');

module.exports = {
    type: 'download',
    command: ['igdl', 'ig'],
    operate: async (context) => {
        const { q, sam, m, reply, reaction, crtImg, crtVid } = context;

        if (!q) {
            await reply('Put URL Instagram. Contoh: *!igdl https://www.instagram.com/p/C9C0ry2pZn8/*');
            await reaction(m.chat, '❗');
            return;
        }

        try {
            await reaction(m.chat, '⬇️');
            let pler = await fetch(`https://widipe.com/download/igdl?url=${q}`);
            let { result: biji } = await pler.json();

            if (!biji.length) {
                await reply('No media found.');
                await reaction(m.chat, '❌');
                return;
            }

            let setH = new Set()
            let images = [];
            let videos = [];

            for (let item of biji) {
                if (setH.has(item.url)) continue;
                setH.add(item.url);
                let file = await tdx.getFile(item.url, true);
                if (file.mime === "image/jpeg") {
                    images.push(item.url);
                } else if (file.mime === "video/mp4") {
                    videos.push(item.url);
                }
            }

            for (let i = 0; i < images.length; i += 10) {
                let imageCards = [];
                for (let j = i; j < Math.min(i + 10, images.length); j++) {
                    let media = await crtImg(images[j]);
                    imageCards.push({
                        body: { text: `Image ${j + 1}` },
                        footer: { text: "© Jinx - 2024" },
                        header: { hasMediaAttachment: true, imageMessage: media },
                        nativeFlowMessage: {
                            buttons: [{
                                name: "cta_url",
                                buttonParamsJson: `{"display_text":"Source","url":"${images[j]}","merchant_url":"${images[j]}"}`
                            }]
                        }
                    });
                }

                await sam.relayMessage(m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: "Results from IG slide" },
                                footer: { text: "© Jinx - 2024" },
                                carouselMessage: { cards: imageCards }
                            }
                        }
                    }
                }, {});
            }

            for (let url of videos) {
                await sam.sendMessage(m.chat, {
                    video: { url },
                    caption: '© Jinx - 2024'
                }, { quoted: m });
            }

            await reaction(m.chat, '✅');
        } catch (error) {
            console.error('Error:', error);
            await reply('Failed to download media from Instagram. Please try again later');
            await reaction(m.chat, '❌');
        }
    }
};