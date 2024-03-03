const path = require('path');
module.exports.config = {
  name: "اغاني",
  version: "1.0.0",
  role: 0,
  hasPrefix: true,
  aliases: ['play'],
  usage: 'Music [promt]',
  description: 'بحث عن اغاني من يوتيوب',
  credits: 'Deveploper',
  cooldown: 5
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const yts = require("yt-search");
  const musicName = args.join(' ');
  if (!musicName) {
    api.sendMessage(`للبدء، اكتب الموسيقى وعنوان الأغنية التي تريدها.`, event.threadID, event.messageID);
    return;
  }
  try {
    api.sendMessage(`البحث عن "${musicName}"...`, event.threadID, event.messageID);
    const searchResults = await yts(musicName);
    if (!searchResults.videos.length) {
      return api.sendMessage("لا يمكن العثور على البحث.", event.threadID, event.messageID);
    } else {
      const music = searchResults.videos[0];
      const musicUrl = music.url;
      const stream = ytdl(musicUrl, {
        filter: "audioonly"
      });
      const time = new Date();
      const timestamp = time.toISOString().replace(/[:.]/g, "-");
      const filePath = path.join(__dirname, 'cache', `${timestamp}_music.mp3`);
      stream.pipe(fs.createWriteStream(filePath));
      stream.on('response', () => {});
      stream.on('info', (info) => {});
      stream.on('end', () => {
        if (fs.statSync(filePath).size > 26214400) {
          fs.unlinkSync(filePath);
          return api.sendMessage('تعذر إرسال الملف لأن حجمه أكبر من 25 ميغابايت.', event.threadID);
        }
        const message = {
          body: `${music.title}`,
          attachment: fs.createReadStream(filePath)
        };
        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
        }, event.messageID);
      });
    }
  } catch (error) {
    api.sendMessage('حدث خطأ أثناء معالجة طلبك.', event.threadID, event.messageID);
  }
};
