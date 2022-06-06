var currentNumber = 0;

function increment(){
    currentNumber+=1;
    document.getElementById('currentNumber').innerHTML=currentNumber;
    if(currentNumber >= 0){
        document.getElementById('currentNumber').style.color='black';
    }
}
function decrement(){
    currentNumber-=1;
    document.getElementById('currentNumber').innerHTML=currentNumber;
if(currentNumber < 0){
    document.getElementById('currentNumber').style.color='red';
}
}