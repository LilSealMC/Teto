module.exports = {
    config: {
        name: "𝗳𝗮𝗾",
        aliases: ["faq"],
        version: "1.0",
        author: "CiL",
        countDown: 5,
        role: 0,
        shortDescription: "frequently asked questions",
        longDescription: "frequently asked questions",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "^faq") return message.reply("𝗙𝗔𝗤\n────────\n𝗤1:\nAre you a bot?\n\n𝗔𝗻𝘀𝘄𝗲𝗿: Yes indeed i am\n────────\n𝗤2:\nWho is your creator?\n\n𝗔𝗻𝘀𝘄𝗲𝗿: My creator is Phil Isfine aka CiL\n────────\n𝗤3:\nWhat is the most popular commands?\n\n𝗔𝗻𝘀𝘄𝗲𝗿: My most popular commands are:\n^sim\n^ask\n^gpt\n^pair\n^imgsearch\netc.\n────────\n𝗤4:\nHow to make a bot\n\n𝗔𝗻𝘀𝘄𝗲𝗿: You can fork from popular bot files like mirai, goatbot, alice, yukihira, etc.\n────────\n𝗛𝗮𝘃𝗲 𝗮 𝗻𝗶𝗰𝗲 𝗱𝗮𝘆\n────────\n");
}
};