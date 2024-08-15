import React from "react";
import { cn } from "@/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  color?: "primary" | "secondary" | "muted" | "accent" | "gradient";
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

const variantStyles = {
  h1: "text-5xl lg:text-6xl font-bold leading-tight",
  h2: "text-4xl lg:text-5xl font-bold leading-tight",
  h3: "text-3xl lg:text-4xl font-bold leading-tight",
  h4: "text-2xl lg:text-3xl font-semibold leading-tight",
  h5: "text-xl lg:text-2xl font-semibold leading-tight",
  h6: "text-lg lg:text-xl font-semibold leading-tight",
  body1: "text-base lg:text-lg leading-relaxed",
  body2: "text-sm lg:text-base leading-relaxed",
  caption: "text-xs lg:text-sm leading-normal",
  overline: "text-xs uppercase tracking-wider font-medium leading-normal",
};

const colorStyles = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent-blue",
  gradient: "text-gradient",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const defaultComponents = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
} as const;

export default function Typography({
  variant = "body1",
  component,
  className,
  children,
  color = "primary",
  align = "left",
  weight,
  ...props
}: TypographyProps) {
  const Component = component || defaultComponents[variant] || "p";

  const classes = cn(
    variantStyles[variant],
    colorStyles[color],
    alignStyles[align],
    weight && weightStyles[weight],
    className
  );

  return React.createElement(
    Component,
    { className: classes, ...props },
    children
  );
}
