### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 3 - 2020.12.26`
> React'a giriş temeller ile tanışma

Bu bölümde;

- [**React vs Jquery**]()
- [**Component Nedir?**]()
- [**React'ın Temelleri**]()
  - [Props]()
    - [prop type]()
  - [State]()
    - [prevState]()
  - [koşula bağlı bir şeyleri render etmek]()
  - [functinal components vs class base components]()
  - [Hook]()
    - [useEffect]()

konularından bahsedeceğiz.

---

İnsanlar bir şeylere başlarken çoğu zaman neden bunu yaptığını sorgulamazlar. Onları yönlendiren belli başlı sebeplere inanırlar ve peşinden giderler. Bu sebepler; herkesin o şeyi yapıyor/kulanıyor olması olabilir, reklamının iyi yapılmış ve alternatifleri değerlendirilmeden en iyisinin o olduğuna inanmışlık olabilir. Lafına güvendiği birinin tavsiyesi olabilir ya da elindeki kaynakların ona yetmesi olabilir. 

Bu yaklaşım birbirinden bağımsız bir çok konu için geçerlidir. *(dizi, filim, meslek seçimi,düşünce seçimi ya da kullanılan araç/alet seçimi şekilde)*   

Eee, bizim de konumuz bir web geliştirme aracı olan  **`React`**.   
O zaman soru geliyor..   
**Neden React?** 

## Neden `React`'ı kullanmalıyız?

> Aslında böyle sorular sorumak yerine direk konuya girmek, bir an evvel detaylardan bahsetmek bir çok kişin istediği şey. Ama bu kısa girişte, yazınını devamında konuşacağımız onca şeyin niye anlatıldığını sağlam bir temele oturtmak için bunu girişi gerekli buluyorum.

Evet, bu soruyu ben de google amcaya sorudğumda bir çok yanıt aldım. Genelde bu yanıtlar eski bir yöntem ile -yeni deyebiliceğimiz- React'ın kıyaslaması şeklinde. Tabi bu işlerde yeni iseniz eskiden ne kullanıldığı hakkında bir bilginiz olmadığından bu kıyaslamalı örnekler sizde diğerlerine nazaran çok daha az etki gösteriyor. Direk yenisini öğrenmek ile başlıyorsunuz. 

Şimdi, React bize en temelde virtual DOM diye bir kavram ile geliyor.   
React hali hazırda olan **DOM**'un yani **document object model** daha yanisi de tarayıcıda görüğünüz sayfa *-ve onun içeriğinin-* bir kopyasını Virtual DOM'da tutuyor. Bunu yapmasının sebebi ise sayfada yapılacak güncellemelerin kontrolünü sağlamak. Bu iki kopya arasında değişikleri takip edip sadece değişen kısımları ekranda da güncellemek.

Hadi bunu kısa bir demo ile görelim.

> Google chorme içinde dev tools adlı bir bölüm ve onun altında sayfada gerçekleşen değişklikleri daha net görmemizi sağlayan **paint flashing** isimli bir seçenek var bunu açtığınızda sayfada o an neresi güncellenirse size bunu net bir şekilde gösteriyor şimdi bu araçtan faydalanıp bir demo yapacağız.

Şimdi ekrana bir buton koyup bu butona basıldığında ekrandaki 1 numarasını 2 yapan bir kod yazcağız. Bunu bi jQuery ile bir de React ile yapacağız ve Virtual DOM'un nasıl bir fayda sağladığını direk görmüş olcağız.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>jQuery Example</title>
</head>
<body>
	<h3>jQuery Example</h3>
	<h1>1</h1>
	<button>Click</button>


	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(() => {
			$('button').on('click', () => {
				$('h1').html('2')
			})
		})
	</script>
</body>
</html>

```

<p align="center">
    <img alt="jQuery-paint-flashing" src="../images/day-3/jquery.gif" width="500">
    <br>
    <em>
        jQuery obje güncellendiğinde
    </em>
</p>

```js
import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(1);

	return (
		<div className="App">
			<h3>React Example</h3>
			<h1>{count}</h1>
			<button onClick={() => setCount(2)}>Click</button>
		</div>
	);
}

export default App;

```

<p align="center">
    <img alt="react-paint-flashing" src="../images/day-3/react.gif" width="500">
    <br>
    <em>
        React obje güncellendiğinde
    </em>
</p>

Burada da gördüğünüz gibi React sayıyı 1'den 2'ye çevirdikten sonra 2 elementini tekrar güncelemiyor çünkü orada bir değişiklik yok ama jQuery'de böyle bir yapı olmadığından 1'i 2 yaptıktan sonra bile tekrar tekrar 2'yerine 2 yazmaya devam ediyor.

> **NOT:** React örenğinde sayfanın tamamında gözüken yeşillenme sadece ilk virtual DOM oluşurken meydana geliyor. 














<!-- ### paint flashing -->
















<!-- ## Kaynakça 

- [**[0]** ]()
- [**[0]** ]() -->