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
