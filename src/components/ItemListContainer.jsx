import { useEffect, useState, useMemo } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;
  const getCollection = useMemo(() => {
    const productsRef = collection(db, "products");
    // filtering data using firebase query
    const q = category
      ? query(productsRef, where("categoria", "==", category))
      : productsRef;

    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          // get product data and id
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  useEffect(() => {
    getCollection;
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
