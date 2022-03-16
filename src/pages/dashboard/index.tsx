import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // const response = await api.get("transactions");

  // const transactions = response.data.map((transaction) => {
  //   return {
  //     title: transaction.title,
  //     amount: transaction.amount,
  //     type: transaction.type,
  //     category: transaction.category,
  //     userName: transaction.userName,
  //   };
  // });

  return {
    props: {
      // transactions,
    },
  };
};
