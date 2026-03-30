import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * This is the standard utility for conditional Tailwind classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
