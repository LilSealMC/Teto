const axios = require("axios");
const { getTime, drive, getStreamFromURL, getExtFromUrl } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

module.exports = {
	config: {
		name: "welcome",
		version: "1.5",
		author: "Jaylorence U Opiar",
		category: "events"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "Cảm ơn bạn đã mời tôi vào nhóm!\Prefix bot: %1\Để xem danh sách lệnh hãy nhập: %1help",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "Xin chào {userName}.\Chào mừng bạn đến với {boxName}.\Chúc bạn có buổi {session} vui vẻ!"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "𝗕𝗢𝗧 Connected. \────────\“Hi Im 𝗞𝗮𝘀𝗮𝗻𝗲 𝗧𝗲𝘁𝗼, Thank you for inviting me to the 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁(≧▽≦)”\────────\ 𝗣𝗿𝗲𝗳𝗶𝘅【 %1 】\────────\【Use ^𝗵𝗲𝗹𝗽 to open the list of commands 】\────────",
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: `𝗨𝗦𝗘𝗥 {userName} Joined in {boxName}\────────\“Hello 𝗨𝘀𝗲𝗿 {userName}(ㆁωㆁ), “Welcome to the 𝗚𝗿𝗼𝘂𝗽 𝗖𝗵𝗮𝘁 {boxName}\────────\ We hope you bought 𝗽𝗶𝘇𝘇𝗮(≧▽≦)”\────────\`,
		}
	},

	attachment: {
		image: {
			url: "https://i.imgur.com/Yu71OsJ.jpg"
		}
	},
 
   onStart: async ({ threadsData, message, event, api, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				// if new member is bot
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix)); 
        }         
				// if new member:
				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};

				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const threadData = await threadsData.get(threadID);
					const dataBanned = threadData.data.banned_ban || [];
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const threadName = threadData.threadName;
					const userName = [],
						mentions = [];
					let multiple = false;

					if (dataAddedParticipants.length > 1)
						multiple = true;

					for (const user of dataAddedParticipants) {
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					// {userName}:   name of new member
					// {multiple}:
					// {boxName}:    name of group
					// {threadName}: name of group
					// {session}:    session of day
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: welcomeMessage.match(/\userNameTag\/g) ? mentions : null
					};
					welcomeMessage = welcomeMessage
						.replace(/\userName\|\userNameTag\/g, userName.join(", "))
						.replace(/\boxName\|\threadName\/g, threadName)
						.replace(
							/\multiple\/g,
							multiple ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\session\/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4")
						);

					form.body = welcomeMessage;

					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};