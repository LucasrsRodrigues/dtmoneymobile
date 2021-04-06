const transactions = [
  {
    id: 1,
    title: 'Desenvolvimento de site',
    type: 'deposit',
    category: 'Vendas',
    amount: 12000,
    createdAt: new Date('2021-04-13').toString()
  },
  {
    id: 2,
    title: 'Hamburgueria Pizzy',
    type: 'withdraw',
    category: 'Alimentação',
    amount: 59,
    createdAt: new Date('2021-04-10').toString()
  },
  {
    id: 3,
    title: 'Aluguel do apartamento',
    type: 'withdraw',
    category: 'Casa',
    amount: 12000,
    createdAt: new Date('2021-03-27').toString()
  }
];
export { transactions }
