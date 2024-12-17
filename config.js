const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_29_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2EwaWQyRkRhNVBOMWdXWG9KWFF2azkvaHRpQ2NTN0Vrc3dFQlRocStjcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNktxeTM1Wm1UZHF1MTdtUF9OcVRMQVwiLFxuICBcInBob25lSWRcIjogXCJiZWRlMDU5OC0wZTYwLTRiNTctOTdlMS0xNWM5ODdiNmU1MDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTY2LFxuICAgICAgNDQsXG4gICAgICAyMjcsXG4gICAgICAxMjcsXG4gICAgICAxMTYsXG4gICAgICA1NyxcbiAgICAgIDE0NSxcbiAgICAgIDYwLFxuICAgICAgNDAsXG4gICAgICAyNDAsXG4gICAgICAxMjgsXG4gICAgICAxMDEsXG4gICAgICA3LFxuICAgICAgMTQwLFxuICAgICAgOTIsXG4gICAgICA1NyxcbiAgICAgIDk5LFxuICAgICAgMjE0LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMjA1LFxuICAgICAgMTk1LFxuICAgICAgNCxcbiAgICAgIDE5NSxcbiAgICAgIDE3LFxuICAgICAgMTc4LFxuICAgICAgOTQsXG4gICAgICAxOTUsXG4gICAgICAxNDMsXG4gICAgICA4MyxcbiAgICAgIDk0LFxuICAgICAgMjMzLFxuICAgICAgMTU0LFxuICAgICAgMTYwLFxuICAgICAgMjExLFxuICAgICAgNjksXG4gICAgICAxMTEsXG4gICAgICA2NixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RlBWNk42R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0MTM4MzM2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQm9uZHNlcnZhbnQgT2YgQ2hyaXN0IE50YW5kb1wiLFxuICAgIFwibGlkXCI6IFwiMTMyMDg4MDc4NTQ0OTYwOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056dGtxa0VFTHYyaDdzR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFZPdjhVWUw4VkJTYWZ1bEZOY3FkZzdvRWwxTnlOTUJKaGZ4djRHWndYcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnYS82WTNXd0VCdGtrd3hVOUQvdE5qWmhLa3lBWWhnSUcyeDNtdWQ2aEphSjdtMkR2MVJ2RGhWTlRRRGwyY3VOMlp6dUlCVEcxejlnZTlDTlZYOWxEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVSXRQbUVTcXg1TzZtWHZlRFpJYVBEVm54TmhZeXhySW1IV0l0cE1uS0hWeUhncGxNU3E4Njd2MHduMnYvVFhnSURHOWR5S3BGOVF4SmxnRnNHWkdnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQxMzgzMzY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0NzQ1NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZFWi5qc29uIjogIntcImtleURhdGFcIjpcImYyVXNGbkE3bFdQdWQzTkU4YlhzTmorNlkvYjVVUllwdDNZYTJWNGZxRkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2MDAzNDAxMixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
