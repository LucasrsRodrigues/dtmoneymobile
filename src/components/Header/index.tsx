import React from 'react';
import { Image } from 'react-native';

import * as S from './styles';
import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return(
    <S.Container>
      <Image source={logoImg} />
      <S.Button>
        <S.ButtonText>
          Nova Transação
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
}

export default Header;
