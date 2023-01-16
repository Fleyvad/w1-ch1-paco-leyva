
const screenNumber = document.querySelector('.screen');
const numbers = document.getElementsByClassName('number');
const operator = document.getElementsByClassName('operator')
const result = document.querySelector('.result')

const setOfNumberKeys = Array.from(numbers);
const setOfOperatorKeys = Array.from(operator);

const lisOfNumbers = [];
let operatorElection = '';
let accumulator2 = 0;

setOfNumberKeys.forEach((element) => {
    element.addEventListener('click', () => {

        if (lisOfNumbers.length === 1 && operatorElection !== '' && accumulator2 === 0) {
            screenNumber.innerHTML = '' + element.innerHTML;

            accumulator2++

            return

        }
        if(element.innerHTML === '.'){
          
            if(screenNumber.innerHTML.includes('.')) return;
        }
       if (screenNumber.innerHTML !== '' && accumulator2 >= 1) {
            screenNumber.innerHTML += element.innerHTML;
       
        } else {
           /*  if(screenNumber.innerHTML.includes('')) return; */
            screenNumber.innerHTML += element.innerHTML;

        }
    });
});


setOfOperatorKeys.forEach((operator) => {
    operator.addEventListener('click', () => {


        if (operatorElection === '' && lisOfNumbers.length === 0) {

            lisOfNumbers.push(+screenNumber.innerHTML);
            operatorElection = operator.innerHTML

            return
        }
        if (operatorElection === '' && lisOfNumbers.length === 1) {
            operatorElection = operator.innerHTML;
        }

        if (operator.innerHTML === 'ac') {
            reset();
        }
        if (operatorElection !== '' && lisOfNumbers.length === 2) {
            lisOfNumbers.push(+screenNumber.innerHTML);
            calculatorElection(operatorElection)
            refactor();
            operatorElection = operator.innerHTML;
        }
        if (+screenNumber.innerHTML === lisOfNumbers[0]) {
            operatorElection = operator.innerHTML;
            return
        }

        if (operatorElection !== '' && lisOfNumbers.length === 1) {

            lisOfNumbers.push(+screenNumber.innerHTML);
            calculatorElection(operatorElection)
            refactor();
            operatorElection = operator.innerHTML;
            return
        }

        if (operatorElection !== '' && lisOfNumbers.length === 1) {
            operatorElection = operator.innerHTML;
        }




    });
});



result.addEventListener('click', () => {

    lisOfNumbers.push(+screenNumber.innerHTML);
    calculatorElection(operatorElection)
    refactor();

    return

})




const reset = () => {
    lisOfNumbers.splice(0)
    screenNumber.innerHTML = '';
    operatorElection = ''
    accumulator2 = 0;
}

const refactor = () => {
    lisOfNumbers.splice(0)
    lisOfNumbers.push(+screenNumber.innerHTML);
    operatorElection = ''
    accumulator2 = 0;
}

const calculatorElection = (operator) => {
    switch (operator) {
        case '+':
            addition(lisOfNumbers);
            break;
        case '-':
            subtraction(lisOfNumbers);
            break;
        case 'x':
            multipication(lisOfNumbers);
            break;
        case '/':
            division(lisOfNumbers);
            break;
        default:
            return;
    }
}




const addition = (lisOfNumbers) => {
    let accumulator = 0;
    for (let i = 0; i < lisOfNumbers.length; i++) {

        accumulator += lisOfNumbers[i];
    }
    screenNumber.innerHTML = accumulator;
    return 
}

const subtraction = (lisOfNumbers) => {


    lisOfNumbers[0] - lisOfNumbers[1]

    screenNumber.innerHTML = lisOfNumbers[0] - lisOfNumbers[1];
    return 
}

const multipication = (lisOfNumbers) => {
    let accumulator = 1;
    for (let i = 0; i < lisOfNumbers.length; i++) {

        accumulator *= lisOfNumbers[i];
    }
    screenNumber.innerHTML = accumulator;
    return 
}

const division = (lisOfNumbers) => {
    let accumulator = lisOfNumbers[0];
    for (let i = 1; i < lisOfNumbers.length; i++) {

        accumulator /= lisOfNumbers[i];
    }
    screenNumber.innerHTML = accumulator.toFixed(1);
    return 
}

