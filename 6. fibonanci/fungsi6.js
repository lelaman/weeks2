let kita1 =0;
  	let kita2 =1;
  	let kita3;
  	function peta() {
  	let num = document.getElementById("number").value;
       document.getElementById('p').innerHTML  += (kita1 + " ");
       document.getElementById('p').innerHTML  += (kita2 + " ");
  	 for(let i=1; i<num;i++)
  	 {
  	 	kita3=kita1+kita2;
  	 	kita1=kita2;
  	 	kita2=kita3;
  	 	document.getElementById('p').innerHTML  += (  kita3 + " ");
  	 }
    
}