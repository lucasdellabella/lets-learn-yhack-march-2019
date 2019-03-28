import axios from "axios";
import posts from "./mocks";

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export const getPosts = async () => {
  await sleep(750);
  return posts;
};
