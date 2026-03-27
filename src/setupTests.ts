import "@testing-library/jest-dom";
import { configureAxe } from "jest-axe";

configureAxe({
  rules: {
    region: { enabled: false },
    "color-contrast": { enabled: true },           // Button/text readability
    "button-name": { enabled: true },              // Buttons need accessible labels
    "link-name": { enabled: true },                // Links need accessible names
    "form-field-multiple-labels": { enabled: true }, // If you have quantity inputs
    "list": { enabled: true },                     // Structure validation
    "heading-order": { enabled: true },            // Proper h1, h2, h3 hierarchy
    "aria-required-attr": { enabled: true },       // For form inputs
    "aria-prohibited-attr": { enabled: true },     // Catch invalid ARIA usage
  },
});
