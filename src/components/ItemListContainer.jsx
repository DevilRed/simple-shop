import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const productsRef = collection(db, "products");
    getDocs(productsRef).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          // get product data and id
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
