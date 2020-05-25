function getShortMessages(objects) {
    var arr = [];
    return objects.filter((object) => {
        return object.message.length < 50
    }).map((object) => {
        return object.message;
    })
    /*for(let i = 0; i < objects.length; i++) {
        if(objects[i].message.length < 50) {
            arr.push(objects[i].message);
        }
    }
    return arr;*/
}
module.exports = getShortMessages