const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  console.log('event body-----', event.body)
  await sendMessage(message.chat.id, "I got your message!");
  return { statusCode: 200 };
};
