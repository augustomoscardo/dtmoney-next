import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { DeleteTransactionModal } from "../components/DeleteTransactionModal";
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
  deleteTransaction: (id: string) => Promise<void>;
  handleOpenEditTransactionModal: (id: string) => void;
  handleCloseEditTransactionModal: () => void;
  editingTransaction: Transaction;
  handleOpenDeleteTransactionModal: (id: string) => void;
  handleCloseDeleteTransactionModal: () => void;
  deletingTransaction: Transaction;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [editingTransaction, setEditingTransaction] = useState(
    {} as Transaction
  );
  const [deletingTransaction, setDeletingTransaction] = useState(
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

    const selectedTransaction = transactions.find(
      (transaction) => transaction._id === _id
    );

    if (!selectedTransaction) return;

    setEditingTransaction(selectedTransaction);
  }

  function handleCloseEditTransactionModal() {
    setIsEditTransactionModalOpen(false);
  }

  function handleOpenDeleteTransactionModal(_id: string) {
    setIsDeleteTransactionModalOpen(true);

    const selectedTransaction = transactions.find(
      (transaction) => transaction._id === _id
    );

    if (!selectedTransaction) return;

    setDeletingTransaction(selectedTransaction);
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
    console.log(transactionData);

    const response = await api.post("/transactions/edit", transactionData);

    const { transaction } = response.data;

    //Compare previous array with new array updated
    const updatedTransactions: any = transactions.map((transactionData) =>
      transactionData._id === transaction._id ? transaction : transactionData
    );

    setTransactions(updatedTransactions);
  }

  async function deleteTransaction(_id: string) {
    await api.post("/transactions/delete", { _id });
    // .filter(t => t._id !== transactionData._id)

    const newTransactionsArray = transactions.filter((t) => t._id !== _id);

    setTransactions(newTransactionsArray);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        editTransaction,
        deleteTransaction,
        handleOpenEditTransactionModal,
        handleCloseEditTransactionModal,
        editingTransaction,
        handleOpenDeleteTransactionModal,
        handleCloseDeleteTransactionModal,
        deletingTransaction,
      }}
    >
      {children}
      <EditTransactionModal
        isOpen={isEditTransactionModalOpen}
        onRequestClose={handleCloseEditTransactionModal}
      />
      <DeleteTransactionModal
        isOpen={isDeleteTransactionModalOpen}
        onRequestClose={handleCloseDeleteTransactionModal}
      />
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
