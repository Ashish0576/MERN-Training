function printTable(){
   let num= parseInt(document.getElementById("tb1").value)
   for(let i=1;i<=10;i++){
     document.getElementById("para1").innerHTML+= `${num*i}   `;
   }
}

