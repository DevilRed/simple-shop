import { useEffect, useState } from "react";
import { getItemById } from "../helpers/getData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    getItemById(id).then((res) => {
      setItem(res);
    });
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
};
