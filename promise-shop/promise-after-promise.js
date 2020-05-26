require('es6-promise')

var firstPromise = first();

var secondPromise = firstPromise.then((val) => {
    return second(val);
})

secondPromise.then((val) => console.log(val))

//One line solution
//first().then(second).then(console.log)