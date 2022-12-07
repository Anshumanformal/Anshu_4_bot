const axios = require("axios").default;
const url = "https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage"

await axios.post(url, {
  // TODO: Add form data
  chat_id: JSON.parse(event.body).message.chat.id,
  text: "I got your message!",
});



exports.handler = async (event) => {
    console.log("Received an update from Telegram!", event.body);
    return { statusCode: 200 };
  };
  