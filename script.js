const primeWorker = new Worker("./worker.js");
primeWorker.addEventListener('message', messageReceived)
let loader = document.getElementById('loader');
const fibWorker = new Worker("./workerFib.js");
fibWorker.addEventListener('message', messageReceivedFib)
let loader2 = document.getElementById('loader2');
const factWorker = new Worker("./workFact.js")
factWorker.addEventListener('message', messageReceivedFact)
let loader3 = document.getElementById('loader3');

function calcPrime(number) {
    let parse = parseInt(number)
    if (!isNaN(parse)) {
        primeWorker.postMessage(parse);
        let par = document.getElementById('result-prime');
        par.textContent = ""
        loader.style.display = "block";
    }
}

function calcFactorial(number) {
    let parse = parseInt(number)
    if (!isNaN(parse)) {
        factWorker.postMessage(parse);
        loader2.style.display = "block";
    }
}

function calcFibonacci(number) {
    let parse = parseInt(number)
    if (!isNaN(parse)) {
        fibWorker.postMessage(parse);
        loader3.style.display = "block";
    }
}

function messageReceived(event) {
    loader.style.display = "none";
        let primeToNumber = event.data;
        let par = document.getElementById('result-prime');
    
        for (const prime of primeToNumber) {
            par.textContent += prime + " " 
        }
}

function messageReceivedFib(event) {
    loader3.style.display = "none";
        let fibToNumber = event.data;
        let par = document.getElementById('result-fibonacci');
        par.textContent = fibToNumber
}

function messageReceivedFact(event) {
    loader2.style.display = "none";
        let factToNumber = event.data;
        let par = document.getElementById('result-factorial');  
        par.textContent = factToNumber;
}

function reset() {
    let par = document.getElementById('result-prime');
    par.textContent = ""
    let par2 = document.getElementById('result-fibonacci');
    let par3 = document.getElementById('result-factorial');  

    par2.textContent = ""
    par3.textContent = ""
}