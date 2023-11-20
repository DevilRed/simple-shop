export const Item = ({ product }) => {
  return (
    <div className="producto">
      <img src={product.imagen} />
      <div>
        <h4>{product.titulo}</h4>
        <p>Price: {product.precio}</p>
        <p>Category: {product.categoria}</p>
        <p>{product.descripcion}</p>
        <a href={`/item/${product.id}`} className="ver-mas">
          See more...
        </a>
      </div>
    </div>
  );
};
