function isValidWalk(walk) {
  //insert brilliant code here
  //['n', 's', 'w', 'e']
  
  var arrWalk = walk;
  
 if (arrWalk.length === 10){
    
      return true;
      
  } 

  if (arrWalk > 10) {

    return false
    
  }

  if (arrWalk < 10 ) {
    return true;
    
  }
  
}