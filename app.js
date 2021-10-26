// let a;
// console.log(a);

// if (a === undefined) {
//   console.log('a is undefined!');
// } else {
//     console.log('a is defined!');
// }

// function b(){
//   let myVar;
//   console.log(myVar);
// }
// function a(){
//     let myVar = 2;
//     console.log(myVar);
//     b();
// let myVar = 1;
// console.log(myVar);
// a();
// }

// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
    }
function clickHandler() {
    console.log('click event!');
    }
    // listen for the click event
    document.addEventListener('click', clickHandler);

    waitThreeSeconds();
    console.log('finished execution');

