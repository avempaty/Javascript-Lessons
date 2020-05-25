module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(prev, curr, ind, arr) {
        prev.push(fn.call(null, arr[ind]));
        return prev;
   }, []);
}