import sellAcorn from '../actions/sellAcorn';
import buyAcorn from '../actions/buyAcorn';

function buyAndSell(store, action) {
  switch (action.type) {
    case 'BUY':
      return Object.assign({}, store, buyAcorn.counter);
    case 'SELL':
      return Object.assign({}, store, sellAcorn.counter);
    default:
      return store;
  }
}

export default buyAndSell;
