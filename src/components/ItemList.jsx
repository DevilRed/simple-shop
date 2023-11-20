import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="container">
      <h2 className="main-title">Products</h2>
      <div className="productos">
        {products.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};
