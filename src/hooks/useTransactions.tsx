import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { EditTransactionModal } from "../components/EditTransactionModal";
import { api } from "../services/api";

interface Transaction {
  _id?: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at?: string | undefined;
  updated_at?: string | undefined;
}

// type TransactionInput = Omit<Transaction, "id" | "createdAt">; // TransactionInput herda os campos de Transaction, menos o id e createdAt

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: Transaction) => Promise<void>;
  editTransaction: (transaction: Transaction) => Promise<void>;
  handleOpenEditTransactionModal: (id: string) => void;
  handleCloseEditTransactionModal: () => void;
  editingTransaction: Transaction;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editingTransaction, setEditingTransaction] = useState(
    {} as Transaction
  );

  const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] =
    useState(false);
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] =
    useState(false);

  useEffect(() => {
    api.get("transactions/list-transactions").then((response) => {
      setTransactions(response.data.data);
    });
  }, []);

  function handleOpenEditTransactionModal(_id: string) {
    setIsEditTransactionModalOpen(true);

    const foundTransaction = transactions.find(
      (transaction) => transaction._id === _id
    );

    if (!foundTransaction) return;

    setEditingTransaction(foundTransaction);
  }

  function handleCloseEditTransactionModal() {
    setIsEditTransactionModalOpen(false);
  }

  function handleOpenDeleteTransactionModal(_id: string) {
    setIsDeleteTransactionModalOpen(true);
  }

  function handleCloseDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(false);
  }

  async function createTransaction(transactionData: Transaction) {
    const response = await api.post("/transactions/create", {
      ...transactionData,
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  async function editTransaction(transactionData: Transaction) {
    const response = await api.post("/transactions/edit", {
      ...transactionData,
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  async function deleteTransaction({ _id }: Transaction) {
    const response = await api.post("/transactions/delete", {});

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        editTransaction,
        handleOpenEditTransactionModal,
        handleCloseEditTransactionModal,
        editingTransaction,
      }}
    >
      {children}
      <EditTransactionModal
        isOpen={isEditTransactionModalOpen}
        onRequestClose={handleCloseEditTransactionModal}
      />
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
