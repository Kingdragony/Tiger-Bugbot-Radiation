const axios = require('axios');
const cheerio = require('cheerio');
require("../../config");

module.exports = {
    type: 'convert',
    command: ['stt', 'styletext', 'stylize', 'textstyle'],
    operate: async (context) => {
        const { q: text, m, prefix, command, reply, reaction, sleep } = context;

        if (!text) {
            await reply(`Example: *${prefix + command} Jinx 2024 〽️*`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            await reaction(m.chat, "🔁");

            let respon = await axios.get(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(text)}`);
            let data = respon.data;

            let $ = cheerio.load(data);
            let results = [];

            $('table > tbody > tr').each(function () {
                let name = $(this).find('td:nth-child(1) > span').text();
                let result = $(this).find('td:nth-child(2)').text().trim();
                results.push({ name, result });
            });
            let penisRejaGede = results.map(r => `*${r.name}*: ${r.result}`).join('\n\n');
            await sleep(500);
            await reply(`Styled Texts:\n\n${penisRejaGede}`);
            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await reply('Failed to fetch styled texts. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};