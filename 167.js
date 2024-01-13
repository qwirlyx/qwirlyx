/* Task 1*/
/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}*/


/* Task 2*/
/*
for (let i = 100; i >= 1; i--) {
    console.log(i);
}*/


/* Task 3*/
/*
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}*/


/* Task 4*/
/*
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr);*/


/* Task 5*/
/*
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);*/


/* Task 6*/
/*
let arr = [0, 3, 6, 9, 12];
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}*/


/* Task 7*/
/*
let arr = [1, 2, 3, 4, 5, 6];
let res = '---'
for (let elem of arr) {
    if (elem === 5){
        res = '+++';
        break;
    }
}
console.log(res);*/


/* Task 8*/
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);*/


/* Task 9*/
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] **= 2;
    sum += arr[i];
}
console.log(sum);*/


/* Task 10*/
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
sum /= 2;
console.log(sum);*/


/* Task 11*/
/*
let num = 6;
let f = 1;
for (let i = 1; i <= num; i++) {
    f *= i; 
}
console.log(f);*/


/* Task 12*/
/*
let arr = [];
for (let i = 10; i >= 1; i--) {
    arr.push(i);
}
console.log(arr);*/


/* Task 13*/
/*
let arr = [10, -5, -2, 7, 1, -3, 0];
let sum = 0;
for (let elem of arr) {
    if (elem >= 0) {
        sum += elem; 
    }
}
console.log(sum);*/


/* Task 14*/
/*
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    elem = String(elem);
    if (elem[0] == 1 || elem[0] == 2 || elem[0] == 5) {
        console.log(+elem);
    }
}*/


/* Task 15*/
/*
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length; i > 0; i--) {
    console.log(i)
}*/


/* Task 16*/
/*
let arr = [3, 6, 2, 7, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
}*/


/* Task 17*/
/*
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    document.write(elem + "<br>");
}*/


/* Task 18*/
/*
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    document.write(elem + "<p>");
}*/


/* Task 19*/
/*
let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < arr.length; i++) {
    if (i >= 5) {
        document.write('<b>' + arr[i] + '</b><br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}*/


/* Task 20*/
/*
let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = arr[2];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === day) {
        document.write('<i>' + arr[i] + '</i><br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}*/


/* Task 21*/
/*
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    obj[key] *= 1.1;
    console.log(+obj[key].toFixed(0));
}*/


/* Task 22*/
/*
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] *= 1.1;
        console.log(+obj[key].toFixed(0));
    } else console.log(+obj[key].toFixed(0));
}*/


/* Task 23*/
/*
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);*/


/* Task 24*/
/*
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum1 = 0, sum2 = 0;
for (let keys in obj) {
    sum1 += +keys;
}
for (let elem in obj) {
    sum2 += obj[elem];
}
console.log(sum1 / sum2);*/


/* Task 25*/
/*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [], arr2 = [];
for (let keys in obj) {
    arr1.push(keys);
}
for (let elem in obj) {
    arr2.push(obj[elem]);
}
console.log(arr1, arr2);*/


/* Task 26*/
/*
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];

for (let elem in obj) {
    obj[elem] = String(obj[elem]);
    if (obj[elem][0] == '1' || obj[elem][0] == ('2')) {
        arr.push(Number(obj[elem]));
    }
}
console.log(arr);*/


/* Task 27*/
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
}
console.log(obj);*/


/* Task 28*/

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
}

console.log(obj);