import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  _id?: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
  updated_at?: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">; // TransactionInput herda os campos de Transaction, menos o id e createdAt

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  editTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions/list-transactions").then((response) => {
      console.log(response.data.data);

      setTransactions(response.data.data);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions/create", {
      ...transactionInput,
      // createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  async function editTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions/edit", {
      ...transactionInput,
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, editTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
