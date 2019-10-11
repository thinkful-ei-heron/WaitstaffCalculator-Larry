import Charges from './Charges.js'

const store = {
  tipTotal: 0,
  mealCount: 0,
  tipPerMeal: 0
}

function reset () {
  store.tipTotal = 0;
  store.mealCount = 0;
  store.tipPerMeal = 0;
}

function calculateDetails () {
  store.tipTotal += Charges.charges.tip;
  store.mealCount += 1;
  store.tipPerMeal = store.tipTotal / store.mealCount;
}

export default {
  store,
  calculateDetails,
  reset
}
