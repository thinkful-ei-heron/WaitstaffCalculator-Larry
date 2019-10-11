/* eslint-disable no-console */
import Meal from './Meal.js';
import Charges from './Charges.js';
import Earnings from './Earnings.js';

function render() {
  const htmlString = 
   `<div class="leftPanel">
      <form class="mealForm">
        <fieldset name="fieldName">
          <legend>Enter the Meal Details</legend>
          <label for="price">Base Meal Price: $</label>
          <input type="text" name="price" id="price" placeholder="0.00" required><br>
          <label for="taxRate">Tax Rate:</label>
          <input type="text" name="taxRate" id="taxRate" placeholder="0.0" required>%<br>
          <label for="tipRate">Tip Percentage:</label>
          <input type="text" name="tipRate" id="tipRate" placeholder="0.0" required>%<br><br>
          <button class="buttonSubmit" type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
    </div>
    <div class="rightPanel">
      <div class="rightUpper">
        <h2>Customer Charges</h2>
        <p>Subtotal: $${Charges.charges.subTotal}</p>
        <p>Tip: $${Charges.charges.tip}</p>
        <p>Total: $${Charges.charges.total}</p>
      </div>
      <div class="rightLower">
        <h2>My Earnings</h2>
        <p>Tip Total: $${Earnings.store.tipTotal}</p>
        <p>Meal Count: $${Earnings.store.mealCount}</p>
        <p>Average Tip Per Meal: $${Earnings.store.tipPerMeal}</p>
        <button class="buttonAllReset">Reset</button>            
      </div>        
    </div>`;
  
  $('.js-mainWindow').html(htmlString);
}

function handleFormSubmit() {
  $('.js-mainWindow').on('submit', '.mealForm', function(event) {
    event.preventDefault();
    const mealPrice = $(this).find('#price').val();
    Meal.setPrice(parseFloat(mealPrice));
    const taxRate = $(this).find('#taxRate').val();
    Meal.setTaxRate(parseFloat(taxRate) / 100);
    const tipRate = $(this).find('#tipRate').val();        
    Meal.setTipRate(parseFloat(tipRate) / 100);
    
    Meal.calculateDetails();
    Earnings.calculateDetails();    

    render();
  });
}

function handleReset() {
  $('.js-mainWindow').on('click', '.buttonAllReset', function() {
    initialize();
  });
}

function initialize() {
  Meal.setPrice(0);
  Meal.setPrice(0);
  Meal.setTipRate(0);
  Charges.setSubTotal(0);
  Charges.setTip(0);  
  Charges.setTotal(0);
  Earnings.reset();  

  render();
}

function main() {
  handleFormSubmit();  
  handleReset();
  initialize();
}

main ();
