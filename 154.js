// Task 1
/*
let arr = [1, 2, 3, 4, 5, 0, 6, 7];

for (let elem of arr) {
    console.log(elem);
	if ( elem == 0) {
        break;
    }
}*/


// Task 2
/*
let res = 0;
let arr = [1, 10, 4, 5, -1, -5, 7, 0];

for (let elem of arr) {
    if (elem > 0) {
        res += elem
    } else {
        break;
    }
}
console.log(res);*/

// Task 3
/*
let arr = [1, 2, 3, 4, 3, 5];
let position = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    position = i;
    break;
  }
}
console.log("Позиция первого числа 3: " + position);*/

// Task 4
/*
let res = 0;
for (let i = 1; i <= 100; i++) {
    console.log(i);
    res += i
    if(res > 100){
        break;
    }
}*/
