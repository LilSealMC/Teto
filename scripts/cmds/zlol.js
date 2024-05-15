module.exports = {
    config: {
        name: "lol",
        version: "1.0",
        author: "CiL",
        countDown: 5,
        role: 0,
        shortDescription: "",
        longDescription: "",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "lol") return message.reply("XD");
}
};