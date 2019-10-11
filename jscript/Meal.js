import Charges from './Charges.js'

const store = {
  price: 0,
  taxRate: 0,
  tipRate: 0
};

function setPrice (price) {
  store.price = price;
}

function setTaxRate (taxRate) {
  store.taxRate = taxRate;
}

function setTipRate (tipRate) {
  store.tipRate = tipRate;
}

function calculateDetails() {
  Charges.calculateCharges();
/* Earnings.calculateEarnings(); */
}

export default {
  setPrice,
  setTaxRate,
  setTipRate,
  calculateDetails,
  store
};
