
# 🛒 E-Commerce Cart

A minimal, accessible shopping cart built with React and TypeScript. Submitted as a take-home challenge demonstrating React fundamentals, testing best practices, and accessibility compliance.

## ✨ Features

- **Product List** — 5 hardcoded products with prices
- **Cart Management** — Add, update quantity, remove, and clear cart
- **Live Totals** — Real-time price calculation with prevent negative quantities
- **Persistence** — Cart automatically saved to localStorage
- **Accessibility** — Full axe accessibility testing with WCAG compliance
- **Type Safety** — Written in TypeScript with strict mode

### Testing
- ✅ 25 passing tests covering:
  - Cart logic (add, update, remove, clear)
  - Total calculations
  - localStorage persistence
  - Component rendering and interaction
  - **Accessibility compliance** (axe + jest-axe)

## 🚀 Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

```bash
npm test              # Watch mode (interactive)
npm run test:ci       # Single run (CI / pre-commit)
npm run lint          # Check code quality + accessibility
npm run lint:fix      # Auto-fix where possible
```

### Test Coverage
- **useCart hook** — Core logic tests (add, update, remove, totals, persistence)
- **CartItem** — Quantity controls, removal, aria-labels
- **CartTotal** — Total display, singular/plural labels
- **ProductList** — Rendering, add to cart, "Added ✓" state
- **App integration** — Full cart flow
- **Accessibility** — axe scanning with color contrast, button names, heading order

## 📁 Project Structure

```
src/
├── components/
│   ├── CartItem/              # Individual cart line item
│   ├── CartTotal/             # Total price + clear button
│   ├── ProductList/           # Product grid + add to cart
│   └── EmptyCart/             # Empty state message
├── hooks/
│   └── useCart.ts             # Core cart state logic
├── types/
│   └── index.ts               # TypeScript interfaces
├── styles/
│   └── cart.css               # BEM-structured CSS
└── App.tsx                    # Main component + hardcoded products
```
