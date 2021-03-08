### `Kodluyoruz Earlybird Front-End Talent Bootcamp`

## `GÜN 6 - 2021.01.10`
> 

Bu bölümde;

- [Fronted için deployment servisleri](#fronted-için-deployment-servisleri)
  - [Surge.sh](#surgesh)
  - [Netlify](#netlify)
    - [Custom DNS](#custom-dns)
    - [Netlify Redirect Hatası çözümü](#netlify-redirect-hatası-çözümü)
    - [ParcelJS Nedir?](#parceljs-nedir)

konularından bahsedeceğiz.

---

# Fronted için deployment servisleri

Ürettiğimiz React projelerimizi internete açmak istediğimiz zaman bu projeleri uzak bilgisayarlarda her zaman çalışacak şekilde servis etmeliyiz. Bu işi yaparken kendi bilgisayarımızdan ngix gibi servisler ile bunu çözbilsek de 7/24 bilgisayarımızı bu işe ayıracamayağımızdan bu işi yapabilceğimiz servislere yöneliyoruz. Şimdi bu servislerden bir kaçını göreceğiz. 

> **Amaç React projemiziden çıkan build dosyasını yayınlamak.**

## Surge.sh
> **https://surge.sh/**

- Surge İle deploy yapmadna önce manuel build almamız gerekiyor.
- Kullanımı gayet basit.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-00-46.png" width="600">
</p>

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-02-22.png" width="600">
</p>

## Netlify

Netlify'a tüm github repolarınıza erişsin diye izin verebilirsiniz. Ama isterseniz sadece istediğiniz repolara erişimini de sağlayabilirsiniz.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-05-21.png" width="500">
</p>

Netlifay'a izin verdiğiniz repolar sizin için listelenecek istediğiniz repoyu seçip ilerleyebilirsiniz.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-06-45.png" width="600">
</p>

Projeneizi build etmek için kullandığınız komudu buraya girebilirsiniz ama genellikle default olan sizin işinizi görecektir.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-18-26.png" width="600">
</p>

Projenizde kullnadığınız ENV variable'ları da buraya ekeleyebilirsiniz.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-08-06.png" width="450">
</p>

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-56-46.png" width="600">
</p>

Bu işlem de bittikten sonra ilk deployunuz alınmaya başlayacak. Bundan sonrasında siz her commit attıktan sonra sizin için yeni bir deploy alıp paylaşılacak. Yapılan her deployun live halini de netlify üzerinde bulabilirsiniz.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-09-08.png" width="600">
</p>

Ayrıca github üzerinde deployment durumlarını da sizin için monitör ediyor olacak.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-23-49.png" width="600">
</p>

Ayrıca deployment'larınzdan custom olarak bildirim almak için de çözümleri mevucut.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-58-57.png" width="600">
</p>

Web hook denemesi yapmak için kullanabilceğiniz bir servis. [**Hookbin**](https://hookbin.com/2qjGVgnMPOH9BBKGpZzp)

Bu servis ile webhook'ları test edebiliyoruz.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-08-01-25.png" width="600">
</p>

### Custom DNS

Netlify üzerine paylaşılan deploy'ları kendi domainiz içinde gösterebilirsiniz. Yapmanız gereken tek şey domain'inize gerekli DNS kaydlarını eklemek.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-31-52.png" width="600">
</p>

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-32-31.png" width="600">
</p>

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-32-55.png" width="600">
</p>

### Netlify Redirect Hatası çözümü

- https://github.com/netlify/cli/issues/794


### ParcelJS Nedir?
> **https://parceljs.org/**

Daha optimize deployment almamıza yarayan bir araç.

<p align="center">
  <img alt="img-name" src="../images/day-6/2021-03-08-07-41-31.png" width="300">
</p>

> **Adem ilter'in konu ile ilgili [`anlatım videosu.`](https://www.youtube.com/watch?v=D2dDbhWNBII)**
































<!-- ---

# Ek bilgi

- blabla

---
# Kaynakça 

1.  -->
