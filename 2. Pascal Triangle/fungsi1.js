function bintang() {
            const x =new Array();
            const num = document.getElementById('inp').value;
            for(i=1;i<=num;i++) {
                x[i] =new Array();
                for(j=1;j<=i;j++){
                    if(j==1 || j==i) {
                        x[i][j]=1;

                    } else {
                        x[i][j]=x[i-1][j-1]+ x[i-1][j];
                    }
                }
            }
            for(i=1;i<=num;i++){
                for(j=1;j<=i;j++){
                   document.getElementById('p').innerHTML  += (x[i][j]+ " ");

                }
                  document.getElementById('p').innerHTML  += '<br>';

            }
        }