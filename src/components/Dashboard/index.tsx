import React from 'react';
import { View } from 'react-native';
import Summary from './components/Summary';
import TransactionsTable from './components/TransactionsTable';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return(
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}

export default Dashboard;
