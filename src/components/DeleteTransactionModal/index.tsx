import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import closeImg from "../../../public/assets/close.svg";
import incomeImg from "../../../public/assets/income.svg";
import outcomeImg from "../../../public/assets/outcome.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

interface DeleteTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditTransactionModal({
  isOpen,
  onRequestClose,
}: DeleteTransactionModalProps) {
  const {} = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<string>(""); //por padrão irá iniciar como deposit

  async function handleEDeleteTransaction(event: FormEvent) {
    event.preventDefault();

    await deleteTransaction({});

    onRequestClose();
  }

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
        <h2>Editar Transação</h2>

        <input
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)} // salvando o novo valor de title pelo setTitle
        />

        <input
          placeholder="Valor"
          type="number"
          onChange={(event) =>
            setAmount(Number(event.target.value))
          } /* no caso do input number, precisa converter a string pra number. Foi usado
          o constructor Number para essa conversão. */
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <Image src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <Image src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Deseja deletar essa transação?</button>
      </Container>
    </Modal>
  );
}
