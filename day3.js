//function
testfunction();{
    console.log("Hello MCA")
}
testfunction();

//function with arguments
function testfunction(x,y){
    return(x+y);
}
console.log(testfunction(10,10));


//function as expression
let t=function testfunction(x,y){
    return(x+y);
}
console.log(t(10,20));

//function with default value

function testfunction(x = 20, y) { 
    let z = x + y;
    return z;
  }
  
  let result = testfunction(5); 
  console.log(result); 
  
//anonimous function
let s=function(){
    console.log("Anonymous function")
}
s()

//arrow function
let c=()=>{
    console.log("Arrow Function")
}
c();