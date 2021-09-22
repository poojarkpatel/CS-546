function makeArrays(objects){
    if(objects === undefined) throw 'No inputs passed';
    if (!(Array.isArray(objects))) throw 'The parameter is not Array type';
    if(!(objects.every((val) => typeof val === 'object'))) throw 'The elements in array are not of objects type';
    if(!(objects.every((val) => Object.keys(val).length !== 0))) throw 'The object is empty';
    if (objects.length < 2) throw 'Atleast 2 objects required';
    objectsArray = objects;
    let mainObjectArray = [];
    for (let i=0; i < objectsArray.length; i++){
        let object = objectsArray[i];
        keys = Object.keys(object);
        values = Object.values(object);
        for(let j=0; j <keys.length ; j++){
            let subArray = [];
            subArray.push(keys[j]);
            subArray.push(values[j]);
            mainObjectArray.push(subArray);
        }
    }
    return mainObjectArray;
    
}

function isDeepEqual(obj1, obj2){
    if(obj1 === undefined || obj2 === undefined) throw 'No inputs passed';
    if(!( typeof obj1 === 'object') || !( typeof obj1 === 'object')) throw 'Not an object';
    if ((Array.isArray(obj1)) || (Array.isArray(obj2))) throw 'Values should not be an array';
    let keyObj1 = Object.keys(obj1).sort();
    for (const key of keyObj1){
        // console.log(key)
        let valueObj1 = obj1[key];
        let valueObj2 = obj2[key];
        // console.log(obj1[key], obj2[key]);
        if ((Array.isArray(valueObj1)) && (Array.isArray(valueObj2))) throw 'Values should not be an array';
        if (!obj2[key]){
            return false;
        }
        if (typeof(valueObj1) !== typeof(valueObj2)) return false;
        
        if ((valueObj1 !== valueObj2) &&(typeof(valueObj1) !== 'object' && typeof(valueObj2) !== 'object')){
            return false;
        }
        if((typeof(valueObj1) === 'object' && typeof(valueObj2) === 'object') && (!isDeepEqual(valueObj1, valueObj2))){
            return false;
        }
    }
    return true;
}

function computeObject(object, func){
    if(object === undefined || func === undefined) throw 'No inputs passed';
    if(!( typeof object === 'object')) throw 'The input is not of object type';
    if (Array.isArray(object)) throw 'Values should not be an array';
    if(!( typeof func === 'function')) throw 'The second input is not function';
    if(Object.keys(object).length < 1) throw 'The object is empty';
    let values = Object.values(object);
    if(!(values.every((val) => typeof val === 'number'))) throw 'The values are not of number type';
    let obj = {};
    let keys = Object.keys(object);
    let computeFunc = func;
    for(let i=0; i< values.length; i++){
        obj[keys[i]] = computeFunc(values[i]);
    }
    return obj;
}


module.exports = {
    makeArrays,
    computeObject,
    isDeepEqual
};

