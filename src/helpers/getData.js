import data from "../data/data.json";

export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const getItemById = (id) => {
  console.log("id" + id);
  return new Promise((resolve, reject) => {
    const item = data.find((el) => (el.id = id));

    if (item) {
      resolve(item);
    } else {
      reject({ error: "No item found" });
    }
  });
};