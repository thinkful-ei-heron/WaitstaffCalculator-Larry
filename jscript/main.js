/* eslint-disable no-console */

function render() {
  const htmlString = 
   `<div class="leftPanel">
      <form class="mealForm">
        <fieldset name="fieldName">
          <legend>Enter the Meal Details</legend>
          <label for="price">Base Meal Price: $</label>
          <input type="text" name="price" placeholder="0.00"><br>
          <label for="taxRate">Tax Rate:</label>
          <input type="text" name="taxRate" placeholder="0.0">%<br>
          <label for="tipRate">Tip Percentage:</label>
          <input type="text" name="tipRate" placeholder="0.0">%<br><br>
          <button class="buttonSubmit" type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </fieldset>
      </form>
    </div>
    <div class = "rightPanel">
      <div class = "rightUpper">
        <h2>Customer Charges</h2>
        <p>Subtotal</p>
        <p>Tip</p>
        <p>Total</p>
      </div>
      <div class = "rightLower">
        <h2>My Earnings</h2>
        <p>Tip Total</p>
        <p>Meal Count</p>
        <p>Average Tip Per Meal</p>
        <button class="buttonAllReset">Reset</button>            
      </div>        
    </div>`;
  
  $('.js-mainWindow').html(htmlString);
}

function handlerReset() {
  $('.js-mainWindow').on('submit', '.mealForm', function(event) {
    event.preventDefault();
    console.log('Submit Button Pressed.');
  });
}

function handlerFormSubmit() {
  $('.js-mainWindow').on('submit', '.buttonAllReset', function() {
    initialize();
  });
}

function initialize() {
  //Clear all variables and render.
  render();  
}

function main() {
  handlerReset();
  handlerFormSubmit();
  initialize();
}

main ();
