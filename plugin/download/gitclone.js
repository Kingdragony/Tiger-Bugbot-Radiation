const axios = require('axios');
require('../../config');

module.exports = {
    type: 'download',
    command: ['gitclone', 'ghdown', 'githubdown', 'ghdl'],
    operate: async (context) => {
        const { sam, m, q, prefix, command, reaction, reply, sleep } = context;

        if (!q) {
            await reply(`Add input, Example: *${prefix + command} https://github.com/user/repo*`);
            await reaction(m.chat, "❗");
            return;
        }

        let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
        let [, user, repo] = q.match(regex1) || [];

        if (!user || !repo) {
            await reply('Invalid GitHub URL. Please provide a valid repository URL.');
            await reaction(m.chat, "❗");
            return;
        }

        repo = repo.replace(/.git$/, '');
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`;

        try {
            await reaction(m.chat, "⬇️");
            await sleep(1500);

            let headResponse = await axios.head(url);
            let pornVideo = headResponse.headers['content-disposition'];
            let filename = pornVideo.match(/attachment; filename=(.*)/)[1];

            await sam.sendMessage(m.chat, {
                document: { url: url },
                fileName: filename + '.zip',
                mimetype: 'application/zip'
            }, { quoted: m });

            await reaction(m.chat, ",🦄");
        } catch (error) {
            console.error('Error:', error);
            await reply('Failed to download the GitHub repository. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
};
