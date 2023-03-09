

"use strict"

/*Функция конструктор*/

function sumToCycle(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}
function sumTo(n) {
	if (n == 1) {
		return n;
	}
	else {
		return sumTo(n - 1) + n;
	}
}
function factorial(n) {
	if (n == 1) {
		return n;
	}
	else {
		return factorial(n - 1) * n;
	}
}
function fib(n) {
	if (n == 1 || n == 2) {
		return 1;
	}
	else {
		return fib(n - 1) + fib(n - 2);
	}
}
console.log(fib(7));
let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			},
			previous: {
				value: 2
			}
		},
		previous: {
			value: 1
		}
	},
	previous: {
		value: null
	}
};

function printList(list) {

	if (list.next == null) {

		console.log(list.value)
		return

	}
	else {
		printList(list.next);
	}

}
printList(list);