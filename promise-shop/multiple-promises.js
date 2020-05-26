require('es6-promise')

function all(arg1, arg2) {
    var counter = 0;
    var out = []

    return new Promise((fulfill, reject) => {
        p1 = arg1.then((val) => {
            out[0] = val
            counter++
            if(counter === 2)
                fulfill(out)
        })
        p2 = arg2.then((val) => {
            out[1] = val
            counter++
            if(counter === 2)
                fulfill(out)
        })
    })
    
}

var promiseReturned = all(getPromise1(), getPromise2())
promiseReturned.then(console.log)