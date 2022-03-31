import { useMemo } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { PaginationItem } from "./PaginationItem";
import { Container, Content } from "./styles";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (changedPage: number) => void;
}

const siblingsCount = 1;

export function Pagination({
  onPageChange,
  totalCountOfRegisters,
}: PaginationProps) {
  const { paginator, transactions } = useTransactions();

  const lastPage = Math.floor(totalCountOfRegisters / paginator.itemsPerPage);

  const totalOfTransactions = useMemo(() => {
    if (paginator.currentPage === 1) {
      return transactions.length;
    }

    return (
      (paginator.currentPage - 1) * paginator.itemsPerPage + transactions.length
    );
  }, [transactions, paginator]);

  return (
    <Container>
      <div>
        <strong>{paginator.pagingCounter}</strong> -{" "}
        <strong>{totalOfTransactions}</strong> de{" "}
        <strong>{paginator.itemsCount}</strong>
      </div>
      <Content>
        {paginator.currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            <span>...</span>
          </>
        )}

        {paginator.hasPrevPage && (
          <PaginationItem
            onPageChange={onPageChange}
            number={paginator.prevPage}
          />
        )}

        <PaginationItem
          onPageChange={onPageChange}
          number={paginator.currentPage}
          isCurrent
        />

        {paginator.hasNextPage && (
          <PaginationItem
            onPageChange={onPageChange}
            number={paginator.nextPage}
          />
        )}

        {paginator.currentPage + siblingsCount < lastPage && (
          <>
            {paginator.currentPage + 1 + siblingsCount < lastPage && (
              <span>...</span>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Content>
    </Container>
  );
}
