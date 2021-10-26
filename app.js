let a;
console.log(a);

if (a === undefined) {
  console.log('a is undefined!');
} else {
    console.log('a is defined!');
}

function b(){
  let myVar;
  console.log(myVar);
}
function a(){
    let myVar = 2;
    console.log(myVar);
    b();
let myVar = 1;
console.log(myVar);
a();
}


