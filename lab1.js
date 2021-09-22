const questionOne = function questionOne(arr) {
    let primeNumberObj = {};
    if (arr === undefined || arr.length === 0){
        return primeNumberObj
    }
    arr.forEach((value) => {
        if (value < 1 || value == 1){
            primeNumberObj[value] = false;
            // console.log(value)

        }
        else if( value == 2){
            primeNumberObj[value] = true;
        }
        else{
            for (let i=2; i < value; i++){  
                // console.log(i,value);
                if (value % i==0){
                    // console.log(`${value} modulo ${i} is 0`);
                    primeNumberObj[value] = false;
                    break;
                }
                else{
                    // console.log(`${value} modulo ${i} is  not 0`);
                    primeNumberObj[value] = true;
                    };
            };
        }
      });
    return primeNumberObj;
}

const questionTwo = function questionTwo(arr) { 
    let sumOfSquare = 0;
    if (arr === undefined || arr === null || arr.length === 0){
        return 0;
    };
    arr.forEach((value) => {
        squareValue = value * value;
        sumOfSquare += squareValue;
      });
    let toThePowerOf = Math.pow(sumOfSquare, 5);
    let squareRootValue = Math.sqrt(toThePowerOf).toFixed(2);
    return squareRootValue;
}

const questionThree = function questionThree(text) {
    let stringObj = {'consonants': 0,  'vowels': 0,  'numbers': 0, 'spaces': 0,  'punctuation': 0, 'specialCharacters': 0};
    arrayText = Array.from(text);
    const punctuationsArray = ['!' , ',' , ';' , '.' ,'?' , '-' , '\'' , '\"' , ':'];
    const numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
    arrayText.forEach((value) => {
        if ('aeiouAEIOU'.includes(value)){
            stringObj['vowels'] += 1;
        } else if(numbersArray.includes(value)) {
            stringObj['numbers'] += 1;
        } else if (" ".includes(value)){
            stringObj['spaces'] += 1;
        } else if (punctuationsArray.includes(value)){
            stringObj['punctuation'] += 1;
        } else if((value >= 'a' && value<= 'z') || (value >= 'A' && value<= 'Z')){
            stringObj['consonants'] += 1;
        }else{
            stringObj['specialCharacters'] += 1;
        }
    });
    return stringObj;
}

const questionFour = function questionFour(num1, num2,num3) {
    let interestRate = (num2/12)/100;
    let term = num3 * 12;
    let toThePower = Math.pow((1 + interestRate), term)
    let monthlyLoan = (num1 * toThePower * interestRate) / (toThePower-1);
    return monthlyLoan.toFixed(2);
}

module.exports = {
    firstName: "Poojaben", 
    lastName: "Patel", 
    studentId: "10456923",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
