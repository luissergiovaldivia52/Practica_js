function primalityTest(num) {
        if (num <= 1) { return false }

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}


console.log(primalityTest(121));


console.log(primalityTest(2));//.to.be.true;
console.log(primalityTest(3));//.to.be.true;
console.log(primalityTest(5));//.to.be.true;
console.log(primalityTest(7));//.to.be.true;
        
        
console.log(primalityTest(4));//.to.be.false;
console.log(primalityTest(6));//.to.be.false;
console.log(primalityTest(6));//.to.be.false;
console.log(primalityTest(8));//.to.be.false;
console.log(primalityTest(9));//.to.be.false;
     
console.log(primalityTest(-1));//.to.be.false;
console.log(primalityTest(0));//.to.be.false;
console.log(primalityTest(1));//.to.be.false;
        
  
console.log(primalityTest(1902680207));//.to.be.true;
   