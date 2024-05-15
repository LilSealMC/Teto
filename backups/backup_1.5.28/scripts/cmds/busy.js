if (!global.client.busyList)
	global.client.busyList = {};

module.exports = {
	config: {
		name: "busy",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "bật chế độ không làm phiền",
			en: "turn on do not disturb mode"
		},
		longDescription: {
			vi: "bật chế độ không làm phiền, khi bạn được tag bot sẽ thông báo",
			en: "turn on do not disturb mode, when you are tagged bot will notify"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [để trống | <lý do>]: bật chế độ không làm phiền"
				+ "\n   {pn} off: tắt chế độ không làm phiền",
			en: "   {pn} [empty | <reason>]: turn on do not disturb mode"
				+ "\n   {pn} off: turn off do not disturb mode"
		}
	},

	langs: {
		vi: {
			turnedOff: "✅ | Đã tắt chế độ không làm phiền",
			turnedOn: "✅ | Đã bật chế độ không làm phiền",
			turnedOnWithReason: "✅ | Đã bật chế độ không làm phiền với lý do: %1",
			turnedOnWithoutReason: "✅ | Đã bật chế độ không làm phiền",
			alreadyOn: "Hiện tại người dùng %1 đang bận",
			alreadyOnWithReason: "Hiện tại người dùng %1 đang bận với lý do: %2"
		},
		en: {
			turnedOff: "𝗕𝘂𝘀𝘆\n────────\nDo not disturb mode has been turned off\n────────",
			turnedOn: "𝗕𝘂𝘀𝘆\n────────\nDo not disturb mode has been turned on\n────────",
			turnedOnWithReason: "𝗕𝘂𝘀𝘆\n────────\nDo not disturb mode has been turned on\n𝗥𝗲𝗮𝘀𝗼𝗻: %1\n────────",
			turnedOnWithoutReason: "𝗕𝘂𝘀𝘆\n────────\nDo not disturb mode has been turned on\n────────",
			alreadyOn: "𝗕𝘂𝘀𝘆\n────────\n𝗨𝘀𝗲𝗿 %1 is currently busy\n────────",
			alreadyOnWithReason: "𝗕𝘂𝘀𝘆\n────────\n𝗨𝘀𝗲𝗿 %1 is currently busy\n𝗥𝗲𝗮𝘀𝗼𝗻: %2\n────────"
		}
	},

	onStart: async function ({ args, message, event, getLang, usersData }) {
		const { senderID } = event;

		if (args[0] == "off") {
			const { data } = await usersData.get(senderID);
			delete data.busy;
			await usersData.set(senderID, data, "data");
			return message.reply(getLang("turnedOff"));
		}

		const reason = args.join(" ") || "";
		await usersData.set(senderID, reason, "data.busy");
		return message.reply(
			reason ?
				getLang("turnedOnWithReason", reason) :
				getLang("turnedOnWithoutReason")
		);
	},

	onChat: async ({ event, message, getLang }) => {
		const { mentions } = event;

		if (!mentions || Object.keys(mentions).length == 0)
			return;
		const arrayMentions = Object.keys(mentions);

		for (const userID of arrayMentions) {
			const reasonBusy = global.db.allUserData.find(item => item.userID == userID)?.data.busy || false;
			if (reasonBusy !== false) {
				return message.reply(
					reasonBusy ?
						getLang("alreadyOnWithReason", mentions[userID].replace("@", ""), reasonBusy) :
						getLang("alreadyOn", mentions[userID].replace("@", "")));
			}
		}
	}
};