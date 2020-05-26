require('es6-promise')

var promise1 = Promise.resolve('ANEESH')

var promise2 = Promise.reject(new Error('TEJESH'))

promise2.catch((err) => {
    console.error('ERROR MESSAGE')
})