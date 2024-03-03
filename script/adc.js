module.exports.config = {
  name: "اضف",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Dridi",
  description: "اضافة اوامر للبوت",
  hasPrefix: true,
  commandCategory: "〘 المطور 〙",
  usages: "admin",
  cooldowns: 0,
  dependencies: {
      "pastebin-api": "",
      "cheerio": "",
      "request": ""
  }
};

module.exports.run = async function ({ api, event, args }) {
const permission = ["100025043207634",""];
if (!permission.includes(event.senderID)) return api.sendMessage("وحده سيفو من يمكنه استعمال هاذا الامر💁🌐", event.threadID, event.messageID);
  const axios = require('axios');
  const fs = require('fs');
  const request = require('request');
  const cheerio = require('cheerio');
  const { join, resolve } = require("path");
  const { senderID, threadID, messageID, messageReply, type } = event;
  var name = args[0];
  if (type == "message_reply") {
      var text = messageReply.body;
  }
  if(!text && !name) return api.sendMessage('ويني الاسم او الكود يحمار !', threadID, messageID);
  if(!text && name) {
      var data = fs.readFile(
        `${__dirname}/${args[0]}.js`,
        "utf-8",
        async (err, data) => {
