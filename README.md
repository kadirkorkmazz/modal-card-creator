# Modal Card Creator

Modal Card Creator ile modal listesinden seçtiğiniz bir modal'ın renk, boyut,
sayfa pozisyonu, görsel ve daha bir çok özelliğini dilediğiniz gibi özelleştirebilir, son aşamada verilen çıktıyı sitenizin <body> tagleri arasına ekleyerek kullanabilirsiniz.

## Kullanılan Teknolojiler
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white). ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)   ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)   ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 

React Context - Eslint - Prettier - Upload.js

## Demo

[🔴 Live Link](https://modal-creator-page-kadir.vercel.app/)


## Kullanımı

### :small_orange_diamond: Aşama 1: Choose your template

Bu aşamada listelenen modallardan birini seçmeniz gerekiyor. (Şu an seçilebilir 3 modal, koda dökülebilir 1 modal var)

### :small_orange_diamond: Aşama 2: Appearance

Seçtiğiniz modalın;
* boyutunu
* ekrandaki pozisyonunu
* rengini
* varsa logosunu

değiştirebilirsiniz

### :small_orange_diamond: Aşama 3: Content

Modalın içerdiği tüm yazıları ve varsa görselini değiştirebilirsiniz

### :small_orange_diamond: Aşama 4: Targeting Rules

* Visitor Device: Ziyaretçilerinizin cihaz tipini belirleyin. Kapalı olarak işaretlenirse tüm ziyaretçi türleri olarak seçilir.
* After X Second: Modalınız girdiğiniz sürenin sonunda ekrana gelecektir.
* After % Scroll: Modalınız ekranın girilen yüzdesi scroll edildiğinde aktif olacaktır.
* Traffic Source: Modalınız sadece girilen adresten yönlendirilen ziyaretçilerin karşısına çıkacaktır.
* *Browser Language: Ziyaretçilerin tarayıcı dillerini belirleyin. Seçilen dillere göre modal değişiklik gösterecektir.
* Exit Intent Targeting: Modalınız, ziyaretçi sitenizden ayrılmak istediğinde aktif olur. (Mouse tarayıcının içerik alanının dışına çıktığında)

  <sub> *Bu özellik henüz aktif değil. </sub>

### :small_orange_diamond: Aşama 5: Settings and Code

Bu aşamada girdiğiniz webhook adresine modalınızın ziyaretçi etkileşimleri ve ziyaretçilerin tarayıcı detayları gönderilir.

<sub>Dil, tarih, saat, işletim sistemi, tarayıcı, tıklanan alanlar vs. </sub>

Son aşamada tek yapmanız gereken "Get Your Code" butonuna basmak ve verilen kodu web sayfanızın body tagleri arasına yapıştırmak.

Artık modalınız Aktif! :tada: :tada:



## Dağıtım

Bu projeyi geliştirici modunda çalıştırmak için;

```bash
npm run dev
```

Bu projeyi build etmek için;

```bash
npm run build

```

komutlarını kullanabilirsiniz.

## Ekran Görüntüleri

![Uygulama Ekran Görüntüsü](./public/screencapture.png)
