var slice = Array.prototype.slice;
/*
* Look at this exercise again
*/
function logger(namespace) {
    return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)));

    }
}

module.exports = logger