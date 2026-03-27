import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { CartItem } from "../CartItem";

expect.extend(toHaveNoViolations);

const mockItem = { id: 1, name: "Keyboard", price: 89.99, quantity: 2 };
const onUpdate = jest.fn();
const onRemove = jest.fn();

const renderCartItem = () =>
  render(<CartItem item={mockItem} onUpdate={onUpdate} onRemove={onRemove} />);

describe("CartItem", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders item name, unit price and subtotal", () => {
    renderCartItem();
    expect(screen.getByText("Keyboard")).toBeInTheDocument();
    expect(screen.getByText("£89.99 each")).toBeInTheDocument();
    expect(screen.getByLabelText("Subtotal for Keyboard")).toHaveTextContent("£179.98");
  });

  it("calls onUpdate with +1 when increase clicked", () => {
    renderCartItem();
    fireEvent.click(screen.getByLabelText("Increase quantity of Keyboard"));
    expect(onUpdate).toHaveBeenCalledWith(1, 1);
  });

  it("calls onUpdate with -1 when decrease clicked", () => {
    renderCartItem();
    fireEvent.click(screen.getByLabelText("Decrease quantity of Keyboard"));
    expect(onUpdate).toHaveBeenCalledWith(1, -1);
  });

  it("calls onRemove when remove clicked", () => {
    renderCartItem();
    fireEvent.click(screen.getByLabelText("Remove Keyboard from cart"));
    expect(onRemove).toHaveBeenCalledWith(1);
  });

  it("has no accessibility violations", async () => {
    const { container } = renderCartItem();
    expect(await axe(container)).toHaveNoViolations();
  });
});
