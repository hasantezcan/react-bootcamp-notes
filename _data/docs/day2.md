### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 2 - 2020.12.20`
> ???

Bu bölümde;
- [JavaScript Package managers](#javascript-package-managers)
  - [npm](#npm)
    - [npm'e script ekleme](#npme-script-ekleme)
  - [npm ile npx arasındaki fark!](#npm-ile-npx-arasındaki-fark)
  - [yarn](#yarn)
  - [`yarn` ve `npm` arsındaki farklar!](#yarn-ve-npm-arsındaki-farklar)
    - [Npm vs Yarn commands](#npm-vs-yarn-commands)
    - [İkisi için de aynı olan komutlar](#i̇kisi-için-de-aynı-olan-komutlar)
  - [`package-lock.json` nedir?](#package-lockjson-nedir)
  - [`~`, `^`, `*` Bu işaretler ne manaya geliyor? (`SemVer`)](#---bu-işaretler-ne-manaya-geliyor-semver)
- [Kaynakça](#kaynakça)

# JavaScript Package managers
> [How JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/) - Shubheksha Jalan

Basitçe söylemek gerekirse, bir paket yöneticisi, projenizin doğru çalışması için ihtiyaç duyduğu bağımlılıkları (sizin veya başka biri tarafından yazılan harici kod) yönetmenizi sağlayan bir yazılım parçasıdır.

Paket yöneticisi, yazılım paketlerini kurmak, kaldırmak ve yönetmek için kullanılır.

Paket yöneticisinin yaptığı şey, yazılım paketlerini tutarlı bir şekilde yükleme, yükseltme, yapılandırma ve kaldırma sürecini otomatikleştirmektir.

## npm
> **https://www.npmjs.com/**

Açılımı **Node Package Manager**'dır. Isaac [Z. Schlueter](https://twitter.com/izs) tarafından tamamen javascript dili kullanılarak geliştirilmiştir.

> “npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you’re sharing” — npmjs.org

Yeni bir js projesine başladman önce bir js projesi künyesi oluşturmak isterseniz (önerilir); önce npm'i o dizine kurmalısnız.

```bash
npm init
```

npm sizden paket detaylarını sıra sıra isteyecektir. Bunları yavaş doldurabilir ya da hepsine yes (evet) deyip hızlıca geçebilirsiniz.


```bash
npm init -y
```

Paketi bu şekilde başlatırsanız bunun gibi bir çıktı alacaksınız;

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### npm'e script ekleme
> [Introduction to NPM Scripts](https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/) - Mohammed Ajmal Siddiqui

**scripts** bölümü aslında bir [alias](https://github.com/hasantezcan/oyk-2018-yaz-gnu-linux-sistem-yonetimi-duzey-1/blob/master/Gun%202-Alias-MetinEditorleri-OrtamDegiskenleri_PATH-KabukAyarDosyalari/OYYK-Gun-2--Alias-MetinEditorleri-OrtamDegiskenleri_PATH-KabukAyarDosyalari.md#alias-takma-isimler) alanıdır. Buraya ek scriptler eklenebilir. 


`script`'leri tekrarlayan görevleri otomatikleştirmek için kullanıyoruz. 

*Örneğin,* projenizi ayağa kaldırmak, projenizin buildini almak ya da önceden yazdığınız bir betiği tek seferde hızlıca çalıştırmak için script'leri kullanabilirsiniz.

```json
"scripts": {
  "start": "node index.js",
  "say-hello": "echo 'Hello World!'"
  }
```

```bash
npm run say-hello
```
---

```json
"scripts": {
    "dev": "nodemon src/app.js",
    "build": "sucrase ./src -d ./dist --transforms imports",
    "start": "node dist/app.js"
```
> **sucrase**: yazdığınız kodları ES6+ standartları ile derler.  
> **nodemon**: yazdığınız kod yaptığınız değişiklikleri canlı olarak takip etmenizi sağlar.

> ### `npm cheat sheet:` **https://devhints.io/npm**


## npm ile npx arasındaki fark!
> **https://aykutkardas.medium.com/npx-nedir-c6a604cde961**

`npx` kurulan paketleri package json'a eklemez! Sadece o an için kurar. İlerde aynı proje başka bir yerde ayağa kaldırıldığında npx ile kurulan paketleri kurmayacaktır.

Ör: `create react app` (npx ile kurarız.)

Fakat `npm` ile kurulan paketler `package json`'a eklenir. Ve proje tekrar kurulduğunda bu paketlerle birlikte kurulur.



## yarn
> [A Quick Introduction to the Yarn Package Manager](https://www.digitalocean.com/community/tutorials/js-yarn-package-manager-quick-intro) - Alligator.io


[**Yarn**](https://yarnpkg.com/), Facebook tarafından geliştirilen yeni ve açık kaynaklı JavaScript paket yöneticisidir. Yarn, `npm` paket yöneticisi ile tamamen uyumludur ve `npm` ile birlikte çalışabilir, ancak daha tehlikesiz, daha güvenli ve daha emniyetli bir alternatif olmayı amaçlamaktadır.  

Yeni veya mevcut projeler için tüm npm iş akışınızı çok az çabayla Yarn ile değiştirebilirsiniz. Yarn'da bağımlılıklar yarn.lock içinde saklanır. Bu dosya versiyon kontrol araçı ile takip edilmelirdir. Ve bu dosya sadece yarn tarıfndan düzenlenir elle bir değişiklik yapmanız önerilmez. 


## `yarn` ve `npm` arsındaki farklar!
> [Yarn Vs NPM, Which One To Choose In 2020](https://www.javascriptwillrule.com/yarn-vs-npm-speed-tests) - Subin Sudhakaran  

- **Modül Kurulum Hızı'ı**  
  Yarn kullanarak bir paket kurduğunuzda (`yarn add packagename`), paketi diskinize cashler. Bir sonraki kurulumda, kurulum için gerekli tarball'ı (çok sayıda dosyanın tar uzantılı sıkıştırılmış hali) almak için HTTP isteği göndermek yerine cashle'diği paketi kullanılacaktır.

  Önbelleğe alınan modülünüz `~/.yarn-cache` içine alınacak ve registry adı önekini alacak ve modül sürümü ile sonradan eklenmiş olacaktır. 
  
  Yani express'in 4.4.5 sürümünü Yarn ile kurarsanız,  
  **`~/.yarn-cache/npm-express-4.4.5.`** gibi bir cashe'iniz olacak demektir.

- **Paralel Kurulum**
  Npm ile bir paketi kurarken başka bir paketi eklemek mümkün değil. Yeni bir paket eklemeden önce öbürünün tamamen bitmesini beklemelisiniz.

  Fakat `yarn` paket kurulumlarını paralel olarak gerçekleştirerek performansı artırır. 

  > **Expres paketi için kurulum süreleri.** (bağımlılıklarala beraber 42 paket)
  ```bash
    npm: 9 seconds

    Yarn: 1.37 seconds
  ```

- **Yarn nodeJs'ün 5. sürümü altında destek vermiyor.**

  Yarn `(released 2016)`, npm'e`(2010)` göre daha yeni bir paket yöneticisi olduğundan sürüm desteği npm kadar geniş değil.

### Npm vs Yarn commands
> [Cheat Sheet: npm vs Yarn Commands](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet) - William Le

| **Command** | **npm** | **yarn** |
|:---:|:---:|:---:|
| Install dependencies | `npm install` | `yarn` |
| Install package | `npm install [package]` | `yarn add [package]` |
| Install dev package | `npm install --save-dev [package]` | `yarn add --dev [package]` |
| Uninstall package | `npm uninstall [package]` | `yarn remove [package]` |
| Uninstall dev package | `npm uninstall --save-dev [package]` | `yarn remove [package]` |
| Update | `npm update` | `yarn upgrade` |
| Update package | `npm update [package]` | `yarn upgrade [package]` |
| Global install package | `npm install --global [package]` | `yarn global add [package]` |
| Global uninstall package | `npm uninstall --global [package]` | `yarn global remove [package]` |

### İkisi için de aynı olan komutlar
> Yarn'ın değiştirmemeye karar verdiği bazı komutlar

| **npm** | **yarn** |
|:---:|:---:|
| `npm init` | `yarn init` |
| `npm run` | `yarn run` |
| `npm test` | `yarn test` |
| `npm login` (and `logout`) | `yarn login` (and`logout`) |
| `npm link` | `yarn link` |
| `npm publish` | `yarn publish` |
| `npm cache clean` | `yarn cache clean` |

---

## `package-lock.json` nedir?
> - https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json  

`package-lock.json` `package.json`'dan farklı olarak kullandığınız paketlerin bağımlılıklarını da saklar. 

Örneğin projenize sadece express ve axios kurduğunuzu düşünün bu durumda `package.json` içinde sadece bu iki bağımlılığı göreceksiniz.

```diff
{..
  ...
  "license": "ISC",
  "dependencies": {
+    "axios": "^0.20.0",
+    "express": "^4.17.1"
  }
}
```

ama `package-lock.json` içine baktığınızda express'in çalışabilmesi için gerekli olan tüm pakatler ve bu paketlerin versiyon sınırlarını göreceksiniz. 

<p align="center">
    <img alt="imgName" src="../images/day-2/2021-02-03-17-28-26.png" width="300">
    <br>
    <em>
       package-lock.json dependencies 
    </em>
</p>

npm install komutunu çalıştırdığınız anda `package-lock.json` da güncellenir ve `package.json`'a ayak uydurur.


> - Tutarlı bir yükleme ve uyumlu bağımlılıklar sağlamak için `package-lock`'ı kullanmalısınız

> - `package-lock` dosyanızı versiyon kontrol ile takip etmelisiniz. *(`.gitignore` içne koyMAMALSINIZ!)*

> - `package-lock`'ı her seferinde silmenize gerek yok! `npm install`ı çalıştırmak `package.lock`'ı sizin için tekrar oluşturacaktır.

---

> - [Everything You Wanted To Know About package-lock.json But Were Too Afraid To Ask](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8) - James Quigley 

!! Bu kaynakta verilen bir kısım verilen şu an geçerli değil.

> ...."Example: A module does not exist in the package-lock, but it does exist in the package.json. As a user who looks to package.json as the source of truth, I would expect for my module to be installed. However since the module is not present in package-lock, it isn’t installed, and my code fails because it cannot find the module."...

> Bu örnekte bahsedilen durumu deneyip aksinin olduğunu gördükten sonra şu şekilde bir cevap verdim. **"That information is not valid anymore. If the package exists on package.json even if not exist in package-lock.json when you will run the npm install the package-lock.json file will update with the package that doesn't exist before"** 

## `~`, `^`, `*` Bu işaretler ne manaya geliyor? (`SemVer`)
> [What Do the ~, ^, and * Mean in package.json?](https://gunnariauvinen.com/what-do-the-tilde-carrot-and-asterick-mean-in-package-dot-json/)

Bu işaretleri dil ya da framework'lerden bağımsız şekilde herhangi bir paketin versiyonu yanında görmeniz pek mümkün.

Bunlar **`SemVer`** yani [Semantic Versioning](https://semver.org/) ilgili semboller. Semantik programlma nedir kısa bir özet yapmak gerekirse. Üçlü versiyonlama sitemine Semantik Versiyonlama denir. **`x.y.z` major version x, minor version y, and patch version z.**

- **x** `MAJOR` Önceki sürümle uyumsuz API değişiklikleri yaptığınızda,
- **y** `MINOR` Önceki sürümle uyumlu bir davranış eklediğinizde,
- **z** `PATCH` Önceki sürümle uyumlu bir hata düzeltmesi yaptığınızda

- `~` karakteri, herhangi bir PATCH numarasıyla eşleşirken hem major hem de minor sürüm numaralarını düzeltir.

  > **`2.3.1 =< ~2.3.1 < 2.4.0`**

- `^` karakteri, major sürüm numarasını kilitleyen, ancak minor ve patch sürümlerini daha esnek hale getirir.

  > **`2.2.3 < ^2.2.3 < 3.0.0`**

- `*` karakteri, çok sık kullanılmaz. O major sürümü için tüm minor ve patch'leri kabul eder. 

  > **`1.0.0 < 1.* < 2.0.0`**



...  
...  
...  
...  
...  
...  
...  
...  

---
# Kaynakça  

- [Everything You Wanted To Know About package-lock.json But Were Too Afraid To Ask](https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8) - James Quigley
- [What Do the ~, ^, and * Mean in package.json?](https://gunnariauvinen.com/what-do-the-tilde-carrot-and-asterick-mean-in-package-dot-json/) - Gunnari Auvinen
- [How JavaScript package managers work](https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/) - Shubheksha Jalan
- [Introduction to NPM Scripts](https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/) - Mohammed Ajmal Siddiqui
- [Cheat Sheet: npm vs Yarn Commands](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet) - William Le
- [A Quick Introduction to the Yarn Package Manager](https://www.digitalocean.com/community/tutorials/js-yarn-package-manager-quick-intro) - Alligator.io