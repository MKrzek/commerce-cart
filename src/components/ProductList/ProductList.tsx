import { CartItem, Product } from "../../types";

interface Props {
  products: Product[];
  cart: CartItem[];
  onAdd: (product: Product) => void;
}

export const ProductList = ({ products, cart, onAdd }: Props) => {
  const cartIds = new Set(cart.map((item) => item.id));

  return (
    <section aria-label="Available products">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => {
          const inCart = cartIds.has(product.id);
          return (
            <li key={product.id} className="product-item">
              <span>{product.name} — £{product.price.toFixed(2)}</span>
              <button
                onClick={() => onAdd(product)}
                aria-label={`Add ${product.name} to cart`}
                aria-pressed={inCart}
              >
                {inCart ? "Added ✓" : "Add to cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
