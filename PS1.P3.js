const splitter = (str, func) => func(str);

const lambda1 = (str) => str.split(/(?=c)/g);

const lambda2 = (str) => {
    const originalString = str;
    console.log(`originalString: ${originalString}`);
    const modifiedString = str.replace(/a/g, 'A');
    console.log(`modifiedString: ${modifiedString}`)
    const numberReplaced = str.replace(/[^a]/g, "").length;
    console.log(`numberReplaced: ${numberReplaced}`)
    const length = str.length;
    console.log(`length: ${str.length}`)
    return [originalString, modifiedString, numberReplaced, length];
}

module.exports = {splitter, lambda1, lambda2};
