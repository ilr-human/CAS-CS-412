function * wordSplitter (str) {
    let current = 0;
    let splitStr = str.split(" ");
    while (current < splitStr.length) {
        yield splitStr[current];
        current = current + 1;
    }
}

module.exports = {wordSplitter};