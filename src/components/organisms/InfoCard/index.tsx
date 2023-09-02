import Card from "@components/atoms/Card";
import RowInfo from "@components/molecules/RowInfo";
import { ReactNode } from "react";

interface IInfoCardProps {
  title: string;
  info: Array<{ title: string; content: string }>;
  footer?: ReactNode;
  variant?: "table" | "list";
}

export default function InfoCard({
  info,
  title,
  footer,
  variant = "table",
}: IInfoCardProps): JSX.Element {
  return (
    <Card>
      <p className="text-xl pb-2 border-b-white border-b-2 text-center mb-2">
        {title}
      </p>
      {variant === "table" ? (
        <div className="flex flex-col gap-1 mb-2">
          {info.map((row) => (
            <RowInfo key={`${title}-${row.title}`} {...row} />
          ))}
        </div>
      ) : (
        <div className="flex gap-2 justify-center flex-wrap">
          {info.map((row) => (
            <div
              key={`${title}-${row.title}`}
              className="uppercase text-lg rounded-lg border-white border px-2"
            >
              {row.content}
            </div>
          ))}
        </div>
      )}
      {footer}
    </Card>
  );
}
