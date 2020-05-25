function countWords(inputWords) {
    //var words = {};
    return inputWords.reduce(function(words, inputWord) {
        if(inputWord in words) {
            words[inputWord]++;
        } else {
            words[inputWord] = 1;
        }
        return words;
    }, {}) //remember to put {} at end of reduce call
}
module.exports = countWords