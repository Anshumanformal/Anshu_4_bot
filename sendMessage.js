const axios = require("axios").default;
const url = "https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage"


module.exports = async (chat_id, text) => {
  await axios.post(url, {
    chat_id,
    text,
  });

  return true;
};
