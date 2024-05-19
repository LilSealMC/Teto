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
    if (event.body && event.body.toLowerCase() == "^faq") return message.reply("𝗙𝗿𝗲𝗾𝘂𝗲𝗻𝘁𝗹𝘆 𝗮𝘀𝗸𝗲𝗱 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀\nエフエーキュー\n────────\nHere are some frequently asked questions about my admin\n────────\n•𝗤1. What is your name?\n•𝗔𝗻𝘀: My name is John Philip Roche but you can just call me Phil\n────────\n•𝗤2. How old are you?\n•𝗔𝗻𝘀: I cant actually tell you my age because of privacy reasons but i can tell my birthday instead which is Dec 15\n────────\n•𝗤3. What are your hobbies?\n•𝗔𝗻𝘀: I like writting poems, doing arts, writting/reading novels, and watching anime\n────────\n•𝗤4. What is your favorite anime?\n•𝗔𝗻𝘀: I like mostly SOL and Psychological animes, so if you ask me my top 3 animes are Neon Genesis Evangelion, Mahou Shoujo Madoka Magica, and K-ON!\n────────\n•𝗤5. Why did you named your bot Kasane Teto?\n•𝗔𝗻𝘀: Cause she's my favorite UTAU\n────────\n");
}
};