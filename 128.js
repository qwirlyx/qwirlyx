let num = 97;
let sum, str;

if (num >= 10 && num <= 99) {
    str = String(num);
    sum = +(str[0]) + +(str[1]);
    console.log(sum);
    if (sum <= 9) {
        console.log('сумма цифр однозачна');
    } else {
        console.log('сумма цифр двузначна');
    }
} else {
    console.log('данное число не входит в диапазо от 10 до 99');
}
