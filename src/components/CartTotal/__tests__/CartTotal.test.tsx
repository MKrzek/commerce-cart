import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { CartTotal } from "../CartTotal";

expect.extend(toHaveNoViolations);

const onClearCart = jest.fn();

const renderCartTotal = (total = 179.98, itemCount = 2) =>
  render(<CartTotal total={total} itemCount={itemCount} onClearCart={onClearCart} />);

describe("CartTotal", () => {
  beforeEach(() => jest.clearAllMocks());

  it("displays the formatted total", () => {
    renderCartTotal();
    expect(screen.getByLabelText("Total price £179.98")).toBeInTheDocument();
  });

  it("displays singular item label for 1 item", () => {
    renderCartTotal(89.99, 1);
    expect(screen.getByText("1 item in your cart")).toBeInTheDocument();
  });

  it("displays plural item label for multiple items", () => {
    renderCartTotal(179.98, 2);
    expect(screen.getByText("2 items in your cart")).toBeInTheDocument();
  });

  it("calls onClearCart when clear button clicked", () => {
    renderCartTotal();
    fireEvent.click(screen.getByLabelText("Clear all items from cart"));
    expect(onClearCart).toHaveBeenCalledTimes(1);
  });

  it("has no accessibility violations", async () => {
    const { container } = renderCartTotal();
    expect(await axe(container)).toHaveNoViolations();
  });
});
