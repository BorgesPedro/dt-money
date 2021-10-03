import { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "./services/api";


interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: number;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => void
}

interface TransactionsProviderProps {
  children: ReactNode;
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const[transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get("transactions")
    .then(response => setTransactions(response.data.transactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )

}