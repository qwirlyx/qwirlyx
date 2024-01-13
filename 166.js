/* Task 1*/
/*
for (let i = 0; i <= 10; i++) {
	console.log(i);
}*/


/* Task 2*/
/*
for (let i = 10; i >= 0; i--) {
	console.log(i);
}*/


/* Task 3*/
/*
for (let i = 10; i >= 0; i--) {
	console.log(i);
}*/


/* Task 4*/
/*
let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}*/


/* Task 5*/
/*
let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);*/


/* Task 6*/
/*
let res = 1;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res);*/


/* Task 7*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);*/


/* Task 8*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);*/


/* Task 9*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum);*/


/* Task 10*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum);*/


/* Task 11*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum);*/


/* Task 12*/
/*
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum);*/


/* Task 13*/
/*
let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
	arr[i] = arr[i] ** 2;
}
console.log(arr);*/


/* Task 14*/
/*
let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);*/


/* Task 15*/
/*
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += +obj[key];
}

console.log(sum);*/


/* Task 16*/
/*
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum += +obj[key];
}

console.log(sum);*/


/* Task 17*/
/*
let arr = [1, 2, 3, 4, 5];
let res = '---';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
        break;
    }
}

console.log(res);*/


/* Task 18*/
/*
let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);*/


/* Task 19*/
/*
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}

console.log(res);*/


/* Task 20*/
/*
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}*/


/* Task 21*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
	if (elem % 2 !== 0) {
		res.push(elem);
	}
}

console.log(res);