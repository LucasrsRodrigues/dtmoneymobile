import styled from 'styled-components/native';

export const Container = styled.View`
  background: #5429CC;
  padding: 32px 16px 160px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background:#6933FF;
  padding: 0 16px;
  border-radius: 4px;
  height: 48px;
  align-items: center;
  justify-content: center;

`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
`;
