import { cn } from "../utils/cn";

/**
 * A premium, reusable Button component.
 */
export function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  "aria-label": ariaLabel,
  type = "button",
  ...props 
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-indigo-200 active:scale-[0.98]",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 active:bg-slate-100",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-indigo-50 active:bg-indigo-100",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-medium",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

