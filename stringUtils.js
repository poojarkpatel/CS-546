
function camelCase(string){
    if (string === undefined) throw 'No input passed';
    if(string.trim().length <=0) throw 'string length is less than 0';
    if(!(typeof string === "string")) throw 'Not string type';
    let splittedValuesArray = string.toLowerCase().split(" ");
    let returnValue = "";
    for(let i=1; i< splittedValuesArray.length; i++){
        splittedValuesArray[i] = splittedValuesArray[i].charAt(0).toUpperCase() + splittedValuesArray[i].slice(1);
    }
    for (let i=1; i< splittedValuesArray.length; i++){
        returnValue = splittedValuesArray.join("");
    }
    return returnValue;
}

function replaceChar(string){
    if (string === undefined) throw 'No input passed';
    if(string.trim().length <= 0) throw 'string length is less than 0';
    if(!(typeof string === "string")) throw 'Not string type';
    let string1 = string.trim();
    let firstChar = string1.charAt(0);
    let starFlag = true;
    let returnValue = string1[0];
    for (let i=1; i < string1.length; i++){
        if (string1[i].toLowerCase() === firstChar.toLowerCase()){
            if (starFlag){
                returnValue =  returnValue + "*";
                starFlag = false;
            }
            else{
                returnValue = returnValue +  "$";
                starFlag = true;
            }

        } 
        else{
            returnValue += string1[i];
        }
    }
    return returnValue;
}
        


function mashUp(string1, string2){
    if ((string1 === undefined) ||(string2 === undefined)) throw 'No input passed';
    if((string1.trim().length <= 0) || (string2.trim().length <= 0)) throw 'string length is less than 0';
    if((string1.trim().length < 2) || (string2.trim().length < 2)) throw 'Atleast two characters required';
    if(!(typeof string1 === "string") && !(typeof string2 === "string")) throw 'Not string type';
    let string1FirstChar = string1.charAt(0);
    let string2FirstChar = string2.charAt(0);
    let string1SecondChar = string1.charAt(1);
    let string2SecondChar = string2.charAt(1);
    let lastPart1String = string1.substr(2);
    let lastPart2String = string2.substr(2);
    let finalString1 = string2FirstChar.concat(string2SecondChar + lastPart1String);
    let finalString2 = string1FirstChar.concat(string1SecondChar + lastPart2String);
    returnValue = finalString1 + " " + finalString2;
    return returnValue;
}


module.exports = {
    mashUp,
    replaceChar,
    camelCase
};
