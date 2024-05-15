module.exports = {
    config: {
        name: "𝗶𝗻𝘁𝗿𝗼",
        aliases: ["intro"],
        version: "1.0",
        author: "CiL",
        countDown: 5,
        role: 0,
        shortDescription: "introduction",
        longDescription: "introduction",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "^intro") return message.reply("𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻\n────────\nHi im 𝗞𝗮𝘀𝗮𝗻𝗲 𝗧𝗲𝘁𝗼, Im a Chatbot Created by 𝗣𝗵𝗶𝗹 𝗜𝘀𝗳𝗶𝗻𝗲 aka 𝗖𝗶𝗟\n────────\nCurrently, 𝗞𝗮𝘀𝗮𝗻𝗲 𝗧𝗲𝘁𝗼 has 100+ 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 that can be use\n𝗠𝗼𝘀𝘁 𝗽𝗼𝗽𝘂𝗹𝗮𝗿 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗮𝗿𝗲:\n^sim\n^gpt\n^pair\n^ask\n^imgsearch\n^animeme\n^anime\n^rps\n^ytsearch\n^lyrics\n────────\nI hope you had fun using 𝗞𝗮𝘀𝗮𝗻𝗲 𝗧𝗲𝘁𝗼 and please consider joining in our 𝗧𝗘𝗧𝗢 𝗭𝗢𝗡𝗘:\nhttps://m.me/ch/Abam8wQq8qyhUJo6/\n────────\n𝗛𝗮𝘃𝗲 𝗮 𝗻𝗶𝗰𝗲 𝗱𝗮𝘆\n────────");
}
};