function repeat(operation, num) {
    /*for(let i = 0; i < num; i++) {
        operation();
    }*/
    if(num === 0) return;
    operation();
    return repeat(operation, num - 1);
}
module.exports = repeat