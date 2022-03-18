import { useState } from "react";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

interface DashboardProps {
  onOpenEditTransactionModal?: () => void;
}

export function Dashboard({ onOpenEditTransactionModal }: DashboardProps) {
  return (
    <Container>
      <Summary />
      <TransactionsTable
        onOpenEditTransactionModal={onOpenEditTransactionModal}
      />
    </Container>
  );
}
