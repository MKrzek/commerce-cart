import "./styles/cart.css";
import { useCart } from "./hooks/useCart";
import { ProductList } from "./components/ProductList/ProductList";
import { CartItem } from "./components/CartItem/CartItem";
import { CartTotal } from "./components/CartTotal/CartTotal";
import { EmptyCart } from "./components/EmptyCart/EmptyCart";
import { Product } from "./types";

const PRODUCTS: Product[] = [
  { id: 1, name: "Mechanical Keyboard", price: 89.99 },
  { id: 2, name: "USB-C Hub", price: 34.99 },
  { id: 3, name: "Monitor Stand", price: 49.99 },
  { id: 4, name: "Webcam", price: 74.99 },
  { id: 5, name: "Desk Mat", price: 19.99 },
];

export default function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotal, getItemCount } = useCart();

  return (
    <main className="app">
      <h1>🛒 Shop</h1>
      <ProductList products={PRODUCTS} cart={cart} onAdd={addToCart} />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdate={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <CartTotal
            total={getTotal()}
            itemCount={getItemCount()}
            onClearCart={clearCart}
          />
        </>
      )}
    </main>
  );
}
