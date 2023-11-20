import { useEffect, useState } from "react";
import { getItemById } from "../helpers/getData";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    getItemById(id).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};
