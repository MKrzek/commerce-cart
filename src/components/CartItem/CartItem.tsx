import { CartItem as CartItemType } from "../../types";

interface Props {
  item: CartItemType;
  onUpdate: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdate, onRemove }: Props) => {
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item" data-testid={`cart-item-${item.id}`}>
      <div className="cart-item__info">
        <span className="cart-item__name">{item.name}</span>
        <span className="cart-item__unit-price">£{item.price.toFixed(2)} each</span>
      </div>
      <div className="cart-item__controls">
        <button
          onClick={() => onUpdate(item.id, -1)}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
        <button
          onClick={() => onUpdate(item.id, 1)}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>
      <span className="cart-item__subtotal" aria-label={`Subtotal for ${item.name}`}>
        £{subtotal}
      </span>
      <button
        className="cart-item__remove"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </div>
  );
};
