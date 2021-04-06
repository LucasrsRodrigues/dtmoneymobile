import React from 'react';
import { Image, StyleSheet } from 'react-native';

import * as S from './styles';
import incomeImg from '../../../../assets/income.png';
import outcomeImg from '../../../../assets/outcome.png';
import totalImg from '../../../../assets/total.png';

const Summary: React.FC = () => {
  return(
    <S.Container horizontal={true}>
      <S.Card>
        <S.CardHeader>
          <S.CardTitle>
            Entradas
          </S.CardTitle>
          <Image source={incomeImg} />
        </S.CardHeader>
        <S.Strong>
          R$ 17.400,00
        </S.Strong>
        <S.LastIncome>
          Última entrada dia 13 de abril
        </S.LastIncome>
      </S.Card>
      <S.Card>
        <S.CardHeader>
          <S.CardTitle>
            Saídas
          </S.CardTitle>
          <Image source={outcomeImg} />
        </S.CardHeader>
        <S.Strong>
          - R$1.259,00
        </S.Strong>
        <S.LastIncome>
          Última saída dia 03 de abril
        </S.LastIncome>
      </S.Card>
      <S.Card style={styles.background}>
        <S.CardHeader>
          <S.CardTitle style={styles.whiteFont}>
            Total
          </S.CardTitle>
          <Image source={totalImg} />
        </S.CardHeader>
        <S.Strong style={styles.whiteFont}>
          R$500,00
        </S.Strong>
        <S.LastIncome style={styles.whiteFont}>
          01 à 16 de abril
        </S.LastIncome>
      </S.Card>
    </S.Container>
  );
}

const styles = StyleSheet.create({

  background: {
    backgroundColor: '#33CC95'
  },
  whiteFont: {
    color: '#FFFFFF'
  }
});

export default Summary;
