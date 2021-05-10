function bintang() {
 				
                let ch= document.getElementById('inp').value;
                if(ch=='a'|| ch=='e'|| ch=='u'||ch=='i'||ch=='o') {
                  document.getElementById('p').innerHTML  =(ch+  ' adalah  huruf konsonan');
                } else {
                  document.getElementById('p').innerHTML  = (ch +   ' adalah  bukan konsonan');
                }   
            }