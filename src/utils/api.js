const axios = require("axios");
// const { localHeaders } = require("../auth/api");

const headers = {
  "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.X_RAPIDAPI_KEY
};

const wordsApi = axios.create({
  baseURL: "https://wordsapiv1.p.mashape.com/words/",
  timeout: 5000,
  headers: headers
});

export const getDefinitions = word => {
  // console.log(process.env.production.X_RAPIDAPI_HOST);
  // console.log(process.env.production.X_RAPIDAPI_KEY);
  console.dir(process.env.NODE_ENV);

  return wordsApi.get(word).then(response => {
    return {
      success: true,
      ...response.data
    };
  });
};
