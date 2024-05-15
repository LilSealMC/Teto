module.exports = {
    config: {
        name: "𝗼𝘄𝗻𝗲𝗿",
        aliases: ["owner"],
        version: "1.0",
        author: "CiL",
        countDown: 5,
        role: 0,
        shortDescription: "sends creator accounts",
        longDescription: "sends creator",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "^owner") return message.reply("𝗢𝘄𝗻𝗲𝗿\n────────\nMy creator is 𝗣𝗵𝗶𝗹 𝗶𝘀𝗙𝗶𝗻𝗲 aka 𝗖𝗶𝗟 he named me 𝗞𝗮𝘀𝗮𝗻𝗲 𝗧𝗲𝘁𝗼 Cause he really likes Vocaloids 𝗫𝗗\n────────\n𝗙𝗕 𝗟𝗶𝗻𝗸: https://www.facebook.com/zer.philip.9\n────────\n");
}
};