const arrayUtils = require('./arrayUtils');
try {
    let meanOfNumbers = arrayUtils.mean();
  } catch (e) {
    // console.log(e);
  }
  try {
    let medianOfNumbers = arrayUtils.medianSquared([1,2,3,4]);
    // console.log(medianOfNumbers);
  } catch (e) {
    console.log(e);
  }

  try {
    let maxElement = arrayUtils.maxElement([1,2,3,4]);
    // console.log(maxElement);
  } catch (e) {
    console.log(e);
  }

  try {
    // let fill = arrayUtils.fill();
    // let fill = arrayUtils.fill("test");;
    // let fill = arrayUtils.fill(0);;
    // let fill = arrayUtils.fill(-4);;
    // let fill = arrayUtils.fill(3, 'Welcome');
    let fill = arrayUtils.fill(6);
    console.log(fill);
  } catch (e) {
    console.log(e);
  }
