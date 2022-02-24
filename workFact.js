addEventListener('message', messageReceived);


function messageReceived(event) {
    let numberToReach = event.data;
    let factOfNumber = calcFactorial(numberToReach);
    postMessage(factOfNumber);
}

function calcFactorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * calcFactorial(number - 1);
}