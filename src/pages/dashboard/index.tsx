import Head from "next/head";
import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { TransactionsProvider } from "../../hooks/useTransactions";

Modal.setAppElement("body");

const UserDashboard = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Head>
        <title>dtmoney | Dashboard</title>
      </Head>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
};

export default UserDashboard;
