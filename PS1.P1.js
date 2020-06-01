const alphabetical = (str) =>
    str.replace(/\d+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, '').split('').sort().join('');

module.exports = {alphabetical};