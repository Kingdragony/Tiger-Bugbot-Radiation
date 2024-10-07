const axios = require('axios');
const { generateWAMessageContent } = require("@whiskeysockets/baileys")

module.exports = {
  type: 'convert',
  command: ['pinterest', 'pint'],
  operate: async (context) => {
    const { q: text, tdx, m, prefix, command, xreply, reaction, sleep, crtImg } = context;

    if (!text) {
      await xreply(`Add input, Example: *${prefix + command} nature*`);
      await reaction(m.chat, "❗");
      return;
    }

    try {
      await reaction(m.chat, "🔁");
      await sleep(500);

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
      let res = data.resource_response.data.results.map(v => v.images.orig.url);

      shuffleArray(res); // Randomize array
      let ult = res.splice(0, 5); // Takes the first 5 images from a randomized array
      let push = [];
      let i = 1;

      for (let imageUrl of ult) {
        const imageMessage = await crtImg(imageUrl);
        push.push({
          body: {
            text: `_*Here is the result of: ${text}*_`
          },
          footer: {
            text: '© Spider Client - #Last Version'
          },
          header: {
            title: `Image - ${i++}`,
            hasMediaAttachment: true,
            imageMessage: imageMessage
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
              }
            ]
          }
        });
      }

      // End - Send Carousel
      await tdx.relayMessage(m.chat, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: '*Here are your Pinterest results :*'
              },
              footer: {
                text: '© Spider Client - #Last Version'
              },
              header: {
                hasMediaAttachment: false
              },
              carouselMessage: {
                cards: push
              }
            }
          }
        }
      }, {});
      await reaction(m.chat, "✅");

    } catch (error) {
      console.error('Error:', error);
      await xreply('Failed to fetch Pinterest images. Please try again later.');
      await reaction(m.chat, "❌");
    }
  }
};
