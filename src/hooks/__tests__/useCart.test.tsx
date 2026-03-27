import { renderHook, act } from "@testing-library/react";
import { useCart } from "../useCart";


const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("useCart — logic", () => {
  beforeEach(() => localStorageMock.clear());

  const mockProduct = { id: 1, name: "Keyboard", price: 89.99 };

  it("adds a product to the cart", () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addToCart(mockProduct));
    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(1);
  });

  it("increments quantity when adding the same product twice", () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addToCart(mockProduct));
    act(() => result.current.addToCart(mockProduct));
    expect(result.current.cart[0].quantity).toBe(2);
  });

  it("calculates the correct total", () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addToCart(mockProduct));
    act(() => result.current.addToCart(mockProduct));
    expect(result.current.getTotal()).toBeCloseTo(179.98);
  });

  it("does not allow quantity to drop below zero", () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addToCart(mockProduct));
    act(() => result.current.updateQuantity(1, -5));
    expect(result.current.cart).toHaveLength(0);
  });

  it("persists cart to localStorage", () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addToCart(mockProduct));
    const stored = JSON.parse(localStorageMock.getItem("ecommerce-cart")!);
    expect(stored[0].name).toBe("Keyboard");
  });
});
