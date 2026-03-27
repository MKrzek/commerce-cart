import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { EmptyCart } from "../EmptyCart";

expect.extend(toHaveNoViolations);

describe("EmptyCart", () => {
  it("renders the empty cart message", () => {
    render(<EmptyCart />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("has role status for screen reader announcement", () => {
    render(<EmptyCart />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<EmptyCart />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
