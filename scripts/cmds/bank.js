
 const fs = require("fs");
 
module.exports = {
config: {
		name: "bank",
		version: "1.9",
		author: "LøüFï/alrulex",/*don't change my credit please 😠*/
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "virtual bank system"
		},
		longDescription: {
			vi: "",
			en: "full bank system i upgrade it later(by løüfï)"
		},
		category: "banking",
		guide: {
			vi: "",
			en: "{pn} [transfer | withdraw | show | deposit | interest]\bank transfer (amount) (uid of who you want to transfer) without ()\bank interest:get interst.\bank show: show money of your account.\bank deposit (amount of your money)\bank withdraw (amount of money)"
		}
},
 
  onStart: async function ({ args, message, event, usersData }) {
    const userMoney = await usersData.get(event.senderID, "money");
    const user = parseInt(event.senderID);
    const bankData = JSON.parse(fs.readFileSync("bank.json", "utf8"));
 
    if (!bankData[user]) {
       bankData[user] = { bank: 0, lastInterestClaimed: Date.now() };
      fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
      });
    }
 
    const command = args[0];
    const amount = parseInt(args[1]);
    const recipientUID = parseInt(args[2]);
 
 
    if (command === "deposit") {
      if (isNaN(amount) || amount <= 0) {
        return message.reply("Please enter the amount you wish to deposit in the bank.");
      }
      if (userMoney < amount) {
        return message.reply("You don't have enough money.");
      }
 
      bankData[user].bank += amount;
      await usersData.set(event.senderID, {
        money: userMoney - amount
      });
 
      fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
      });
      return message.reply(`${amount} $ has been deposited into your bank account.`);
    } else if (command === "withdraw") {
      const balance = bankData[user].bank || 0;
 
      if (isNaN(amount) || amount <= 0) {
        return message.reply("Please enter the amount you wish to withdraw from your bank account.");
      }
 
      if (amount > balance) {
        return message.reply("The amount you want to withdraw is not available in your bank account.");
      }
 
      bankData[user].bank = balance - amount;
      const userMoney = await usersData.get(event.senderID, "money");
      await usersData.set(event.senderID, {
        money: userMoney + amount
   });
       fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
        if (err) throw err;
 
      });
 
 
 
      return message.reply(`${amount} $ has been withdrawn from your bank account.`);
 
    } else if (command === "show") {
 
      const balance = bankData[user].bank !== undefined && !isNaN(bankData[user].bank) ? bankData[user].bank :0;
 
  return message.reply(`Your bank account balance is ${balance} $.`);
 
} else if (command === "interest") {
 
  const interestRate = 0.001; 
 
  const lastInterestClaimed = bankData[user].lastInterestClaimed || Date.now();
 
  const currentTime = Date.now();
 
 
 
 
 
  const timeDiffInSeconds = (currentTime - lastInterestClaimed) / 1000;
 
 
 
 
 
  const interestEarned = bankData[user].bank * (interestRate / 365) * timeDiffInSeconds;
 
 
bankData[user].lastInterestClaimed = currentTime;
 
  bankData[user].bank += interestEarned;
 
 
 
  fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
 
    if (err) throw err;
 
  });
  return message.reply(`Interest has been added to your bank account balance. The interest earned is ${interestEarned.toFixed(2)} $.`);
        } else if (command === "transfer") {
  const balance = bankData[user].bank || 0;
  if (isNaN(amount) || amount <= 0) {
    return message.reply("Please enter the amount you wish to transfer to the recipient.");
  }
  if (balance < amount) {
    return message.reply("The amount you wish to transfer is greater than your bank account balance.");
  }
  if (isNaN(recipientUID)) {
    return message.reply("Please enter the correct recipient ID.");
  }
  if (!bankData[recipientUID]) {
    bankData[recipientUID] = { bank: 0, lastInterestClaimed: Date.now() };
    fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
      if (err) throw err;
    });
  }
  bankData[user].bank -= amount;
  bankData[recipientUID].bank += amount;
  fs.writeFile("bank.json", JSON.stringify(bankData), (err) => {
    if (err) throw err;
  });
  return message.reply(`${amount} converted to the recipient with id ${recipientUID}.`);
} else {
  return message.reply("𝗕𝗮𝗻𝗸\n────────\nThe following services are available:\n𝗱𝗲𝗽𝗼𝘀𝗶𝘁: Put money into the bank.\n𝘄𝗶𝗱𝗿𝗮𝘄: withdraw money from the bank from your account.\n𝘀𝗵𝗼𝘄: Show the amount of your bank account.\n𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁: You get good interest. \n────────\n𝗡𝗢𝗧𝗘: use 𝗵𝗲𝗹𝗽 bank to know how to use.\n────────\n");
} 
}
};
 
/*DO NOT CHANGE CREDIT 🐸*/