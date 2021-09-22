
const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils")

// Mean tests

try {
    // Should Pass
    const meanOne = arrayUtils.mean([2, 3, 4]);
    console.log('mean passed test case successfully');
 } catch (e) {
    console.error('mean failed sucessfully');
 }
 try {
    // Should Fail
    const meanTwo = arrayUtils.mean(1234);
    console.error('mean did not error');
 } catch (e) {
    console.log('mean failed successfully');
 }

//  medianSquared test cases

try {
   // Should Pass
   const medianOne = arrayUtils.medianSquared([1, 2, 3, 4]);
   console.log('medianSquared passed successfully');
} catch (e) {
   console.error('MedianSquared failed sucessfully');
}
try {
   // Should Fail
   const medianTwo = arrayUtils.medianSquared(["a", 1, "b", 3]);
   console.error('mediansquared did not error');
} catch (e) {
   console.log('medianSquared failed successfully');
}


//maxElement tests 

try {
   // Should Pass
   const max = arrayUtils.maxElement([1, 2, 4, 5]);
   console.log('maxElement passed successfully');
} catch (e) {
   console.error('maxElement failed test case');
}
try {
   // Should Fail
   const max = arrayUtils.maxElement();
   console.error('maxElement did not error');
} catch (e) {
   console.log('maxElement failed successfully');
}


//fill tests

try {
   // Should Pass
   const fill = arrayUtils.fill(6);
   console.log(fill);
   console.log('fill passed successfully');
} catch (e) {
   console.error('fill failed test case');
}
try {
   // Should Fail
   const fill = arrayUtils.fill("test");
   console.error('fill did not error');
} catch (e) {
   console.log('fill failed successfully');
}

 //countRepeating tests 

try {
   // Should Pass
   const countRepeating = arrayUtils.countRepeating(['a', 'a', 'b', '8', 8, 8]);
   console.log(countRepeating);
   console.log('countRepeating passed successfully');
} catch (e) {
   console.error('countRepeating failed test case');
}
try {
   // Should Fail
   const countRepeating = arrayUtils.countRepeating([7, '7', 13, true, null]);
   console.error('countRepeating did not error');
} catch (e) {
   console.log('countRepeating failed successfully');
}

// isEqual Tests 

try {
   // Should Pass
   const isEqual = arrayUtils.isEqual([], []);
   console.log(isEqual);
   console.log('isEqual passed successfully');
} catch (e) {
   console.error('isEqual failed test case');
}
try {
   // Should Fail
   const isEqual = arrayUtils.isEqual({0: [[1,2,3]]},[10, 4, 16 ]);
   console.error('isEqual did not error');
} catch (e) {
   console.log('isEqual failed successfully');
}



//camelCase tests

try {
    // Should Pass
    const camelCase = stringUtils.camelCase('FOO BAR');
    console.log('camelCase passed successfully');
 } catch (e) {
    console.error('camelCase failed test case');
 }
 try {
    // Should Fail
    const camelCase = stringUtils.camelCase(["Hello", "World"]);
    console.error('camelCase did not error');
 } catch (e) {
    console.log('camelCase failed successfully');
 }

//replaceChar tests

try {
    // Should Pass
    const replaceChar = stringUtils.replaceChar("    Hello, How are you? I hope you are well");
    console.log('replaceChar passed successfully');
 } catch (e) {
    console.error('replaceChar failed test case');
 }
 try {
    // Should Fail
    const replaceChar = stringUtils.replaceChar(123);
    console.error('replaceChar did not error');
 } catch (e) {
    console.log('replaceChar failed successfully');
 }

//mashUp tests
                                         
try {
    // Should Pass
    const mashUp = stringUtils.mashUp("hello", "world");
    console.log('mashUp passed successfully');
 } catch (e) {
    console.error('mashUp failed test case');
 }
 try {
    // Should Fail
    const mashUp = stringUtils.mashUp("h", "Hello");
    console.error('mashUp did not error');
 } catch (e) {
    console.log('mashUp failed successfully');
 }



//makeArrays Tests
                                         
const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
let objects1 = [first, second, third];                                      
let objects2 = {third, second, first};                                       

try {
   // Should Pass
   const makeArray = objUtils.makeArrays(objects1);
   console.log('makeArrays passed successfully');
} catch (e) {
   console.error('makeArrays failed test case');
}
try {
   // Should Fail
   const makeArray = objUtils.makeArrays(objects2);
   console.error('mmakeArrays did not error');
} catch (e) {
   console.log('makeArrays failed successfully');
}


//isDeepEqual tests
                                
try {
   // Should Pass
   const isDeepEqual = objUtils.isDeepEqual({a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}, {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}});
   console.error('isDeepEqual passed sucessfully');
} catch (e) {
   console.error('isDeepEqual failed test case');
}
try {
   // Should Fail
   const isDeepEqual = objUtils.isDeepEqual({"c": {"a":"b"}, a: 1}, [1, 3,{"a":"b"}]);
   console.error('isDeepEqual did not error');
} catch (e) {
   console.log('isDeepEqual failed successfully');
}

//computeObject tests
 
try {
   // Should Pass
   const computeObject = objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
   console.log('computeObject passed successfully');
} catch (e) {
   console.error('computeObject failed test case');
}
try {
   // Should Fail
   const computeObject = objUtils.computeObject([1,2,3], n => n*2);
   console.error('computeObject did not error');
} catch (e) {
   console.log('computeObject failed successfully');
}




