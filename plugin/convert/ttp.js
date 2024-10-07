const fs = require('fs');
const path = require('path');
//const text2png = require('text2png');
require("../../config");

module.exports = {
    type: 'convert',
    command: ['ttp', 'text2png'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, sleep, reply } = context;
        
        console.log("modul eror :v, text2png")
        
      if (!q) {
            await reply(`Add input, Example: *${prefix + command} Hello World|50*`);
            await reaction(m.chat, "🦄");
            return;
        }
        
        let [myText, ...params] = q.split("|");
        let fontSize = params.join("|");

        if (!myText || !fontSize) {
            await reply(`Invalid input. Ensure you have both text and font size separated by '|'. Example: *${prefix + command} Hello World|50*`);
            await reaction(m.chat, "🪄");
            return;
        }
        
        let outputFile = 'output.png';
        let fontPath = path.resolve(__dirname, '../../derived/roboto-negro.ttf');
        
        fs.writeFileSync(outputFile, text2png(myText, {
            font: `${fontSize}px 'roboto-bold'`,
            localFontPath: fontPath,
            localFontName: 'roboto-bold',
            color: 'white',
            backgroundColor: 'transparent',
            lineSpacing: 10,
            padding: 20
        }));
        
        await reaction(m.chat, "🪄");
        await sleep(1500);
        await tdx.sendImageAsSticker(m.chat, fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author });
        await reaction(m.chat, "🦄");
    }
};
