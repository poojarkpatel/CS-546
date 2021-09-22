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
        return (array[index] + array[index - 1])/2;
    };
    if (array.length % 2 != 0){
        let index = (array.length)/2;
        return array[Math.floor(index)];
    };
}

function maxElement(array){
    if(array === undefined) throw 'No inputs passed';
    if (!(Array.isArray(array))) throw 'The parameter is not Array type';
    if (array.length === 0) throw 'The array is empty';
    if(!(array.every((val) => typeof val === "number"))) throw 'The elements in array are not of number type';
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
    if(end === undefined && value == undefined) throw  'No values passed';
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

}

function isEqual(arrayOne, arrayTwo){
    
}

function camelCase(string){
    if (string === undefined) throw 'No input passed';
    if(string.length < 0) throw 'string length is less than 0';
    if(!(typeof string == "string")) throw 'Not string type';
    let splittedValuesArray = string.split(" ");
    


    
}

function replaceChar(string){

}

function mashUp(string1, string2){

}

function makeArrays([objects]){

}

function isDeepEqual(obj1, obj2){

}

function computeObject(object, func){

}

module.exports = {
    mean,
    medianSquared,
    maxElement,
    fill, 
    camelCase
};
