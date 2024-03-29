import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useTransactions } from "../../hooks/useTransactions";
import { Pagination } from "../Pagination";
import { Container } from "./styles";

export function TransactionsTable() {
  const {
    transactions,
    handleOpenEditTransactionModal,
    handleOpenDeleteTransactionModal,
    paginator,
    getPaginatedTransactions,
  } = useTransactions();

  return (
    <Container>
      {transactions.length ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction._id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(transaction.amount)}
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(transaction.created_at as string)
                      )}
                    </td>
                    <td className="editDeleteButtons">
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            handleOpenEditTransactionModal(
                              transaction._id as string
                            )
                          }
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleOpenDeleteTransactionModal(
                              transaction._id as string
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            totalCountOfRegisters={paginator.itemsCount}
            currentPage={paginator.currentPage}
            onPageChange={(changedPage) => {
              getPaginatedTransactions(changedPage);
              console.log(`Page: ${changedPage}`);
            }}
          />
        </>
      ) : (
        <div className="noRegister">
          <span>Não há registros.</span>
          <p>Insira a sua primeira transação.</p>
        </div>
      )}
    </Container>
  );
}
