// // console.log('button clicking file added')

// //document.getElementById.addEventListener('click',function(){}) 
// // document.getElementById('button-login')
// //     .addEventListener('click',function(){ })


// // search: form submit reloding the page
// // step-1: event handler
// document.getElementById('button-login')
// .addEventListener('click',function(event){
//     //step:2 prevent default behavior (reloading browser)
//     event.preventDefault();  // ><--- vejal
//         console.log('login button clicked');

// //step-3: get the phone number and pin number
// const phoneNumber = document.getElementById('phone-number').value;  //.value na dile input field e ja dibo show korbe na
// const pinNumer = document.getElementById('pin-number').value;
// console.log(phoneNumber,   pinNumer );

// //step:4 validate phone and pin
// //tjis is temporary 
// if(phoneNumber === '5' && pinNumer ==='1234'){
//     console.log("You are logged in");
// //step-5: allows user to use the website

// }
// else{
//     alert('Wrong phone number or Pin');
// }

//      })



document.getElementById('button-login')
.addEventListener('click',function(event){
 event.preventDefault();

 //get phone no and pin 
const  phoneNumber = document.getElementById('phone-number').value ;
const  pinNumber = document.getElementById('pin-number').value ;
console.log(phoneNumber,pinNumber);

//bad way to validate
if(phoneNumber === '5' && pinNumber === '1234'){
console.log('You are logged in');
window.location.href = '/home.html';

}
else{
    alert('Worng phone no or  Pin')
}
})


