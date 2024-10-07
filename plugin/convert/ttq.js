const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const bwipjs = require('bwip-js');
require("../../config");

module.exports = {
    type: 'convert',
    command: ['qrcode', 'barcode'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, sleep, reply } = context;

        if (!q) {
            await xreply(`Add input, Example: *${prefix + command} Hello World*`);
            await reaction(m.chat, "❗");
            return;
        }

        const outputFile = path.resolve(__dirname, `output.${command === 'qrcode' ? 'png' : 'svg'}`);

        if (command === 'qrcode') {
            try {
                await QRCode.toFile(outputFile, q, { type: 'png', errorCorrectionLevel: 'H' });
                await reaction(m.chat, "🔁");
                await sleep(1500);
                //await tdx.sendImageAsSticker(m.chat, fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author });
                await sam.sendMessage(m.chat, { image: fs.readFileSync(outputFile) }, { quoted: m });
                await reaction(m.chat, "✅");
                fs.unlinkSync(outputFile);
            } catch (err) {
                console.error('Error generating QR code:', err);
                await xreply('Failed to generate QR code. Please try again later.');
                await reaction(m.chat, "❌");
            }
        } else if (command === 'barcode') {
            try {
                await new Promise((resolve, reject) => {
                    bwipjs.toBuffer({
                        bcid: 'code128',       // Barcode type
                        text: q,               // Text to encode
                        scale: 3,              // 3x scaling factor
                        height: 10,            // Bar height, in millimeters
                        includetext: true,     // Show human-readable text
                        textxalign: 'center',  // Center text
                    }, function (err, png) {
                        if (err) {
                            reject(err);
                        } else {
                            fs.writeFileSync(outputFile, png);
                            resolve();
                        }
                    });
                });
                await reaction(m.chat, "🔁");
                await sleep(1500);
                //await tdx.sendImageAsSticker(m.chat, fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author });
                await sam.sendMessage(m.chat, { image: fs.readFileSync(outputFile) }, { quoted: m });
                await reaction(m.chat, "✅");
                fs.unlinkSync(outputFile);
            } catch (err) {
                console.error('Error generating barcode:', err);
                await reply('Failed to generate barcode. Please try again later.');
                await reaction(m.chat, "❌");
            }
        }
    }
};