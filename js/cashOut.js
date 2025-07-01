document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
event.preventDefault();
// console.log('clicked');
  const cashOut = document.getElementById('input-cash-out').value ;
  const cashOutNumber = parseFloat (cashOut);
const pinNumber = document.getElementById('input-cash-out-pin').value ;
console.log(cashOut , pinNumber );


//wrong way to veryfy pin number 
if(pinNumber === '1234'){
const balance = document.getElementById('account-balance').innerText;
const balanceNumber = parseFloat(balance);

//reduce the main Balance
const newBalance = balanceNumber - cashOutNumber;
document.getElementById('account-balance').innerText = newBalance;
}
else{
alert('Faild to cash out. please try again letter.');

}

})