import Button from "@components/atoms/Button";

interface IPaginationProps {
  currentPage: number;
  totalPage: number;
  onChange: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPage,
  onChange,
}: IPaginationProps): JSX.Element {
  return (
    <div className="flex gap-3 justify-center">
      {currentPage > 1 && (
        <Button onClick={() => onChange(currentPage - 1)}>Prev</Button>
      )}
      <div className="text-lg self-center cursor-default">
        {currentPage}/{totalPage}
      </div>
      {currentPage < totalPage && (
        <Button onClick={() => onChange(currentPage + 1)}>Next</Button>
      )}
    </div>
  );
}
