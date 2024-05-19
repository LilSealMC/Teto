module.exports = {
 config: {
 name: "𝗶𝗻𝗳𝗼",
aliases: ["info"],
 version: "1.0",
 author: "CiL",
 countDown: 5,
 role: 0,
 shortDescription: "teto wiki",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "^info") {
 return message.reply({
 body: "𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n最もフォーマル\n────────\n•𝗚𝗲𝗻𝗱𝗲𝗿: Chimera\n•𝗔𝗴𝗲: 31\n•𝗛𝗲𝗶𝗴𝗵𝘁: 159.5 cm (5 ft 3 in)\n•𝗪𝗲𝗶𝗴𝗵𝘁: 47 kg (104 lb)\n────────\n𝗚𝗲𝗻𝗲𝗿𝗮𝗹 𝗩𝗼𝗶𝗰𝗲 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n────────\n•𝗩𝗼𝗶𝗰𝗲: Feminine\n•𝗩𝗼𝗶𝗰𝗲 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗿: Oyamano Mayo\n•𝗕𝗮𝘀𝗲 𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲: Japanese\n────────\n𝗔𝗱𝗱𝗶𝘁𝗼𝗻𝗮𝗹 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n────────\n•𝗜𝗹𝗹𝘂𝘀𝘁𝗿𝗮𝘁𝗼𝗿: Sakauchi Waka\n•𝗖𝗼𝗱𝗲 𝗡𝗮𝗺𝗲: 0401\n•𝗖𝗼𝗺𝗽𝗮𝗻𝘆:\n•TWINDRILL\n•AH-Software Co. Ltd.\n•𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲𝘀:\n•April 1, 2008 (First Release)\n•April 27, 2023 (Synthesizer V)\n•𝗔𝗳𝗳𝗶𝗹𝗶𝗮𝘁𝗶𝗼𝗻𝘀:\n•Dreamtonics Co., Ltd.\n•2ch\n•Crypton Future Media, Inc.\nWebsites:\n•Official Kasane Teto Website\n•AH-Software Character Page\n────────\n𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻\nカタカナ\n────────\nKasane Teto (重音テト) is a Japanese vocal developed and distributed by AH-Software Co. Ltd., in collaboration with TWINDRILL, and was released as an AI voice database for Synthesizer V Studio in April 2023. She was originally released for the UTAU engine in April 2008.\n\nShe is voiced by the Japanese singer-songwriter and illustrator Oyamano Mayo.\n────────\n",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1pd9ekI.png")
 });
 }
 }
}