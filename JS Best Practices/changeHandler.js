// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
var coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
}
module.exports = {
    getAmount: function(coinType) {
        if(coins.hasOwnProperty(coinType)) {
            return coins[coinType]
        }
        throw new Error('Unrecognized coin ' + coinType)
      },

    convertToChange: function(remainder) {
        var res = []
        var list = Object.values(coins).reverse()
        var keys = Object.keys(coins).reverse()
        console.log(list)
        var i = 0;
        while(remainder > 0) {
            if(remainder - list[i] >= 0) {
                res.push(keys[i])
                remainder = remainder - list[i]
            } else {
                i++;
            }
        }
        return res;    
    }
};