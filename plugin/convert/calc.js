module.exports = {
    type: 'convert',
    command: ['calculate', 'calc', 'kalkulator'],
    operate: async (context) => {
        const { q: text, m, prefix, command, reply, reaction, sleep } = context;

        if (!text) {
            await reply(`*Example*: ${prefix + command} 12 + 34\n${prefix + command} 56 - 78\n${prefix + command} 9 × 8\n${prefix + command} 7 X 6\n${prefix + command} 24 ÷ 4`);
            await reaction(m.chat, "❗")
            return;
        }

        const operations = [
            { operator: '+', fn: (a, b) => a + b },
            { operator: '-', fn: (a, b) => a - b },
            { operator: /[×Xx]/, fn: (a, b) => a * b },
            { operator: '÷', fn: (a, b) => a / b }
        ];

        for (const { operator, fn } of operations) {
            const parts = text.split(operator);
            if (parts.length === 2) {
                const [nilai_one, nilai_two] = parts.map(Number);
                if (!isNaN(nilai_one) && !isNaN(nilai_two)) {
                    await reaction(m.chat, "🔁")
                    await sleep(1500)
                    await reply(`${fn(nilai_one, nilai_two)}`);
                    await reaction(m.chat, "✅")
                    return;
                }
            }
        }
    }
};
