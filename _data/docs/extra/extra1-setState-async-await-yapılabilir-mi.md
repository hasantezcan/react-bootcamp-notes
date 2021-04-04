## setState'leri async kullanmak?
> https://iamsongcho.medium.com/is-setstate-async-b1947fbb25e5


Bunun iki yolu var!

Gelen konu başlıklarını bir state içinde tutmak istiyorum. Map döndükçe state güncellensin istiyorum fakat bu sorun çıkarıyor! Sadece son elemanı ekliyor array'e.

```js
useEffect(() => {
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				await data.map((collection, i) => {
					setCollections([
						...collections,
						[collection.title, collection.title],
					]);
					console.log(collection.title, i, collections);
				});
			}
			console.log(collections);
		};
		fetchCollections();
	}, []);
```

![](/_data/images/extra/1/2021-04-04-17-36-29.png)

Bunu atlatmak için hemen bir `temp` array üretiyorum ve konu başlıklarını içine biriktirdikten sonra tek bir seferde state'i setState ile güncelliyorum.

> https://github.com/hasantezcan/unsplash-client/commit/633c7b6bca29c071ea6950c2dfcd93f15eaae0d3#diff-a53c127f1cfe958e6d3d52a5a31be48e1b0d67aac8bd3dc03541022f0016c36e


```diff
import { useState, useEffect } from "react";
import axios from "axios";
import { SearchProvider } from "../Context/Search";

const WithSearch = ({ children }) => {
	const [collections, setCollections] = useState([]);
	const [selectedCollection, setSelectedCollection] = useState("");
	const [queryInput, setQueryInput] = useState("");

	useEffect(() => {
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
+				const temp = [];
+				await data.map((collection, i) => {
+					temp.push([
+						collection.title,
+						collection.title.charAt(0).toUpperCase() +
+							collection.title.slice(1),
+					]);
+				});
+				console.log("ARRAY", temp);
+				setCollections(temp);
+			}
			console.log(collections);
		};
		fetchCollections();
	}, []);

	const props = {
		collections,
		setCollections,
		queryInput,
		setQueryInput,
		selectedCollection,
		setSelectedCollection,
	};

	return <SearchProvider value={props}>{children}</SearchProvider>;
};

export default WithSearch;

```

Fakat bu yöntem bana biraz zormalama geldiği için daha uygun bir yol var mı diye araştırdım ve state'i güncelleyebildiğimiz bir yol buldum.

```js
useEffect(() => {
		const fetchCollections = async () => {
			const { data } = await axios.get(
				`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_API}`
			);

			if (data.length && data.length) {
				await data.map((collection, i) => {
					setCollections((state) => [
						...state,
						[
							collection.title,
							collection.title.charAt(0).toUpperCase() +
								collection.title.slice(1),
						],
					]);
					console.log(collection.title, i, collections);
				});
			}
			console.log(collections);
		};
		fetchCollections();
	}, []);
```

state'in önceki değerini state callback'i ile setState bize veriyormuş.

> https://github.com/hasantezcan/unsplash-client/commit/6ebfccfca7e83ece9531c5daaf5329e077ab224e

![](/_data/images/extra/1/2021-04-04-17-35-08.png)