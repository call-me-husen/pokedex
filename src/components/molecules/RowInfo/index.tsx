interface IRowInfoProps {
  title: string;
  content: string;
}

export default function RowInfo({
  title,
  content,
}: IRowInfoProps): JSX.Element {
  return (
    <div className="flex justify-between text-lg">
      <p className="font-medium uppercase">{title}</p>
      <p className="text-primary capitalize">{content}</p>
    </div>
  );
}
