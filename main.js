'use strict';
{

  let limit = 30;

  for (let num=2; num <= limit; num++) {
  
    // const num = 10;

    let sosuu = true;

    for (let i=2; i< num; i++) {
      if (num % i === 0) {
        sosuu = false;
        // break;
      } 
    }
    
    if (sosuu === true) {
      console.log(num + " is sosuu");
    } else {
      console.log(num + " is not sosuu");
    }
  }




}