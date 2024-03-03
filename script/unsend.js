module.exports.config = {
  name: "مسح",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  aliases: ['🙂', 'حذف', 'امسح'],
  usage: 'مسح [رد]',
  description: "قم بإلغاء إرسال رسالة الروبوت",
  credits: 'Deveploper',
  cooldown: 0
};
module.exports.run = async function({
  api,
  event
}) {
  if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage("لا أستطيع إلغاء الإرسال من رسالة أخرى.", event.threadID, event.messageID);
  if (event.type != "message_reply") return api.sendMessage("الرد على رسالة بوت", event.threadID, event.messageID);
  return api.unsendMessage(event.messageReply.messageID, err => (err) ? api.sendMessage("هناك خطأ ما.", event.threadID, event.messageID) : '');
}
