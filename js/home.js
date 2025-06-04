//add money to account
/*-
s-1 : add an event handler
 prevent page reload after form submit 
 s-2: get money to be added to the account balance
*/


//step--1: add an event handler to the add money button inside a form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    console.log('money add btn clicked');
    //prevent page reload after form submit
    event.preventDefault();

    //step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get pin number provider

    const addPinInput = document.getElementById('input-pin-number').value;
    console.log(addPinInput);

});