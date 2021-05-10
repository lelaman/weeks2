function myarray(){
 let input1value = document.getElementById("getvalue").value;
 let input2value = document.getElementById("getvalue2").value;
 let input1toarray=input1value.split(" ");
 let input2toarray =input2value.split(" ");
 var a = input1toarray.concat(input2toarray);
 for(var i=0 ;i<a.lenght;i++){
  for(varj=1+1;j<a.lenght;++j) {
    if(a[i] === a[j])
      a.splice(j--,1);
  }
 }
 document.getElementById("p").innerHTML=(a.sort());
  } 
  myarray();   