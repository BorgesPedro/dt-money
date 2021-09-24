import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions")
    .then(response => console.log(response.data))
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