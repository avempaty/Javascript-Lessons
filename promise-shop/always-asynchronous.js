require('es6-promise')

var promise = new Promise((fullfill, reject) => {
    fullfill('PROMISE VALUE')
})

promise.then((val) => console.log(val))
console.log('MAIN PROGRAM')