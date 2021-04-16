function quickSort(array) {
    
    
 if (array.length <2){
        return array;
}
 
 var pivot = array.pop();
 
 var minor = [];
 var major = [];
 
 for (var value of array){
      value < pivot ? major.push (value) : minor.push(value);
   // value < pivot ? major.push (pivot) : minor.push(pivot); 
 
 
 }
     return [...quickSort(minor), pivot,...quickSort(major)];

}


        const arr = [2,5,9,3,4,7,1]
      
console.log(quickSort.toString().includes('.sort')); //.to.be.false;
   
        
console.log(quickSort(arr)).to.be.deep.equal(arr.sort().reverse());
 