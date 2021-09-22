const { isDeepEqual } = require("./objUtils");

function mean(array){
    let sum = 0;
    if(array === undefined) throw 'No inputs passed';
    if (!(Array.isArray(array))) throw 'The parameter is not Array type';
    if (array.length === 0) throw 'The array is empty';
    if(!(array.every((val) => typeof val === "number"))) throw 'The elements in array are not of number type';
    array.forEach((value) => {
        sum += value;
      });
    return sum/(array.length);
}

function medianSquared(array) {
    if(array === undefined) throw 'No inputs passed';
    if (!(Array.isArray(array))) throw 'The parameter is not Array type';
    if (array.length === 0) throw 'The array is empty';
    if(!(array.every((val) => typeof val === "number"))) throw 'The elements in array are not of number type';
    if (array.length % 2 == 0){
        let index = (array.length)/2;
        return ((array[index] + array[index - 1])/2)**2;
    };
    if (array.length % 2 != 0){
        let index = (array.length)/2;
        return (array[Math.floor(index)])**2;
    };
}

function maxElement(array){
    if(array === undefined) throw 'No inputs passed';
    if (!(Array.isArray(array))) throw 'The parameter is not Array type';
    if (array.length === 0) throw 'The array is empty';
     
    let maxElement = array[0];
    let maxElementObj = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElement){
            maxElement = array[i];
        }
    }
    maxElementObj[maxElement] = array.indexOf(maxElement);
    return maxElementObj;
}

function fill(end, value) {
    let fillArray = [];
    if (end <= 0) throw'The number should be greater than zero and a positive number';
    if(end === undefined) throw  'No values passed';
    if(typeof end !== "number" && value===undefined) throw 'No values passed';
    if (!(typeof end == "number")) throw 'the value must be the number type';
    for(let i=0; i< end; i++){
        if (value === undefined){
            fillArray.push(i);
        }
        else{
            fillArray.push(value);
        }
    }
    return fillArray;
}

function countRepeating(array){
    let emptyObj = {};
    if(array === undefined) throw 'No inputs passed';
    if (!(Array.isArray(array))) throw 'The parameter is not Array type';
    if (array.length === 0) return emptyObj;
    if(!(array.every((val) => (typeof val === "number") || (typeof val === "string")))) throw 'The elements in array are not of number or string type';
    resultValue = {};
    result = {};
    for (let i=0; i<array.length; i++){
        if (Object.keys(resultValue).includes(array[i].toString())){
            resultValue[array[i]] += 1;
        }
        else{
            resultValue[array[i]] = 1;
        }
    }
    for(let i = 0; i< array.length; i++){
        if (resultValue[array[i]] >= 2){
            result[array[i]] = resultValue[array[i]]
        }
    }
    return result;
}
function isEqual(arrayOne, arrayTwo){
    if(arrayOne === undefined || arrayTwo === undefined) throw 'No inputs passed';
    if (!(Array.isArray(arrayOne)) || !(Array.isArray(arrayTwo))) throw 'The parameter is not Array type';
    if(arrayOne.length === 0 && arrayTwo.length ===0) return true;
    let result = false;
    if (arrayOne.length !== arrayTwo.length){
        return false;
    } else{
        arrayOne.sort();
        arrayTwo.sort();
        for(let i = 0; i < arrayOne.length; i++){
            if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])){
                result = isEqual(arrayOne[i], arrayTwo[i])
                if (result === false){
                    return false;
                }
            } else {
                if (arrayOne[i] === arrayTwo[i]){
                    result = true;
                }
                else{
                    return false;
                }
            }
        }  
    }
    return result;
}
   
//     const arraycomp = function arraycomp(arrayOne,arrayTwo){

//         if(arrayOne.length !== arrayTwo.length) {
//            result = false;
//            return false;
//         }
        
        
//             for (i=0; i<arrayOne.length; i++)
//             {
//                 arrayOne.sort();
//                 arrayTwo.sort();
//                 if (arrayOne[i] !== arrayTwo[i])
//                 {
//                     result = false;
//                 }
//                 else
//                 {
//                     result = true;
//                 }
//             }
//     }
    
//     const nestedarr = function nestedarr(arrayOne,arrayTwo){
//         // console.log(arrayOne,arrayTwo)
//         if(arrayOne.length !== arrayTwo.length) { 
//             result = false;
//         }
         
//         for(let i =0; i<arrayOne.length; i++)
//         {
//                 arraycomp(arrayOne[i], arrayTwo[i]);
//                 if(result==false){
//                     break;
//                 }
                
//         }
        
//     }

//     for(i=0; i<arrayOne.length; i++)
//     {
//         if(Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) 
//         {
//             nestedarr(arrayOne,arrayTwo);
//             break;
//         }
//         else
//         {
//             arraycomp(arrayOne,arrayTwo);
//             break;
//         }
//     }
//     return result
    
// }



module.exports = {
    mean,
    medianSquared,
    maxElement,
    fill,
    countRepeating,
    isEqual
};


// console.log(isEqual([1, 2, 3], [3, 1, 2])); // Returns: true
// console.log(isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z'])); // Returns: true
// console.log(isEqual([1, 2, 3], [4, 5, 6])); // Returns: false
// console.log(isEqual([1, 3, 2], [1, 2, 3, 4])); // Returns: false
// console.log(isEqual([1, 2], [1, 2, 3])); // Returns: false
// console.log(isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7,7,7, 8 ]])); // Returns: true
// console.log(isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 11 ], [ 9, 7, 8 ]])); // Returns: false
// console.log(isEqual([null, null, null], [null, null, null])); // Returns: true
