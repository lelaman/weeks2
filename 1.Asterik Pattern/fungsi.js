function bintang() 
            {
                let num = document.getElementById('inp').value;
                 for (let i=1;i<num;i++)
                 {
                    for (let j=1; j<=i; j++) {
                        document.getElementById('p').innerHTML  += '*';

                    }
                         document.getElementById('p').innerHTML  += '<br>';
                 }
                
            }