const axios = require('axios');

module.exports = {
  config: {
    name: "miku",
    aliases: ["hatsune"],
    version: "1.0",
    author: "CiL ",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "nigga",
      en: "Get random Hatsune Miku images"
    },
    longDescription: {
      vi: "nigger",
      en: "Get random Hatsune Miku Images"
    },
    category: "general",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function () {
    const images = [
      "https://s1.zerochan.net/Hatsune.Miku.600.2472603.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2505360.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2503879.jpg",
    "https://s1.zerochan.net/Hatsune.Miku.600.2498810.jpg",
     "https://s1.zerochan.net/Hatsune.Miku.600.2497896.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2496327.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2496116.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2495608.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2495607.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2491311.jpg",
     "https://s1.zerochan.net/Hatsune.Miku.600.2490242.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2490041.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2489117.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2488748.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2487319.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2480671.jpg",
        "https://s1.zerochan.net/Hatsune.Miku.600.2479585.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2478259.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2476146.jpg",
      "https://s1.zerochan.net/Hatsune.Miku.600.2475067.jpg",
      
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