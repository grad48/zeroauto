const axios = require('axios');
module.exports.config = {
  name: "يقتبس",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  description: "الحصول على اقتباس ملهمة عشوائية.",
  usage: "اقتباس",
  credits: "Developer",
  cooldown: 0
};
module.exports.run = async ({
  api,
  event
}) => {
  const {
    threadID,
    messageID
  } = event;
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const {
      content,
      author
    } = response.data;
    api.sendMessage(`"${content}" - ${author}`, threadID, messageID);
  } catch (error) {
    api.sendMessage("عذرًا، لم أتمكن من جلب عرض أسعار في الوقت الحالي. الرجاء معاودة المحاولة في وقت لاحق.", threadID, messageID);
  }
};
