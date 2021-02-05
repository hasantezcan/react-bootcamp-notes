`Soru:` Gün 2 scripts ile ilgili.

```json
"scripts": {
    "dev": "nodemon src/app.js",
    "build": "sucrase ./src -d ./dist --transforms imports",
    "start": "node dist/app.js"
```

Burada dev ile çalışırken nodemon bizim için sürekli derleme yaparak kodumuzu aktif olarak görmemizi sağlıyor. Fakat dev scripti içinde sucrase ile ilgili bir tanım yok. npm run dev ile ES6+ standartında yazdığımız kodu canlı görebiliyoruz. Bu ikisi arasında nasıl bir bağlantı var.

şöyle bir şey olmalıymış gibi geliyor.

```bash
nodemon sucrase src/app.js
```
## **CEVAP:**
```js
//nodemon.json
{
	"execMap": {
		"js": "node -r sucrase/register"
	}
}
```

bunu eklediğimiz için yapabilyoruz. Teşekkürler.

> yt! t=1611
---