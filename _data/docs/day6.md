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
- [Backend Deployment](#backend-deployment)
  - [Digitalocean](#digitalocean)
    - [pm2](#pm2)
    - [Bu kodda bir güncelleme yapmak istersek nasıl yapabiliriz?](#bu-kodda-bir-güncelleme-yapmak-istersek-nasıl-yapabiliriz)
    - [Port ile ilgili bir sorunumuz oluyor mu 4000 portu dışında bir yerde çalışmasını nasıl sağlayabiliriz? - `Nginx`](#port-ile-ilgili-bir-sorunumuz-oluyor-mu-4000-portu-dışında-bir-yerde-çalışmasını-nasıl-sağlayabiliriz---nginx)
    - [Neden bu port yönlendirmesini yaptık?](#neden-bu-port-yönlendirmesini-yaptık)
    - [Özet](#özet)

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


# Backend Deployment

## Digitalocean

Şimdi dün oluşturmuş olduğumuz backend'imizi digitalocean üzerine yükleyeceğiz. (deploy edeceğiz.)

Bunu yapmak için önce digitalocean üzerinden bir droplet açmamız gerkiyor. Bu kısımda en düşük opsiyonlar ile bir sunucu ayağa kaldırıyoruz. 

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-11-41-23.png" width="600">
    <br>
    <em>5 dolarlık sunucuyu seçiyoruz.</em>
</p>

`ubuntu s` adında bir droplet hazırladık şimdi bu sunucu üzerinde çalışmaya başlayacağız.

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-11-42-43.png" width="600">
    <br>
    <em></em>
</p>

Dropletimizin ip'sine ssh ile terminal üzerinden şu şekilde bağlanıyoruz.

```bash
ssh root@161.35.221.191
```
Sunucumuz içinde `nodejs` kurulu değil.

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-11-46-43.png" width="600">
    <br>
    <em></em>
</p>

Sunucumuz içine nodejs'si kuruyoruz.

Kurulumu [buradaki](https://github.com/nodesource/distributions/blob/master/README.md#:~:text=Node.js%20v14.x:) referans ile gerçekleştiriyoruz 

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Bu adımlardan sonra sunucumuz üzerindeh hem `node` ve hem de `npm` var olmuş oluyor.

```bash
root@ubuntu-s:~# npm -v
6.14.11
root@ubuntu-s:~# node -v
v14.16.0
```

Şimdi deploy etmek istediğimiz dosyaları sunucumuza yüklüyoruz. Yükleme işlemini yaparken git ile isteneilen repo clone edilebilir.

Ardından `npm install`'ı çalıştırarak gerekli paketleri sunucumuza kuruyoruz.

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-49-21.png" width="700">
    <br>
    <em></em>
</p>

```bash
node index.js 
```
diyerek serverimizi çalıştırıyoruz. 

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-50-02.png" width="700">
    <br>
    <em></em>
</p>

Test edelim...

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-51-56.png" width="600">
    <br>
    <em></em>
</p>

Evet sunucumuz çalışmakta.

***

### pm2

Fakat bi sorun var biz uzak sunucudan bağlantımızı kesince server çalışmayı durduracak. Bu durumun önüne geçmek için kullancağımız aracın ismi [**`pm2`**](https://pm2.io/)

Bu araç ile birlikte sunucudan çıksanız (terminal'i kapatsanız) bile görevler arka planda çalışamaya devam ediyorlar.

> pm2'yu kuruyoruz.

```bash
npm i -g pm2
```
- **`pm2 start index.js`** dediğimizde çalışmaya başlıyor

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-54-46.png" width="600">
    <br>
    <em></em>
</p>

- **`pm2 status`** ile de o an çalışan prosessleri görebiliyorsunu.

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-55-28.png" width="700">
    <br>
    <em></em>
</p>

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-55-45.png" width="500">
    <br>
    <em></em>
</p>

> **görüldüğü üzere hala çalışıyor.**


- **`pm2 logs`**
> servermizde alakalı bir log tuyor olacağız

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-56-25.png" width="700">
    <br>
    <em></em>
</p>

- **`pm2 stop index.js`**
> **process'i durdurmak istersek**

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-57-21.png" width="500">
    <br>
    <em></em>
</p>

- **`pm2 start index.js --name prod`**  
> **bu şekilde tanımladığımızda farklı bir isimle görüntüleyebliyorz.**

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-59-10.png" width="700">
    <br>
    <em></em>
</p>


eğer kullanmadığınız process'leri silmek isterseniz; 

**`pm2 delete index`**
> **index = processin ismi**


<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-12-59-52.png" width="700">
    <br>
    <em></em>
</p>


### Bu kodda bir güncelleme yapmak istersek nasıl yapabiliriz?

Ya kodu tekrar clone etmek gerekir ya da github actions ile bir otomasyon kurup kodunuz buraya otomatik olarak deploy edilmesini sağlayabiliriz.

### Port ile ilgili bir sorunumuz oluyor mu 4000 portu dışında bir yerde çalışmasını nasıl sağlayabiliriz? - `Nginx`

burdada bir reverse proxy kullanmamız gerek
 80 (http defautl port) protuna gelen istekleri 4000 portundan karşılamaız gerekiyor bunu **`nginx`** kullanarak halledebiliriz.

```bash
sudo apt install nginx
```
> [how-to-install-nginx-on-ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)

* nginx'i kurduktan sonra

<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-13-07-40.png" width="600">
    <br>
    <em></em>
</p>

serverimizin (4000 portu) default path'de (80 portu) çalışmasını istiyoruz. Bunu yapabilmek için bir ayar yapmamız gerekiyor.


```bash
vi /etc/nginx/sites-available/default
```
> [how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)

> proxy o gibi davran demek

```bash
. . .
    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
`/etc/nginx/sites-available/default` dosyası içindeki `location kısmını` bu şekidle güncelledik.

> https://gist.github.com/meseven/1bf1b903bd2c30e84d561ed889ce6698


```bash
root@ubuntu-s:~/sources/day5/1-formik/backend# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

bir sorun var mı diye test ettik.

bu noktada nginx'i restart etmemiz gerek 

```bash
service nginx restart
```

ardından default port'da uygulamamızın çalıştığını görmekteyiz. 


<p align="center">
    <img alt="imgName" src="../images/day-6/2021-03-08-13-18-00.png" width="600">
    <br>
    <em></em>
</p>


### Neden bu port yönlendirmesini yaptık?

DNS servisine 4000 portu ile bir A kaydı girmemiz mümkün olmadığından serverimizin 8080 yani default http portunda çalışmasını sağladık.


### Özet 

1- Digitalocean üzerinden bir droplet oluşturduk.

2- NodeJs'i sunucumuza yükledik.

3- Github'dan projeyi sunucumuz'a çektik. Ve npm paketlerinin kurulumunu yaptık.

4- Projeyi orda ayağa kaldırdırk. Serverimiz çalışıyordu.

5- Serverimiz sadece terminalimiz ayaktaiken çalışıyordu.

6- Bu sorunu gidermek için de pm2 adlı aracı kuruduk. Bu sayede server arka planda çalışabilir hale geldi.

5- Serverimiz 4000 protunda çalışıyordu bunu çözmek için ng

6- Bunu çözmek için nginx'i kurduk ve sunucumuzu default portu 4000 portuna yönlendirdik.

----























<!-- ---

# Ek bilgi

- blabla

---
# Kaynakça 

1.  -->
