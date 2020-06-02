const splitter = (str, func) => func(str);

const lambda1 = (str) => str.split(/(?=c)/g);

const lambda2 = (str) => {
    console.log(`originalString: ${str}`);
    const modifiedString = str.replace(/a/g, 'A');
    console.log(`modifiedString: ${modifiedString}`)
    var counter = 0;
    for (i = 0; i < str.length; i ++){
        if (str.charAt(i) == 'a'){
            counter ++;
        }
    }
    console.log(`numberReplaced: ${counter}`)
    console.log(`length: ${str.length}`)
}

module.exports = {splitter, lambda1, lambda2};
