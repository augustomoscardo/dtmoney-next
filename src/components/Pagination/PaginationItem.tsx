import { Button } from "./styles";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent,
  onPageChange,
  number,
}: PaginationItemProps) {
  return (
    <Button disabled={isCurrent} onClick={() => onPageChange(number)}>
      {number}
    </Button>
  );
}
