//1.
// console.log(1);
// setTimeout(() => console.log(2), 10);
// console.log(3);

// 2.
// function first() {
// 	setTimeout(() => {
// 		console.log('First');
// 	}, 10);
// }

// function second() {
// 	console.log('Second');
// }

// first();
// second();

// 3.
function uyan(callback) {
	console.log('Uyan');

	setTimeout(() => {
		callback();
	}, 2000);
}

function yuzunuYika() {
	console.log('Yüzünü yıka');
}

uyan(yuzunuYika);
