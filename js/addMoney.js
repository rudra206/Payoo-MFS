/**
 * 1. add event listener to the add Money button (form submit)
 * make sure to preventDefult so that page doesn't reloads
 * 2. get the money user wants to add
 * also get the pin number provider
 * 3.verify the pin number for worning pin number ==> failed to add
 * for right pin number,allow to add the number to the accounr banlace 
 * 
 * 4.get the current balance
 * 
 * 5. add the money to be added with the current balance
 * 
 * 6. display /update the balance in the DOM/UI

 */

document.getElementById('btn-add-money')
    .addEventListener('click', function () { 
        event.preventDefault();
// console.log('added the eveny handler');


//get money and the pin number
const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat (addMoney);
const pinNumber = document.getElementById('input-pin-number').value;
// console.log(addMoney,pinNumber);

if(pinNumber=== '1234'){
 //add money to the account   
 const balance = document.getElementById('account-balance').innerText;
const balanceNumber  = parseFloat(balance);

//new balance 
const newBalance = balanceNumber + addMoneyNumber;

//update the DOM updated balnace
document.getElementById('account-balance').innerText = newBalance;
}
else{
   alert(' failed to add money.Please try again letter .')}
    });