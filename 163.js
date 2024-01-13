// Task 1
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
	if (elem === 'c') {
		flag = true; // выведет несколько раз
        break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}*/

// Task 2

let num = 18;
let flag = true;

if (num <= 0){
	flag = false;
} else if ((num > 0) && (num < 6)) {
	flag = true;
}
for (let i = 2; i < num; i++) { 
	if (num % i === 0) { 
	  flag = false; 
	} 
} 
if (flag === true) {
	console.log(num + " - является простым числом");
} else {
	console.log(num + " - не является простым числом");
}
