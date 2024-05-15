module.exports = {
	config: {
		name: "𝗮𝗻𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗿𝘆",
		version: "1.0",
		author: "CiL",
    aliases: ["anniversary"],
		countDown: 5,
		role: 0,
		category: "dates",
    shortDescription: "See Teto's anniversary",
		longDescription: "",
		guide: {
			vi: "{p}{n}",
			en: "{p}{n}"
		} 
	},
  
	onStart: async function ({ event, api }) {
		const t = Date.parse("april 1, 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`𝗔𝗻𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗿𝘆\n────────\nRemaining days for Crypton Media to celebrate Teto's anniversary\n────────\n𝗗𝗮𝘆𝘀: ${days}\n𝗛𝗼𝘂𝗿𝘀: ${hours}\n𝗠𝗶𝗻𝘂𝘁𝗲𝘀: ${minutes}\n𝗦𝗲𝗰𝗼𝗻𝗱: ${seconds}\n────────\n`, event.threadID, event.messageID);
	}
};