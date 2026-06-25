const axios = require("axios");

module.exports = {
	config: {
		name: "logs",
		aliases: ["log"],
		version: "1.2",
		author: "CRIMSON 🖇️🩵🪽",
		countDown: 5,
		role: 2,
		description: {
			fr: "Voir les logs du bot",
			en: "View bot logs"
		},
		category: "owner",
		guide: {
			fr: "{pn}",
			en: "{pn}"
		}
	},

	onStart: async function ({ message }) {

		const medias = [
			"https://i.ibb.co/fVTYwSfZ/540928151-1246878020785337-8504017987248964804-n-gif-nc-cat-109-ccb-1-7-nc-sid-cf94fc-nc-eui2-Ae-H.gif",

			"https://i.ibb.co/tMzQPfSG/467104543-1609427259673042-7413638891178667400-n-gif-nc-cat-109-ccb-1-7-nc-sid-cf94fc-nc-eui2-Ae-G.gif",

			"https://i.ibb.co/Gf6ypdL4/727772935-1720489612312497-5487289645901081968-n-jpg-stp-dst-jpg-s480x480-tt6-nc-cat-101-ccb-1-7-n.jpg"
		];


		const media = await axios.get(
			medias[Math.floor(Math.random() * medias.length)],
			{
				responseType: "stream"
			}
		);


		const date = new Date();


		message.reply({

			body: `╭━━━━━━〔 🌸 𝐊𝐈𝐓𝐀𝐆𝐀𝐖𝐀 〕━━━━━━╮
┃
┃ 📜 𝐁𝐎𝐓 𝐋𝐎𝐆𝐒
┃
┣━━━━━━━━━━━━━━
┃
┃ 🟢 Status : Online
┃ 🕒 Heure : ${date.toLocaleTimeString()}
┃ 📅 Date : ${date.toLocaleDateString()}
┃
┣━━━━━━━━━━━━━━
┃
┃ 🤖 Système : Actif
┃ ⚡ Erreur : Aucune détectée
┃
╰━━━━━━━━━━━━━━╯

🖇️ 𝐂𝐑𝐈𝐌𝐒𝐎𝐍 🩵🪽`,

			attachment: media.data

		});

	}
};
