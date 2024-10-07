const axios = require('axios');
const util = require('util');

require("../../config");

module.exports = {
	type: 'tools',
	command: ['get'],
	operate: async (context) => {
		const {
			tdx,
			m,
			q: text,
			prefix,
			command,
			xreply
		} = context;

		if (!q) return xreply(`Add Input (Link)\n\n*Example : ${prefix+command} https://bokep.com*`);

         
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }

		try {
			const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
			if (!/json|html|plain/.test(res.headers['content-type'])) {
				await xreply(text)
			} else {
				xreply(util.format(res.data))
			}
		} catch (e) {
			xreply(util.format(e))
		}
	}
};
