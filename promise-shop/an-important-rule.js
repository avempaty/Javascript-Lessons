require('es6-promise')
'use strict'

function alwaysThrows() {
    throw new Error("OH NOES");
}

function onReject(err) {
    console.log(err.message);
}
function iterate(arg) {
    console.log(arg)
    return arg + 1;
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject)