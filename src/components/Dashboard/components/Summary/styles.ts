import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin-top: -150px;
`;

export const Card = styled.View`
  background: #FFFFFF;
  padding: 24px;
  width: 300px;
  height: 200px;
  margin-right: 16px;
  border-radius: 4px;

`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const Strong = styled.Text`
  font-size: 30px;
  color: #363F5F;
  font-family: 'Poppins-SemiBold';
  margin-top: 16px;
`;

export const LastIncome = styled.Text`
  font-weight: 400;
  color: #969CB2;
  font-size: 12px;
  font-family: 'Poppins-Regular';
`;
