### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 3 - 2020.12.26`
> React'a giriş temeller ile tanışma

Bu bölümde;

- **[Neden React'ı kullanmalıyız?](#neden-reactı-kullanmalıyız)**
- [**React Nasıl Ortaya Çıktı?**](#react-nasıl-ortaya-çıktı)
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

Bu yaklaşım birbirinden bağımsız bir çok konu için geçerlidir. *(dizi, film, meslek seçimi, düşünce seçimi ya da kullanılan araç/alet seçimi şekilde)*   

Eee, bizim de konumuz bir web geliştirme aracı olan  **`React`**.   
O zaman soru geliyor..   
**Neden React?** 

## Neden `React`'ı kullanmalıyız?

> Aslında böyle sorular sorumak yerine direk konuya girmek, bir an evvel detaylardan bahsetmek bir çok kişinin istediği şey. Ama bu kısa girişte, yazının devamında konuşacağımız onca şeyin niye anlatıldığını sağlam bir temele oturtmak için bunu girişi gerekli buluyorum.

Evet, bu soruyu ben de google amcaya soruduğumda bir çok yanıt aldım. Genelde bu yanıtlar eski bir yöntem ile -yeni diyebiliceğimiz- React'ın kıyaslaması şeklinde. Tabi bu işlerde yeni iseniz eskiden ne kullanıldığı hakkında bir bilginiz olmadığından bu kıyaslamalı örnekler sizde diğerlerine nazaran çok daha az etki gösteriyor. Direkt yenisini öğrenmek ile başlıyorsunuz. Ama yinede ufak bi kıyaslama ile React'ı diğerlerinden ayıran temel bir farka değinelim.

### Virtual DOM

React bize en temelde virtual DOM diye bir kavram ile geliyor.   
React hali hazırda olan **DOM**'un yani **document object model**'i daha da yanisi tarayıcıda görüğünüz sayfayı *-ve onun içeriğinin-* bir kopyasını Virtual DOM'da tutuyor. Bunu yapmasının sebebi ise sayfada yapılacak güncellemelerin kontrolünü sağlamak. Bu iki kopya arasında değişikleri takip edip sadece değişen kısımları ekranda da güncellemek.

<p align="center">
    <img alt="virtual-dom" src="../images/day-3/virtual-dom.png" width="500">
    <br>
    <em>
        <a href="https://mfrachet.github.io/create-frontend-framework/vdom/intro.html">Virtual DOM</a>
    </em>
</p>

Hadi bunu kısa bir demo ile görelim.

> Google chorme içinde dev tools adlı bir bölüm ve onun altında sayfada gerçekleşen değişklikleri daha net görmemizi sağlayan [**paint flashing**](https://developer.mozilla.org/en-US/docs/Tools/Paint_Flashing_Tool) isimli bir seçenek var bunu açtığınızda sayfada o an neresi güncellenirse size bunu net bir şekilde gösteriyor şimdi bu araçtan faydalanıp bir demo yapacağız.

Şimdi ekrana bir buton koyup bu butona basıldığında ekrandaki 1 numarasını 2 yapan bir kod yazacağız. Bunu bi jQuery ile bir de React ile yapacağız ve Virtual DOM'un nasıl bir fayda sağladığını direk görmüş olcağız.



<p align="center">
    <img alt="jQuery-paint-flashing" src="../images/day-3/jquery.gif" width="500">
    <br>
    <em>
        jQuery obje güncellendiğinde <a href="./_data/practice/day3/1-jquery-vs-react/jquery.html">kodu</a>
    </em>
</p>

<p align="center">
    <img alt="react-paint-flashing" src="../images/day-3/react.gif" width="500">
    <br>
    <em>
        React obje güncellendiğinde <a href="./_data/practice/day3/1-jquery-vs-react/src/App.js">kodu</a>
    </em>
</p>

Burada da gördüğünüz gibi React sayıyı 1'den 2'ye çevirdikten sonra 2 elementini tekrar güncellemiyor çünkü orada bir değişiklik yok ama jQuery'de böyle bir yapı olmadığından 1'i 2 yaptıktan sonra bile tekrar tekrar 2'yerine 2 yazmaya devam ediyor.

### **`React gerekmedikçe dom'u güncellemez!`**

> **NOT:** React örneğinde sayfanın tamamında gözüken yeşillenme sadece ilk virtual DOM oluşurken meydana geliyor. 

Bu react'ın jQuery'a karşı güçlü olduğu noktaydı. Peki diğerleri yani Vue, Angular için durum nasıl.

Bu saydıklarımızdan Vue'de de Virtual DOM uygulaması bulunmakta. Ama React'ın başka özellikleri/artıları da mevcut. Bunlara yeri geldikçe değincek olsak da şimdi bir kaç başlıla bunlaradan bahsedelim.

- JSX
- React Native
- Single-Way data flow
- Reusable Components
- Redux & Other Libraries
- Community Support & Developer Tools

Vue ile React arasındaki farklara değinen güzel bir yazıda şuarada mevcut merak edersiniz buyurun efenimm [mindk.com/react-vs-vue/](https://www.mindk.com/blog/react-vs-vue/) 

> **Dahda fazla detay için:**
> - [Why did we build React? - **reactjs.org**](https://reactjs.org/blog/2013/06/05/why-react.html)
> - [When Does a Project Need React? - **css-tricks**](https://css-tricks.com/project-need-react/)
> - [What and Why React.js](https://www.c-sharpcorner.com/article/what-and-why-reactjs/)
> - [When to Use React and Why](https://www.intertech.com/react-tutorial-when-to-use-react-and-why/)
> - [Nedir Bu React? Neden Kullanmalıyız, Nasıl başlarız, Neler Yapabiliriz](https://medium.com/t%C3%BCrkiye/nedir-bu-react-neden-kullanmal%C4%B1y%C4%B1z-nas%C4%B1l-ba%C5%9Flar%C4%B1z-neler-yapabiliriz-f473e3ae0a7e)
> - [ReactJs Nedir ve Neden Kullanmalıyız?](https://www.mobilhanem.com/reactjs-nedir-neden-reactjs-kullanmaliyim/?__cf_chl_jschl_tk__=764adb4a83bd31511e01f7c1c91394c7af0d13a1-1609533257-0-AUpb1gz6c7kusV_3b6SqHUlqi1MU7PZxbO8tFUrm661u8918ml73BNhhC_qBoyF6golNsC9afFwrpKkGttRZ7MXNHblYPY8TbeMp--3DN70IbdL1wBw57xeJ4ndkILIv80WFaJ6loMwNinY9McPZIjegixyMiFBqATFTiYPajlNBA-PDIm-ImD7OPwsie6Pn17pyu9FcNzwDr8LtD288ncAkXscrwwdNCdcJkDk0uH2remaY0Dq0pouordvKSML1LFX6hJ3UNSo1lmlOQ-PGhZrD01KmVEpP5tqtJcBaQKePtLuZ6HM9ferAsd8Bkqs-JIvGuKQbhlnsW0c6MkmLyLCmlchgpHuVmGcb-eKdgd8S)

---

Biraz da react'ın tarihçesinden bahsedelim.

## React Nasıl Ortaya Çıktı?

React, "FaxJS" adlı ilk React prototipini yayınlayan Facebook'ta yazılım mühendisi **Jordan Walke** tarafından oluşturuldu. [[1]](https://github.com/jordwalke/FaxJs) [[2]](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/) PHP için bir HTML component kitaplığı olan [XHP](https://en.wikipedia.org/wiki/XHP)'den etkilendi. İlk olarak 2011'de [Facebook News Feed](https://en.wikipedia.org/wiki/News_Feed)'de ve daha sonra 2012'de Instagram'da kullanıldı.[[3]](https://www.youtube.com/watch?v=A0Kj49z6WdM) Mayıs 2013'te **JSConf ABD'de** açık kaynak olarak yayınlandı. [[4]](https://www.youtube.com/watch?v=GW0rj4sNH2w)

Android, iOS ve [UWP](https://en.wikipedia.org/wiki/Universal_Windows_Platform) geliştirmeye olanak tanıyan [**React Native**](https://en.wikipedia.org/wiki/React_Native) ise Şubat 2015'te Facebook'un düzenlemiş olduğu React Conf'te duyuruldu ve Mart 2015'te açık kaynaklı hale getirildi.

Facebook, 18 Nisan 2017'de kullanıcı arayüzleri oluşturmak için React Fiber adında yeni bir temel react algoritması duyurdu.

26 Eylül 2017'de [React 16.0](https://reactjs.org/blog/2017/09/26/react-v16.0.html) yayınlandı.

16 Şubat 2019'da React 16.8 duyuruldu. [React Hooks!](https://reactjs.org/docs/hooks-intro.html)

10 Ağustos 2020'de React ekibi, React geliştiriciye dönük API'de büyük değişiklikler olmaksızın ilk büyük sürüm olarak dikkat çeken [React v17.0](https://reactjs.org/blog/2020/08/10/react-v17-rc.html)'yi duyurdu.

> Bu bilgiler wikipedia [react history](https://en.wikipedia.org/wiki/React_(web_framework)#History) bölümünden alınmıştır.

---

## Web Component'leri Nedir?
Component kavramı React özelinde bir konu değil. Web componentleri yıllardır var olan bir uygulama ve buna bir çok framework kütüphane içinde benzerleri ile karşılaşabilirsiniz. 

Componentler ile küçük parçarlardan bir bütünü inşa ediyoruz. Ve bu tekrar kullanıbilir şekilde tasarlıyoruz. Aynı işi yapan bölümleri tek bi seferde oluşturup tekrar tekrar o parçalari kullanıyoruz. [[5]](https://css-tricks.com/an-introduction-to-web-components/), [[6]](https://developer.mozilla.org/en-US/docs/Web/Web_Components)


<p align="center">
    <img alt="react-paint-flashing" src="../images/day-3/component.png" width="500">
    <br>
    <em>
         <a href="https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg">Components</a>
    </em>
</p>

React bize [tekrar tekrar kullanılabilien](https://reactjs.org/docs/components-and-props.html) component'leri üretmemize yardımcı olur. [[7]](https://reactjs.org/docs/components-and-props.html)
 

## JSX Nedir ?






















## Kaynakça 

1. Walke, Jordan. ["FaxJS"](https://github.com/jordwalke/FaxJs). Retrieved 11 July 2019.
2.  Papp, Andrea (4 April 2018). ["The History of React.js on a Timeline"](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/). RisingStack. Retrieved 11 July 2019.
3.  ["Pete Hunt at TXJS"](https://www.youtube.com/watch?v=A0Kj49z6WdM)
4. [[JSConfUS 2013]](https://www.youtube.com/watch?v=GW0rj4sNH2w) Tom Occhino and Jordan Walke: JS Apps at Facebook
5. An Introduction to [Web Components](https://css-tricks.com/an-introduction-to-web-components/), css-tricks
6. [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) MDN
7. React [reuseable components](https://reactjs.org/docs/components-and-props.html)
