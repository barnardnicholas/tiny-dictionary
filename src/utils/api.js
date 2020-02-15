const axios = require("axios");
// const { localHeaders } = require("../auth/api");

const headers = {
  "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
};

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
