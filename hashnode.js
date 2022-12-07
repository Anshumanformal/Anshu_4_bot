const axios = require("axios").default;

const get = async (query) => {
  const res = await axios.post("https://api.hashnode.com/", { query });
  return res.data.data;
};

const featuredPosts = `
  query {
    storiesFeed(type: FEATURED) {
      author {
        username
      }
      title
    }
  }
`;

module.exports = {
  getFeaturedPosts: () => get(featuredPosts),
};
