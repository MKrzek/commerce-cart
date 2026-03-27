import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ProductList } from "../ProductList";

expect.extend(toHaveNoViolations);

const mockProducts = [
  { id: 1, name: "Keyboard", price: 89.99 },
  { id: 2, name: "Webcam", price: 74.99 },
];
const onAdd = jest.fn();

describe("ProductList", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders all products", () => {
    render(<ProductList products={mockProducts} cart={[]} onAdd={onAdd} />);
    expect(screen.getByText(/Keyboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Webcam/i)).toBeInTheDocument();
  });

  it("calls onAdd with the correct product", () => {
    render(<ProductList products={mockProducts} cart={[]} onAdd={onAdd} />);
    fireEvent.click(screen.getByLabelText("Add Keyboard to cart"));
    expect(onAdd).toHaveBeenCalledWith(mockProducts[0]);
  });

  it("shows Added ✓ and aria-pressed true when item is in cart", () => {
    const cart = [{ id: 1, name: "Keyboard", price: 89.99, quantity: 1 }];
    render(<ProductList products={mockProducts} cart={cart} onAdd={onAdd} />);
    const btn = screen.getByLabelText("Add Keyboard to cart");
    expect(btn).toHaveTextContent("Added ✓");
    expect(btn).toHaveAttribute("aria-pressed", "true");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <ProductList products={mockProducts} cart={[]} onAdd={onAdd} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
