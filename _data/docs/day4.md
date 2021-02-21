### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 4 - 2020.12.27`
> 

Bu bölümde;

konularından bahsedeceğiz.

---

Temele git komutlarını özet şeklinde listeleyen faydalı bir kaynak (Türkçe) 
  - https://rogerdudler.github.io/git-guide/index.tr.html
  - https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf

# Fetching Data from API and show those with React
> **API'den Veri Almak ve React ile Olanları Göstermek**

Axios ile `https://jsonplaceholder.typicode.com/users` endponint'inden verileri çekip react ile ekrana yazdırmak istiyoruz.

Bunu operasyonu userList component'inde gerçekleştireceğiz. Bu sebeple App.js içinine userlist componentini tanımlayalım.

```js
// App.js

import "./App.css";

import UserList from "./components/UserList";

function App() {
	return (
		<div className="App">
			<UserList />
		</div>
	);
}

export default App;
```
Şimdi operasyonu yapacağımız componentin içini düzenleyelim.

```js
// UserList.js
import { useState, useEffect } from "react";

import Loader from "./Loader";
import UserListItem from "./UserListItem";
import axios from "axios";

function UserList() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<ul>
			<h1>Users</h1>
			<Loader text="Loading..." isVisible={loading} />

			{users.map((user) => (
				<UserListItem key={user.id} user={user} />
			))}
		</ul>
	);
}

export default UserList;
```

Burada endpointimizden verilerimizi componentler mount olduğunda çalışacak (tetiklenecek) bir **useEffect** içinde axios paketi yardımı ile çekiyoruz. Sonrasında aldığığmız verileri `users` isimli **state**'imiz içinde depoluyoruz.

`users` state'i içinde tuttuğumuz verileri map ederek; tekil verileri render edeceğimiz component olan `UserListItem` içine teker teker gönderiyoruz.

Şimdi `userListItem` componentine bir göz atalım.

```js
function UserListItem({ user }) {
	return (
		<li>
			{user.id} - {user.name} - @{user.username}
		</li>
	);
}

export default UserListItem;
```
Burada gelen tekil user'ların id name ve username'lerini list itemler halinde teker teker DOM'a gönderiyoruz. Mapde dönen tüm userlerın rendermesinden sonra DOM'da şöyle bir çıktı alıyoruz.


<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-03-36-30.png" width="500">
    <br>
    <em>
        <a href="../practice4-day/1-fetching">Users data's rendering</a>
    </em>
</p>

