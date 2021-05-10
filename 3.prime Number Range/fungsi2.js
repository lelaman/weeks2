function prime () {
    let x = Number(document.getElementById("A").value);
    let y= Number(document.getElementById("B").value);
     while(x<=y) {
      let f=0;
      for(let j=2;j<=parseInt(x/2);j++) {
        if(x%j==0) { 
          f=1;
          break;
        }
      }
      if(f==0)  
        document.write( x  + " ");
        
       x=x+1;
     }
   }