module.exports = {
 config: {
 name: "uidall",
 version: "1.0",
 author: "Deku",
 role: 1,
 category: "text",
 guide: {
 vi: ".",
 en: "."
 } 
 },

 onStart: async function ({ api, args, event }) {
 function reply(d) {
    api.sendMessage(d, event.threadID, event.messageID)
  }
  var ep = event.participantIDs;
  msg = ""
  msgs = ""
  m = 0;
  for (let i of ep) {
    m += 1;
  //  const name = await Users.getNameUser(i);
    msg += m+". "+"\nUID: "+i+"\nFacebook link: https://facebook.com/"+i+"\n\n";
  }
  msgs += "List of all UID's and name's of member in this group.\n\n"+msg;
  reply(msgs)
  }
  
};