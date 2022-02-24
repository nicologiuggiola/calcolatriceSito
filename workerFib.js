addEventListener('message', messageReceived);


function messageReceived(event) {
    let numberToReach = event.data;
    let fibOfNumber = calcFibonacci(numberToReach);
    postMessage(fibOfNumber);
}

function calcFibonacci(number) {
    if(number === 0){
        return 0;
    }
        
    if (number === 1) {
        return 1;
    }
        
    return calcFibonacci(number - 1) + calcFibonacci(number - 2);
}