import { useMemo } from "react";

interface IButtonProps {
  variant?: "default" | "outlined" | "plain";
  color?: "primary" | "white" | "black";
  children: any;
  onClick: () => void;
}

export default function Button({
  variant = "default",
  color = "primary",
  children,
  onClick,
}: IButtonProps): JSX.Element {
  const buttonClassName = useMemo<string>(() => {
    switch (variant) {
      case "outlined":
        const border = `border-${color}`;
        return [
          border,
          "rounded-md",
          "bg-transparent",
          "px-4",
          "py-2",
          "bordered",
        ].join(" ");
      case "plain":
        return ["text-white", "rounded-md", "bg-transparant", "p-2"].join(" ");
      default:
        const bg = `bg-${color}`;
        return [bg, "text-white", "rounded-md", "px-4", "py-2"].join(" ");
    }
  }, [color, variant]);

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
