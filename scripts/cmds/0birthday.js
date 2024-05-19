module.exports = {
	config: {
		name: "𝗯𝗶𝗿𝘁𝗵𝗱𝗮𝘆",
		version: "1.0",
		author: "CiL",
    aliases: ["birthday"],
		countDown: 5,
		role: 0,
		category: "dates",
    shortDescription: "See Teto's birthday",
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

    return api.sendMessage(`𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆\n────────\nRemaining days for TwinDrill to celebrate Teto's birthday\n────────\n•𝗗𝗮𝘆𝘀: ${days}\n•𝗛𝗼𝘂𝗿𝘀: ${hours}\n•𝗠𝗶𝗻𝘂𝘁𝗲𝘀: ${minutes}\n•𝗦𝗲𝗰𝗼𝗻𝗱: ${seconds}\n────────\n`, event.threadID, event.messageID);
	}
};