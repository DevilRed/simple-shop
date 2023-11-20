import data from "../data/data.json";

export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};