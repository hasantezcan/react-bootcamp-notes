### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 4 - 2020.12.27`
> 

Bu bölümde;

- [Fetching Data from API and show those with React](#fetching-data-from-api-and-show-those-with-react)
- [js ile jsx arasındaki fark nedir?](#js-ile-jsx-arasındaki-fark-nedir)
- [`React.memo()`](#reactmemo)
- [React Styling and CSS](#react-styling-and-css)
  - [css module nedir?](#css-module-nedir)
  - [Css design systems](#css-design-systems)
- [REACT ROUTER](#react-router)
  - [Exact kullanımı](#exact-kullanımı)
  - [param kullanmak - nesting routing](#param-kullanmak---nesting-routing)
- [Kaynakça](#kaynakça)

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

---

# js ile jsx arasındaki fark nedir?

Github'da gezinirken bazı react projerlerde uzantıların normal js iken bazılarında jsx olarak yazılmış olduğunu görebilirsiniz. Bu farkın bi önemi var mı? .jsx ile js arasındaki fark nedir? Gelin bu sora bir cevap arayalım. 

vscode'da react componentlerinizi jsx uzatısı ile oluşturduğunuzda  fileicon'ları react logosu şeklini almakta. Öteyandan bazı tamamlamalar çalışmamakta. Js içinde html yazılmadığından h1 ya p gibi elementlerin tamamlamaları sadece .js yazdığınızda desteklenmiyor ama .jsx yazdığınızda destekleniyor.

Ben kendi kullanımda sırf bu sebeple başlarda hep jsx olarak dosyalarımı oluşturuyordum ya da vscode üzerinde bulunan change language mode ile js uzantısı ile oluşturduğum componet'lerde html tamamlamaları çalışsın diye her seferinde JavaScript React olacak şekilde o dosyanın dil modunu değiştiriyordum. Dediğim gibi eğer dosyanınz modunu jsx yaparsanız bu sorun zaten gündeme gelmiyordu. 


<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-06-35-03.png" width="500">
</p>


<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-06-34-14.png" width="500">
</p>

Ama sonrasında js uzantısı ile de istediğim html tamamlamalarını kullanabileceğim ve her seferinde language mod seçmemin gerekmeyeceği bir yöntem buldum. Yine vscode içide js uzantılı dosyalarıma react javascript ön tanımlı olarak davran şekilde bir ayar ile jsx ile js arasındaki farkı ben kendi dünyamda kaldırmış oldum.

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-06-32-59.png" width="500">
</p>

Peki bu fark niye var. Dikkatinizi çekerim burada js ya da jsx arasındaki fark kod çalışmıyor olduğundan falan değil. Sadece benim istediğim eklentilerin js olduğu zaman çalışamasından kaynaklıydı.

Şu ufak bir araştırma ile baktığımızda react jsx kullanabilirsiniz ama kullanmasanız daha iyi demiş. Aşağıya bıraktığım github issular üzerinden yapılmış konuşmaları irdeleyebilirsiniz. Ben kendimce dikkat çekenleri ve son noktaları ss'leyip linkledim.

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-03-51-19.png" width="600">
    <br>
    <em>
        <a href="https://github.com/airbnb/javascript/pull/985#issuecomment-364804411">React does not recommend jsx anymore</a>on Feb 12, 2018
    </em>
</p>

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-03-49-59.png" width="500">
    <br>
    <em>
        <a href="https://github.com/facebook/create-react-app/releases/tag/v0.4.1">We now support <strong>(but don’t recommend)</strong> .jsx file extension.</a> on Sep 3, 2016
    </em>
</p>

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-03-50-31.png" width="600">
    <br>
    <em>
        <a href="https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904">The distinction between .js and .jsx files was useful before Babel, but it’s not that useful anymore.</a> on Jul 22, 2016
    </em>
</p>

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-21-03-59-24.png" width="600">
    <br>
    <em>
        <a href="https://github.com/facebook/create-react-app/issues/87#issuecomment-446254062">For future searchers: we support both .js and .jsx.</a> on Dec 11, 2018
    </em>
</p>

Tarayıcılar zaten jsx ile yazılan kodları direk çalıştıramazlar her türlü jsx kodu önce js kodlarına çevriliyor sonra çalıştırılıyor. Bu noktada jsx üzerinden direk çalışama gibi bir durum zaten mevcut değil.

> **A browser cannot execute JavaScript files containing JSX code. They must be first transformed to regular JS.** - [flaviocopes.com/jsx/](https://flaviocopes.com/jsx/)

Bu çevrilmeyi gerçekleştirken de kullanılan en yaygın yol babel ile çevirmeyi yapmak. Create react app'in varsayılanında da zaten babel kullanılmakta. Ama CRA kullanmak istemezseniz de babel'ı manuel olarak kurup kullanabilirsiniz.

Babel bu noktada sizin JSX syntax'ı ile yazdığınız kolay okunur js kodlarınızı yazması nispeteden daha karmaşık yalın js kodlarına dönüştürüyor.

```jsx
// with jsx sytanx
ReactDOM.render(
  <div id="test">
    <h1>A title</h1>
    <p>A paragraph</p>
  </div>,
  document.getElementById('myapp')
)
```
```js
// js
ReactDOM.render(
  React.createElement('div', { id: 'test' },
    React.createElement('h1', null, 'A title'),
    React.createElement('p', null, 'A paragraph')
  ),
  document.getElementById('myapp')
)
```

---

# `React.memo()`
> **https://reactjs.org/docs/react-api.html#reactmemo**

Component update olduğunda rerender edilmesini istemediğimiz alt componetlere tanımladığımız ve tekrar render edilmesini engellediğimiz performans nedenleri ile var olan bir araçtır.

```js
import "./App.css";

import { useState } from "react";
import Title from "./components/Title";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<hr />
			<Title text={count < 5 ? "Selam ben Title component" : "Yeni Başlık"} />
		</div>
	);
}

export default App;
```

Bu sayfaya baktığımızda count state'i her güncellendiğinde Virtual DOM bu component içinde bir farklılık olduğunu fark eder ve tüm component'i rerender eder.

Fakat biz bu component içindeki Title componetini tekarar render etmek istemezsek. Bu noktada react memo'dan faydalanabilriz.

```js
import { memo } from "react";

function Title({text}) {
	console.log("Title component re-render");
	return <h3>{text}</h3>;
}

export default memo(Title);
```
memo'yu react içinden çağırıyoruz ve export ederken memo ile birlikte export ediyoruz bu bu komponentden tasarruf edin manasına geliyor. 

```js
<Title text={count < 5 ? "Selam ben Title component" : "Yeni Başlık"} />
```
fakat app.js'deki bu ibareden ötürü count 5 den büyük olduğunda başka bir text içine gönderileceğinden bu component tekrar render edilecektir.

YA DA

componetleri doğru şekilde ayırırsanız bu kullanıma ihtiyacınız kalmayabilir. O zaman sadece ayramadığınız vakitrlerde kullanırsınız. 

Ayrmaktan kastım mesela bu örnekte title componneti dışındaki diğer elementleri de bir componet haline getirip app.js içinde o yeni oluşturulan componenti çağırmak gibi. O zaman update işlemi başka bir component içinde olacağından memoya ihtiyaç kalmayacaktır.


---

# React Styling and CSS
> **https://reactjs.org/docs/faq-styling.html**


## css module nedir?
> **https://css-tricks.com/css-modules-part-1-need/**

Sadece tek bir component için yazılan ve sonrasında render edilirken üretilen clas isimlerini uniuqe halde getiren bir yapı. Genel kullanım amacı css conflitchlerinin önüne geçmek.

css module'Ü kullanmak için ek bir şey kurmanıza gerek yok CRA (create react app) içinde otomatik olarak gelmekte.

<p align="center">
    <img alt="virtual-dom" src="../images/day-4/2021-02-24-03-09-09.png" width="200">
</p>

görüldüğü üzere her component için ayrı bir `styles.module.css` mevcut.

```js
import React from "react";

import styles from "./styles.module.css";

function ComponentA() {
	return (
		<div>
			<h1 className={styles.title}>Component A</h1>
			<p className={styles.description}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est labore
				veritatis quidem quo voluptatum. Dolores earum corrupti dolore, debitis
				voluptate nisi, modi fuga alias tenetur quos voluptatem deserunt
				aspernatur tempore?
			</p>
		</div>
	);
}

export default ComponentA;
```

Burada örnek bir react module css kullanımı görülmekte.


## Css design systems

- https://chakra-ui.com/
- https://ant.design/
- https://tailwindcss.com/

---

# REACT ROUTER
> **https://reactrouter.com/**

React içinde dahili bir routing sistemi gelimyor bunu ihtiyacı `react-router-dom` paketi ile gideriyoruz. 

```js
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./App.module.css";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";

function App() {
	return (
		<div className={styles.container}>
			<Router>
				<nav>
					<ul className={styles.menu}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<div className={styles.content}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/users" component={Users} />
						<Route path="*" component={Error404} />
					</Switch>
				</div>

				<div className={styles.footer}>Copyright 2021</div>
			</Router>
		</div>
	);
}

export default App;
```

Link'ler ile redirect işlemlerini gerçekleştiriyoruz. 

Routerları belirlediğimiz nokta ise Switch içinde gerçekleşiyor. Bu kısım içine belirttiğiniz Router'lar ulaşılabilir hala geliyor. 

Router'ların çalışma mantığı şu şekilde; sizin adres cubuğuna yazıdğınız routerlar ilk belittiğiniz routerdan başlayarak sıra sıra aşağı doğru hepsini dener. Eşleşen yerde kalır ve size ilgili sayfayı gösterir. Herhangi bir confiltch yaşandığında bu sıraya dikkat etmelisiniz.

Tüm projeyi `<Router> ...whole app... </Router>` içinde tutarsanız alt sayfalarda redirect (Link'leme) yapabilirsiniz.

## Exact kullanımı 

Eğer belittiğiniz path in sadece o path için geçerli olmasını isterseniz yani o pathin alt pathleri için arama yapmasnı istemezseniz bu parametreyi eklemeniz gerekir. 

Örneğin bu path `/hayvanlar` ile eşleşecek.

```js
<Route exact path="/hayvanlar"> 
```

fakat `/hayvanlar/tembel-hayvan` ile eşleyşemeyecek alt pathlere bakmayacak.

## param kullanmak - nesting routing
> https://reactrouter.com/web/example/nesting

bazı pathlerimiz sayfa özel olarak çalışıyor olacak bu sayfaları hazırlarken paramları kullnmamız gerekecek `hayvanlar/3` gibi.

```js
//Users page 

import { useState, useEffect } from "react";

import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";

import UserDetail from "../UserDetail";

function Users() {
	let { path } = useRouteMatch();

	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
			.then((res) => setUsers(res.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h2>Users</h2>
			{loading && <div>Loading...</div>}
			{users.map((user) => (
				<li key={user.id}>
					<Link to={`/users/${user.id}`}>{user.name}</Link>
				</li>
			))}

			<Switch>
				<Route path={`${path}/:id`} component={UserDetail} />
			</Switch>
		</div>
	);
}

export default Users;
```

`:id` dediğimiz zaman param'ı router ile almış oluyoruz. 

```js
<Switch>
  <Route path={`${path}/:id`} component={UserDetail} />
</Switch>
```

sonrasında bu yolladığımız parameter'ları userDetail içinde bu şekilde karşılıyoruz 


```js
// UserDetail page
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
	let { id } = useParams();

	id = parseInt(id);

	// const [userId, setUserId] = useState(id);

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		setLoading(true);
		axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
			.then((res) => setUser(res.data))
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<div>
			<h2>User Detail</h2>

			{loading && <div>Loading...</div>}
			{user && !loading && JSON.stringify(user)}

			<br />
			<br />

			{/* <button onClick={() => setUserId(userId + 1)}>
				Next User (id: {userId + 1})
			</button> */}

			<Link to={`/users/${id + 1}`}>Next User (id: {id + 1})</Link>
		</div>
	);
}

export default UserDetail;
```
React router dom içinden `useParams` ı çağırıyoruz ve bu şekilde kullanıyoruz .

```js
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
	let { id } = useParams();

	id = parseInt(id);

..  
..  
..  
```

Ayrıca bu sayfayı gelen param'a göre axios isteği yapacağımızdan 
yapılan istedği id'ye bağımlı şekilde gerçekleştirmemiz lazım

```js
	useEffect(() => {
		setLoading(true);
		axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
			.then((res) => setUser(res.data))
			.finally(() => setLoading(false));
	}, [id]);
```
---

# Kaynakça 

1. https://reactjs.org/docs/react-api.html#reactmemo
2. https://css-tricks.com/css-modules-part-1-need/