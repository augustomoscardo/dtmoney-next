import { Container, Content } from "./styles";

interface PaginationProps {
  // totalCountOfRegisters: number;
  // registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage = 1, onPageChange }: PaginationProps) {
  // const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  // const previousPage =
  //   currentPage > 1
  //     ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  //     : [];

  // const nextPages =
  //   currentPage < lastPage
  //     ? generatePagesArray(
  //         currentPage,
  //         Math.min(currentPage + siblingsCount, lastPage)
  //       )
  //     : [];

  return (
    <Container>
      <Content>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Content>
    </Container>
  );
}
