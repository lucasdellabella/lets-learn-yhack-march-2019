import axios from "axios";
import posts from "./mocks";

axios.defaults.baseURL = "https://api.example.com";

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export const getPosts = async () => {
  await sleep(750);
  return posts;
};

export const updatePost = async ({ meetupId, ...restOfPayload }) => {
  await sleep(1500);
  /* */
  axios
    .post(`/meetup/${payload.meetupId}`, restOfPayload)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
