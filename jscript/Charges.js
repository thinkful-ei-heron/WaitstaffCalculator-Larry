import Meal from './Meal.js'

const charges = {
  subTotal: 0,
  tip: 0,
  total: 0
}

function setSubTotal(subtotal) {
  charges.subTotal = subtotal;
}

function setTip(tip) {
  charges.tip = tip;
}

function setTotal(total) {
  charges.total = total;
}

function calculateCharges() {
  setSubTotal (Meal.store.price + 
                   (Meal.store.taxRate * Meal.store.price));
  setTip (Meal.store.tipRate * charges.subTotal);
  setTotal (charges.subTotal + charges.tip);
}

export default {
  charges,
  setSubTotal,
  setTip,
  setTotal,
  calculateCharges
}
