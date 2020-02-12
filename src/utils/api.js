const axios = require("axios");
const { headers } = require("../auth/api");

const wordsApi = axios.create({
  baseURL: "https://wordsapiv1.p.mashape.com/words/",
  timeout: 5000,
  headers: headers
});

export const getDefinitions = word => {
  return wordsApi.get(word).then(response => {
    return {
      success: true,
      ...response.data
    };
  });
};
