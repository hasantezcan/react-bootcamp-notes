### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 6 - 2021.01.24`
> 

Bu bölümde;

- [React Testing](#react-testing)

konularından bahsedeceğiz.

---


<p align="center">
    <img alt="imgName" src="../images/day-10/2-unit-0-integration-test.gif" width="600">
    <br>
    <em></em>
</p>

**Integration test:** Birimlerin birbiri arasındaki işleyişini test eden test türü. 

**Unit test**:   

...

> [React Uygulamalarında TDD](https://oguzkilic.medium.com/react-uygulamalar%C4%B1nda-tdd-48f93335d8fb) - Oğuz Kılıç - Oct 31, 2017

# React Testing

Basit bir counter yapalım ve sonrasında bunun için bir test yazalım.

```js
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<h2>{count}</h2>
		</div>
	);
}

export default Counter;
```

<p align="center">
    <img alt="imgName" src="../images/day-10/2021-03-19-17-40-39.png" width="300">
    <br>
    <em></em>
</p>

Şimdi ise bu componet'in testini aynı module css dosyasını oluştururken kullandığımız yaklaşım ile `Counter` dizini içinde oluşturalım. Böylece `Counter dizini` altında sadece onun ile ilgili olan `test, css vs.` dosyaları mevcut olacak.

<p align="center">
    <img alt="imgName" src="../images/day-10/2021-03-19-17-44-50.png" width="300">
    <br>
    <em></em>
</p>

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter bileşen testleri", () => {
	let increaseBtn, decreaseBtn, count;

	beforeEach(() => {
		render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0");
	});

	it("Arttirma butonuna basıldığında sayı bir artmalı", () => {
		userEvent.click(increaseBtn);
		expect(count).toHaveTextContent("1");
	});

	it("Azaltma butonuna basıldığında sayı bir azalmalı", () => {
		userEvent.click(decreaseBtn);
		expect(count).toHaveTextContent("-1");
	});
});
```

**🤔 Ne yaptık burda?**  
Öncelikle yazcağımız bu test Counter componet'ı için olduğundan bunu bu şekilde **tarif ediyoruz (describe).** 

`BeforEach` burada test'e başlaman önce yapaılmasını istediğimiz şeylerin yapıldığı yer. Bu sebeple test edeceğimiz öğeleri burada deklare ediyoruz. `render(<Counter />)` tabi counter componetini render edelim ki içindeki öğelere ulaşabilelim. 

```js
render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0");
```
> **`screen` sayfadaki öğelere ulaşabilmemize olanak tanıyor.**

İşte bu noktadan sonra işlevsel testlerimizi yazmaya başlayabiliriz. 

`Arttirma butonuna basıldığında sayı bir artmalı` testini yazarken `increaseBtn`'a basıldığında `count` öğesinin değeri `-1` olmalıdır. Diyerek istediğimiz yani beklediğimiz sonucu belirtiyoruz bunu koda dokünce ortaya şöyle bir şey çıkıyor.

```js
it("Arttirma butonuna basıldığında sayı bir artmalı", () => {
		userEvent.click(increaseBtn);
		expect(count).toHaveTextContent("1");
	});
```

aynı durumu azaltma butonu içinde yapıyoruz.

- Her `it` ile başlayan tanım **bir test'i temsil etmekte** bu tanımları `it` yerine `test` ifadesi ile başlayarak da yapabilirsiniz.

<p align="center">
    <img alt="imgName" src="../images/day-10/2021-03-19-18-06-35.png" width="600">
    <br>
    <em></em>
</p>

Burada olduğu *-TEST tanımlarken `it` yerine `test` kullanılmış-* gibi ayrıca sayfada varlığını kontrol etmek için `toBeInDocument()` methodundan faydalanabilirsiniz.


Yazdığımız testleri çalıştırmak için..

```bash
yarn test
```

<p align="center">
    <img alt="imgName" src="../images/day-10/2021-03-19-18-08-28.png" width="600">
    <br>
    <em></em>
</p>

<!-- ---

# Ek bilgi

- blabla

---
# Kaynakça 

1.  -->
