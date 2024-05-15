module.exports = {
	config: {
		name: "botsay",
		version: "1.0",
		author: "CiL",
    countDown: 5,
		role: 0,
		category: "text",
    shortDescription: "make bot say something",
		guide: {
			vi: "Not Available",
			en: "botsays + (Message You Want To Get)"
		} 
	},

	onStart: async function ({ api, args, event }) {
	var say = args.join(" ")
	if (!say) api.sendMessage("Please enter a message", event.threadID, event.messageID)
	else api.sendMessage(`${say}\n\n-重音テト`, event.threadID, event.messageID);
  }
  
};