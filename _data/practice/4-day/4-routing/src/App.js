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
