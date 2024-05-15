const axios = require('axios');

module.exports = {
  config: {
    name: "𝘆𝗮𝘀𝘂𝘁𝗮𝗻𝗴𝗲",
    aliases: ["yasutange"],
    version: "1.0",
    author: "CiL ",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "nigga",
      en: "Get random Vocalod, Utauloid, etc. images from my favorite artist"
    },
    longDescription: {
      vi: "nigger",
      en: ""
    },
    category: "general",
    guide: {
      vi: "{pn}",
      en: "{pn}"
    }
  },

  getRandomImage: function () {
    const images = [
      "https://cdn.donmai.us/sample/2c/22/__kasane_teto_utau_drawn_by_yasutange__sample-2c22bbb8331a923a8e97c1039831d593.jpg",
      "https://cdn.donmai.us/sample/60/26/__kasane_teto_utau_drawn_by_yasutange__sample-6026aa799bf97f376bc25b46513412a9.jpg",
      "https://cdn.donmai.us/sample/56/34/__kasane_teto_utau_drawn_by_yasutange__sample-5634e8853d204ce5897e1ecf25b38e21.jpg",
    "https://cdn.donmai.us/sample/c6/2e/__kiseki_natsuki_utau_drawn_by_yasutange__sample-c62e557fd82d038c44c52f31e27e114a.jpg",
    "https://cdn.donmai.us/sample/27/90/__hatsune_miku_and_kasane_teto_vocaloid_and_1_more_drawn_by_yasutange__sample-279070e1deaddcc5b24b669a6b0dc125.jpg",
      "https://cdn.donmai.us/sample/74/ab/__kasane_teto_utau_drawn_by_yasutange__sample-74abfc617626689c37a1efdb3fe8e66c.jpg",
      "https://cdn.donmai.us/sample/b5/5d/__hatsune_miku_and_hatsune_miku_vocaloid_drawn_by_yasutange__sample-b55d29c5ff47d5b687ead1590149cc27.jpg",  
      
"https://cdn.donmai.us/sample/6f/bb/__utane_uta_utau_drawn_by_yasutange__sample-6fbba800e7a8963bc17ef78dc0760114.jpg",

"https://cdn.donmai.us/sample/8d/65/__kasane_teto_utau_drawn_by_yasutange__sample-8d655f6105eec9a1c7e04a9d0ef7cea8.jpg",  
    "https://cdn.donmai.us/sample/98/a8/__kasane_teto_utau_drawn_by_yasutange__sample-98a8c8d71a66b854eeea2b16a092343b.jpg",
 "https://cdn.donmai.us/sample/1b/1b/__kasane_teto_utau_drawn_by_yasutange__sample-1b1b4a9fda3fee74317c2b919f286b3f.jpg",
    
"https://cdn.donmai.us/sample/63/e2/__kasane_teto_utau_drawn_by_yasutange__sample-63e2a284bbc188de0cd4cb2d7202179b.jpg",
    "https://cdn.donmai.us/sample/39/eb/__kasane_teto_utau_drawn_by_yasutange__sample-39eb07b03ddd687d75e5165816dbf2ec.jpg",
    
"https://cdn.donmai.us/sample/4e/f9/__kasane_teto_utau_drawn_by_yasutange__sample-4ef9f2488e603b3965d8aad67d11947e.jpg",

"https://cdn.donmai.us/sample/e1/ab/__kasane_teto_utau_drawn_by_yasutange__sample-e1abadb12a9cdd6e785f3fdaac502204.jpg",

"https://cdn.donmai.us/sample/cf/ca/__kasane_teto_utau_drawn_by_yasutange__sample-cfcaa087912112c6cc0e8f68dc63f370.jpg",
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