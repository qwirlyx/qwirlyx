// Task 1
/*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i <= 6; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);*/

// Task 2
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let key in obj) {
	if (obj[key] % 2 === 0) {
		obj2[key] = obj[key];
	}
}
console.log(obj2);*/

// Task 3
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};

for (let key in obj) {
  obj2[obj[key]] = key;
}

console.log(obj2);*/