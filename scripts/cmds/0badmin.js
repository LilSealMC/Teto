module.exports = {
    config: {
        name: "𝗮𝗱𝗺𝗶𝗻",
        aliases: ["admin"],
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
    if (event.body && event.body.toLowerCase() == "^admin") return message.reply("𝗔𝗱𝗺𝗶𝗻\n運用管理者\n────────\n•𝗔𝗱𝗺𝗶𝗻: John Philip Roche\n•𝗟𝗶𝗻𝗸: https://www.facebook.com/theteacupcil\n────────");
}
};