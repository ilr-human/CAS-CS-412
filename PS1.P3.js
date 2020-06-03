const splitter = (str, func) => func(str);

const lambda1 = (str) => str.split(/(?=c)/g);

const lambda2 = (str) => {
    const object = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.replace(/[^a]/g, "").length,
        length: str.length
    }
    console.log(`originalString: ${object.originalString}`);
    console.log(`modifiedString: ${object.modifiedString}`)
    console.log(`numberReplaced: ${object.numberReplaced}`)
    console.log(`length: ${object.length}`)
    return object;
}

module.exports = {splitter, lambda1, lambda2};
