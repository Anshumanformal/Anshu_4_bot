const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === "Anshu_4_bot" || botName === null) {
    await sendMessage(message.chat.id, "I got your message!");
  }

  return { statusCode: 200 };
};
