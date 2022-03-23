import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import closeImg from "../../../public/assets/close.svg";

import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

interface DeleteTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function DeleteTransactionModal({
  isOpen,
  onRequestClose,
}: DeleteTransactionModalProps) {
  const { deletingTransaction, deleteTransaction } = useTransactions();

  const [title, setTitle] = useState("");

  async function handleDeleteTransaction(event: FormEvent) {
    event.preventDefault();

    await deleteTransaction({ _id: deletingTransaction._id });

    onRequestClose();
  }

  useEffect(() => {
    if (!deletingTransaction) return;
    setTitle(deletingTransaction.title);
  }, [deletingTransaction]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <Image src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleDeleteTransaction}>
        <h2>Deletar Transação</h2>

        <span>
          Deseja deletar a transação: &quot;
          <strong>{deletingTransaction.title}</strong>&quot;?
        </span>

        <button type="submit">Deletar</button>
      </Container>
    </Modal>
  );
}
