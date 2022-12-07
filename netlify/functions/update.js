const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");
const hashnode = require("../../hashnode");


exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === "Anshu_4_bot" || botName === null) {
    switch (command) {
      case "echo":
        await sendMessage(message.chat.id, extra || "ECHO!");
        break;
      case "hashnodefeatured":
        const featured = await hashnode.getFeaturedPosts();
        const reply = `
        ${featured.storiesFeed[0].title} by ${featured.storiesFeed[0].author.username}
        ${featured.storiesFeed[1].title} by ${featured.storiesFeed[1].author.username}
        ${featured.storiesFeed[2].title} by ${featured.storiesFeed[2].author.username}
        https://hashnode.com/featured
        `;
        break;
      default:
        await sendMessage(message.chat.id, "I don't understand that command.");
    }
  }

  return { statusCode: 200 };
};
