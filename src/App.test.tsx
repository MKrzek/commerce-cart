import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the shop heading", () => {
  render(<App />);
  const heading = screen.getByText(/🛒 Shop/i);
  expect(heading).toBeInTheDocument();
});

test("renders all 5 products", () => {
  render(<App />);
  expect(screen.getByText(/Mechanical Keyboard/i)).toBeInTheDocument();
  expect(screen.getByText(/USB-C Hub/i)).toBeInTheDocument();
  expect(screen.getByText(/Monitor Stand/i)).toBeInTheDocument();
  expect(screen.getByText(/Webcam/i)).toBeInTheDocument();
  expect(screen.getByText(/Desk Mat/i)).toBeInTheDocument();
});

test("shows empty cart message on load", () => {
  render(<App />);
  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
