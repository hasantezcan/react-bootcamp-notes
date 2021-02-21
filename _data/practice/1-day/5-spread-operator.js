// 1.
// const users = ['Ahmet', 'Neşe', 'Hakan', 'Selin'];

// const newUsers = ['Murat', ...users];

// console.log(newUsers);

//2.
const users = [
	{
		name: 'Mehmet',
		age: 28,
	},
	{
		name: 'Murat',
		age: 32,
	},
];

const newUsers = [{ name: 'Seda', age: 25 }, ...users];

console.log(newUsers);
