// // function calculatePrimeNumbersTo(number) {
// //     let array = Array.from({length: number - 1}, (v, i) => i + 2);
// //     return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
// // }


// // let primeTo100 = calculatePrimeNumbersTo(1000000);

// // let par = document.getElementById('prime-numbers');

// // for (const prime of primeTo100) {
// //     const node = document.createTextNode(prime + " ");
// //     par.appendChild(node);
// // }

// const primeWorker = new Worker("./worker.js");
// primeWorker.addEventListener('message', messageReceived)


// let message = {operation:"prime", numberToReach:300000};
// let message2 = {operation:"sum", numberToReach:100000};
// primeWorker.postMessage(message);
// let loader = document.getElementById('loader');
// loader.style.display = "inline-block";


// function messageReceived(event) {
//     loader.style.display = "none";
//     if (event.data.operation === "prime") {
//         let primeToNumber = event.data.result;
//         let par = document.getElementById('prime-numbers');
    
//         for (const prime of primeToNumber) {
//             const node = document.createTextNode(prime + " ");
//             par.appendChild(node);
//         }
//     } else {
//         let par = document.getElementById('prime-numbers');
//         let sum = event.data.result;
//         const node = document.createTextNode(sum);
//         par.appendChild(node);
//     }

// }

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
    primeWorker.postMessage(number);
    let par = document.getElementById('result-prime');
    par.textContent = ""
    loader.style.display = "block";
}

function calcFactorial(number) {
    factWorker.postMessage(number);
    loader2.style.display = "block";
}

function calcFibonacci(number) {
    fibWorker.postMessage(number);
    loader3.style.display = "block";
}

function messageReceived(event) {
    loader.style.display = "none";
        let primeToNumber = event.data;
        let par = document.getElementById('result-prime');
    
        for (const prime of primeToNumber) {
            // const node = document.createTextNode(prime + " ");
            // par.appendChild(node);
            par.textContent += prime + " " 
        }
}

function messageReceivedFib(event) {
    loader3.style.display = "none";
        let fibToNumber = event.data;
        let par = document.getElementById('result-fibonacci');
        //const node = document.createTextNode(fibToNumber);
        //par.appendChild(node);
        par.textContent = fibToNumber
}

function messageReceivedFact(event) {
    loader2.style.display = "none";
        let factToNumber = event.data;
        let par = document.getElementById('result-factorial');  
        // const node = document.createTextNode(factToNumber);
        // par.appendChild(node);
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