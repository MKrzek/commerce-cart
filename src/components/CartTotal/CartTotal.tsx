interface Props {
  total: number;
  itemCount: number;
  onClearCart: () => void;
}

export const CartTotal = ({ total, itemCount, onClearCart }: Props) => (
  <div className="cart-total">
    <p className="cart-total__summary">
      {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
    </p>
    <p className="cart-total__amount" aria-live="polite" aria-label={`Total price £${total.toFixed(2)}`}>
      Total: £{total.toFixed(2)}
    </p>
    <button
      className="cart-total__clear"
      onClick={onClearCart}
      aria-label="Clear all items from cart"
    >
      Clear cart
    </button>
  </div>
);

