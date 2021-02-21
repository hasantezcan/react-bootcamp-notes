// 1.
// const user = { name: 'Murat', surname: 'Varol', age: 22 };

// console.log(user.name);
// console.log(user.surname);
// console.log(user.age);

// 2.
// const {
// 	name: isim,
// 	age,
// 	address: {
// 		home: { city: homeCity },
// 		work: { city: workCity },
// 	},
// } = {
// 	name: 'Murat',
// 	age: 22,
// 	address: {
// 		home: {
// 			city: 'Istanbul',
// 			district: 'Ataşehir',
// 		},
// 		work: {
// 			city: 'Ankara',
// 			district: 'Keçiören',
// 		},
// 	},
// };

// console.log(homeCity);
// console.log(workCity);

// 3.

const user = { name: 'Murat', surname: 'Varol', age: 22, address: { city: 'Istanbul' } };

const userDetails = ({ name, surname, age, address: { city } }) => {
	console.log(name);
	console.log(surname);
	console.log(age);
	console.log(city);
};

userDetails(user);
