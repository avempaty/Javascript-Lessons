function duckCount() {
    /* Look later at why this doesn't work
    for(argument in arguments) {
        if({}.hasOwnProperty.call(arguments[argument],'quack')) {
            arguments = [].filer.call(arguments, 1);
        }
    }
    return arguments.length;
    */
    return [].filter.call(arguments, (arg) => {
        return {}.hasOwnProperty.call(arg,'quack');
    }).length 
}
module.exports = duckCount