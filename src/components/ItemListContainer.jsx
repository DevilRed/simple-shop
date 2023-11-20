import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    getData().then((res) => {
      if (category) {
        setProducts(res.filter((prod) => prod.categoria === category));
      } else {
        setProducts(res);
      }
    });
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
