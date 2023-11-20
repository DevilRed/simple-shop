import { useParams } from "react-router-dom";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  let category = useParams().category;
  console.log(category);
  if (typeof category === "undefined") {
    category = "Products";
  }
  return (
    <div className="container">
      <h2 className="main-title">{category}</h2>
      <div className="productos">
        {products.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};
