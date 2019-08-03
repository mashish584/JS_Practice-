import { add } from "./Add";

// function to print total
export const total = (shipping, price) => `$${add(shipping, price)}`;
