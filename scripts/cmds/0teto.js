const axios = require('axios');

module.exports = {
  config: {
    name: "𝘁𝗲𝘁𝗼",
    aliases: ["kasane", "teto"],
    version: "1.0",
    author: "CiL ",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "nigga",
      en: "Get random Kasane Teto images"
    },
    longDescription: {
      vi: "nigger",
      en: "Get random Kasane Teto images"
    },
    category: "general",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function () {
    const images = [
      "https://i.pinimg.com/736x/c1/59/26/c1592666ef3ff8afeb26ee83e4195868.jpg",
      "https://s1.zerochan.net/Kasane.Teto.600.3447555.jpg",
      "https://s1.zerochan.net/Kasane.Teto.600.3447552.jpg",
    "https://s1.zerochan.net/Kasane.Teto.600.3954363.jpg",
    "https://s1.zerochan.net/Kasane.Teto.600.3951544.jpg",
      "https://s1.zerochan.net/Kasane.Teto.600.3938641.jpg",
      "https://s1.zerochan.net/Kasane.Teto.600.3934935.jpg",  
      
"https://s1.zerochan.net/Kasane.Teto.600.3939976.jpg",

"https://s1.zerochan.net/Kasane.Teto.600.3933719.jpg",  
    "https://s1.zerochan.net/Kasane.Teto.600.3928831.jpg",
 "https://s1.zerochan.net/Kasane.Teto.600.3928013.jpg",
    
"https://s1.zerochan.net/Kasane.Teto.600.3926147.jpg",
    "https://s1.zerochan.net/Kasane.Teto.600.3926146.jpg",
    
"https://s1.zerochan.net/Kasane.Teto.600.3926145.jpg",

"https://s1.zerochan.net/Kasane.Teto.600.3926142.jpg",

"https://s1.zerochan.net/Kasane.Teto.600.3926140.jpg",
      // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  },

  onStart: async function ({ message }) {
    try {
      const imageUrl = this.getRandomImage();

      return message.reply({
        attachment: await global.utils.getStreamFromURL(imageUrl)
      });
    } catch (error) {
      console.error("Error while retrieving waifu image:", error);
      return message.reply("An error occurred while processing your request.");
    }
  }
};