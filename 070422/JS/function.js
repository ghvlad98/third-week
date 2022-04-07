// classic function
function name(param) {
    // TODO with param
    console.log(param)
}

//anonimous function
let fn = function() {}


// IIFE
(function() {
    alert('Hello World')
}('Hello world'));

let array = [2, 5, 7, 9, 33, 54, 67];

array.forEach(function(e, _index) {
    console.log(e)
})

// ARROW FUNCTION
let fn_a = () => {}

array.map((e, _index) => {
    console.log(e)
})

array.flatMap((e, _index) => {
    console.log(e)
})

const name2 = (param) => {
    console.log(param)
}