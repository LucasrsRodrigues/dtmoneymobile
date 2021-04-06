import React, { useEffect, useState } from 'react';
import { transactions } from '../../../../services/api';
import * as S from './styles';

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

const TransactionsTable: React.FC = () => {
  const [transcations, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    const response = transactions;
    setTransactions(response);
  }, []);

  return (
    <S.Container>
      <S.Flex>
        <S.Title>
          Listagem
        </S.Title>
        <S.QuantityItens>
          4 itens
        </S.QuantityItens>
      </S.Flex>
      <S.Wrapper>
        {transcations.map(transaction => (
          <S.Card key={transaction.id}>
            <S.TransactionTitle>
              {transaction.title}
          </S.TransactionTitle>
            <S.Income>
              R$ {transaction.amount}
          </S.Income>
            <S.Flex>
              <S.Text>
                {transaction.category}
            </S.Text>
              <S.Text>
                {transaction.createdAt}
            </S.Text>
            </S.Flex>
          </S.Card>
        ))}

        <S.Card>
          <S.TransactionTitle>
            Desenvolvimento de site
          </S.TransactionTitle>
          <S.Outcome>
            - R$ 59,00
          </S.Outcome>
          <S.Flex>
            <S.Text>
              Vendas
            </S.Text>
            <S.Text>
              13/04/2021
            </S.Text>
          </S.Flex>
        </S.Card>
      </S.Wrapper>
    </S.Container>
  );
}

export default TransactionsTable;
