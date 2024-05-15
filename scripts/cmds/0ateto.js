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
 body: "𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n────────\nGender: Chimera\nAge: 31\nHeight: 159.5 cm (5 ft 3 in)\nWeight: 47 kg (104 lb)\n────────\n𝗚𝗲𝗻𝗲𝗿𝗮𝗹 𝗩𝗼𝗶𝗰𝗲 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n────────\nVoice: Feminine\nVoice Provider: Oyamano Mayo\nBase Language: Japanese\n────────\n𝗔𝗱𝗱𝗶𝘁𝗼𝗻𝗮𝗹 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\n────────\nIllustrator: Sakauchi Waka\nCode Name: 0401\nCompany:\n•TWINDRILL\n•AH-Software Co. Ltd.\nRelease Dates:\n•April 1, 2008 (First Release)\n•April 27, 2023 (Synthesizer V)\nAffiliations:\n•Dreamtonics Co., Ltd.\n•2ch\n•Crypton Future Media, Inc.\nWebsites:\n•Official Kasane Teto Website\n•AH-Software Character Page\n────────\n𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻\n────────\nKasane Teto (重音テト) is a Japanese vocal developed and distributed by AH-Software Co. Ltd., in collaboration with TWINDRILL, and was released as an AI voice database for Synthesizer V Studio in April 2023. She was originally released for the UTAU engine in April 2008.\n\nShe is voiced by the Japanese singer-songwriter and illustrator Oyamano Mayo.\n────────\n",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1pd9ekI.png")
 });
 }
 }
}