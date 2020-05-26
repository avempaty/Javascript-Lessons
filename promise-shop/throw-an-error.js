require('es6-promise')
//Review this one
function parsedPromise(json) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json))
        } catch(e) {
            reject(e);
        }
    })
}
function onReject(err) {
    console.log(err.message);
}
parsedPromise(process.argv[2])
.then(null, onReject)