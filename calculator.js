document.getElementById("calculate").addEventListener('click', calculateTip)
let serviceTip = 0;
document.getElementById("five").addEventListener('click', () => serviceTip = 5)
document.getElementById("ten").addEventListener('click', () => serviceTip = 10)
document.getElementById("fifteen").addEventListener('click', () => serviceTip = 15)
document.getElementById("twenty").addEventListener('click', () => serviceTip = 20)
document.getElementById("fifty").addEventListener('click', () => serviceTip = 50)
document.getElementById("serviceCharge").addEventListener('keyup', () => serviceTip = document.getElementById('serviceCharge').value)



// function updateServiceTip(){
//     serviceTip = 5;
//     console.log(`The value of service tip is ${serviceTip}`)
// }


function calculateTip(){
// gets user input from the dom
    // console.log(`The value of service tip is ${serviceTip}`)

    let userBill = document.getElementById("bill").value
    let numberOfPeople = document.getElementById("people").value
    // let serviceTip = document.getElementById('serviceCharge').value

    if(userBill === "" || numberOfPeople === "" ){
        alert('All Input fields must be filled')
    }else{
// calculates tip per person
    let tipAmount = (serviceTip / 100)*userBill;
    tipAmount = tipAmount.toFixed(2)
    document.getElementById('tip-fee').innerHTML = "$"+tipAmount;
// calulates total per person
    let total = (parseInt(userBill) / numberOfPeople) + parseInt(tipAmount);
    total = total.toFixed(2);
    document.getElementById('total-fee').innerHTML = "$"+total
       
    }


}