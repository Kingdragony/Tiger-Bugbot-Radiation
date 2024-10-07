require("../../config");

module.exports = {
    type: 'convert',
    command: ['attp'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, reply } = context;

        if (!q) {
            await p0reply(`Add input, Example: *${prefix + command} King Sam*`);
            await reaction(m.chat, "❗");
            return;
        }

        try {
            const jiny = `https://widipe.com/attp?text=${encodeURIComponent(q)}`;

            await reaction(m.chat, "🔁");
            await sam.sendVideoAsSticker(m.chat, jiny, m, {
                packname: global.packname,
                author: global.author
            });

            await reaction(m.chat, "🦄");
        } catch (error) {
            console.error('Error:', error);
            await reply('Failed to generate meme. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};