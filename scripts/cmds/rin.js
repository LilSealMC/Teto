const axios = require('axios');

module.exports = {
  config: {
    name: "rin",
    aliases: ["kagamine"],
    version: "1.0",
    author: "CiL ",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "nigga",
      en: "Get random Kagamine RIn images"
    },
    longDescription: {
      vi: "nigger",
      en: "Get random Kagamine Rin images"
    },
    category: "general",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function () {
    const images = [
      "https://static.zerochan.net/Kagamine.Rin.full.2509151.png",
      "https://s1.zerochan.net/Kagamine.Rin.600.3933954.jpg",
      "https://s1.zerochan.net/Kagamine.Rin.600.3931046.jpg",
    "https://s1.zerochan.net/Kagamine.Rin.600.3926958.jpg",
    "https://s1.zerochan.net/Kagamine.Rin.600.3925223.jpg",
      "https://s1.zerochan.net/Kagamine.Rin.600.3924826.jpg",
      "https://s1.zerochan.net/Kagamine.Rin.600.3920019.jpg",  
      
"https://s1.zerochan.net/Kagamine.Rin.600.3917611.jpg",

"https://static.zerochan.net/Kagamine.Rin.full.3917610.jpg",  
    "https://s1.zerochan.net/Kagamine.Rin.600.3917609.jpg",
 "https://s1.zerochan.net/Kagamine.Rin.600.3900553.jpg",
    
"https://s1.zerochan.net/Kagamine.Rin.600.3898813.jpg",
    "https://static.zerochan.net/Kagamine.Rin.full.3893317.png",
    
"https://s1.zerochan.net/Kagamine.Rin.600.3879329.jpg",

"https://s1.zerochan.net/Kagamine.Rin.600.3872562.jpg",

"https://s1.zerochan.net/Kagamine.Rin.600.3859576.jpg",
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