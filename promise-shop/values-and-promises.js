require('es6-promise')

function attachTitle(val) {
    return `DR. ${val}`
}
var promise = Promise.resolve('MANHATTAN')
var promiseChain = promise.then(attachTitle).then(console.log)
//One line simpler solution
//Promise.resolve('MANHATTAN').then(attachTitle).then(console.log)