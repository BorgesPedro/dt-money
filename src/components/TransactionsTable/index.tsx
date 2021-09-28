import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: number;
}

export function TransactionsTable() {
  const[transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get("transactions")
    .then(response => setTransactions(response.data))
  }, []);

  return (
    <>
    <Container>
      <table>
        <thead>
          <tr>
            <th>
              Título
            </th>
            <th>
              Valor
            </th>
            <th>
              Categoria
            </th>
            <th>
              Data
            </th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>R$ {transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            } )

          }
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>16/04/2003</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1000</td>
            <td>Casa</td>
            <td>18/04/2003</td>
          </tr>
        </tbody>
      </table>
    </Container>
    </>
  );
}