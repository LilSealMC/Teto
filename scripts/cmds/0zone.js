module.exports = {
    config: {
        name: "𝘇𝗼𝗻𝗲",
        aliases: ["zone"],
        version: "1.0",
        author: "CiL",
        countDown: 5,
        role: 0,
        shortDescription: "join Teto Zone",
        longDescription: "TETO TERRITORY",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "^zone") return message.reply("𝗧𝗲𝘁𝗼 𝗭𝗼𝗻𝗲\n────────\nPlss join we have 𝗽𝗶𝘇𝘇𝗮ಥ_ಥ:\nhttps://m.me/ch/Abam8wQq8qyhUJo6/\n────────\n");
}
};