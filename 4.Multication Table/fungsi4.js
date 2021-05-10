function bintang(){
                let num = document.getElementById('inp').value;
                let i = 1;
                 for (let i=1;i<=10;i++) {
                        document.getElementById('p').innerHTML  += 
                        (  + num  + "x" + i
                        + " = " + num * i + "<br>");
                         
                 } 
                
                 
            }