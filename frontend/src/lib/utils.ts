import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Define type for the rest parameter as a union of multiple types (string, number, or boolean)
export function cn(...inputs: (string | number | boolean)[]) {
  return twMerge(clsx(inputs));
}
