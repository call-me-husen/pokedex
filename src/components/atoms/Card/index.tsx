import { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}

export default function Card({ children }: ICardProps): JSX.Element {
  return <div className="p-6 rounded-md bg-primary-75">{children}</div>;
}
