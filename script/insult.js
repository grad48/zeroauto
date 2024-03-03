const axios = require('axios');
module.exports.config = {
  name: "انسولت",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  description: "احصل على عشوائي انسولت.",
  usage: "insult",
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
    const response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const insult = response.data.insult;
    api.sendMessage(`هذه إهانة عشوائية لك: ${insult}`, threadID);
  } catch (error) {
    api.sendMessage("آسف، لم أتمكن من جلب الإهانة في الوقت الحالي. الرجاء معاودة المحاولة في وقت لاحق .", threadID, messageID);
  }
};
