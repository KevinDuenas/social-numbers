function check(str, limit) {
    if (str[limit - 2] === '.') {
        str = str.replace('.', '');
    } else if (str[limit - 3] === '.' && str[limit - 2] === '0') {
        str = str.replace('.', '');
        str = str.replace('0', '');
    } else if (str[limit - 4] === '.' && str[limit - 3] === '0' && str[limit - 2] === '0') {
        str = str.replace('.', '');
        str = str.replace('0', '');
        str = str.replace('0', '');
    } else if (str[limit - 5] === '.' && str[limit - 4] === '0' && str[limit - 3] === '0' && str[limit - 2] === '0') {
        str = str.replace('.', '');
        str = str.replace('0', '');
        str = str.replace('0', '');
        str = str.replace('0', '');
    }
    return str;
}

function format(number, limit) {
    let newNumber;

    if (limit < 2 && number < 10000) limit = 2;
    if (limit < 4 && number > 9999) limit = 4;
    if (limit === 7 || limit === 8) limit = 6;

    if (number <= 999) {
        newNumber = number.toString();
    } else if (number > 999 && number < 1000000) {
        number = number / 1000;
        newNumber = number.toString();
        newNumber = newNumber.substring(0, limit - 1) + 'K';
    } else {
        number = number / 1000000;
        newNumber = number.toString();
        newNumber = newNumber.substring(0, limit - 1) + 'M';
    }

    return check(newNumber, limit);
}

let n = 4452;
let l = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 9; i++) {
    let nNumber = format(n, l[i]);
    console.log(n, "limit: ", l[i], " --> ", nNumber);
}