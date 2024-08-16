//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349157005194";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZzTlBOVFZENnpWbTZEZlJSR3o2SE52dDRyMktiTjM0VmVIVktTeTlHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzV0QWZRaWxWckpjdE9CaTYvS2NHRDl3ckU4aHQzamthT1h6WlV6N3RBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RzV3Z01RN29leXlKdDI5ei93VDU4REdCTk9ETmxEazdsVWNTZkhzUzJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpMUxtN3F5NGtEWHJuWi9aa3BWcko0aXMyNEttN0kwVHFRZkhvM0VkVWtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCYzMrVUQ3dG5lSXNmTmw5NEJLWFpWVEM0T3JaYjNPd1pEcjNEVTF2RnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo1WmdyaGRnR0EvVi9HYnJxamxwS0hJV2gyajFUN0hyK2c2em55RXJwQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0dqT3JEK1RtbEdtckIvTUVCVFNsa1NjTHBHVXFOeCtNQlRPTXhORzFWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVVrVkR4cVR2RDZ0Zndlekh3RG1pVFlkaWdTWWthRlZtakRtT3VrQlJ4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSzc1dVdvYjhuOG9Xcm9nMHFIRm5JTGxYSVJuRFNsWmpya3JTVm5pc040NzI3OGhGUHJia3dRMDVsNUFJcmx3V2NjQXdmYU1VVDVLRkxrem9HeEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJubmRlM29ZNmZSV2gzdUhhZEJuUmlLMzlLb2xXcTJ3bjhZQ0tSYUZTMHg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTcwMDUxOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjMxODkyQTg2QkIyODdBRDUxMEMwOTdBNkI0RkFEN0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzU1Nzg4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRlNQUWZOZnNTRnFWQmxMZ2pJZ1BuZyIsInBob25lSWQiOiI2MGE5ZmY5MC04MDMxLTQ2MGUtYTMyYy1kMjIyNjA0YWVmODQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BGS3Jadld0aStvblJsK1JLanJNSGRQUHJZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJnN21DOXZIVE5ITVB6R1F2b0VrQmRJaVM4Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCQ0xMM1E0NSIsIm1lIjp7ImlkIjoiMjM0OTE1NzAwNTE5NDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1hcnZlbCAy8J+YqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWI2NVhJUTc4L3R0UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicko2ZzNLMDNmY0NQNWN5MXNIMk1ZTWNtZktWZEFUeG9EN2pXWGFFRGVXYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZHRZTmVlSXA2cEVqZmZOOWFuZmpNWklrZ25mb3RkUHdzZXpEcGlsVFFIYkZtYzQyT1lnalJmZkN0Ui9zd0x6VkpBc3JHNk1xNWVLb0JsVW95bDk3Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjlYOTd2OHcvK3ZjNVd6RlFxYUJTOHNkN3llRHRnQXFNaklJZi9lRGUybkZFTEpzVS95ajE5SmN2cTFBMHN0QzBxMFp4OE41aXl3TEpJTkdzSVoxekRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1NzAwNTE5NDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF5ZW9OeXROMzNBaitYTXRiQjlqR0RISm55bFhRRThhQSs0MWwyaEEzbG4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1NTc4ODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUExTIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "Sir Marvel",
  packname: process.env.PACK_NAME || " M I M I",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Sir Marvel",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
