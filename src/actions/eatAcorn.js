const eatAcorn = counter => ({
  type: 'SELL',
  counter: counter - 1,
});

export default eatAcorn;
