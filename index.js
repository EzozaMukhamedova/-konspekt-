// DOM (Document Object Model)
// DOM nima?

// DOM – veb-sahifaning tuzilishini ifodalaydigan obyektlar modeli.
// HTML va CSS brauzer tomonidan DOM daraxti shaklida ko‘riladi.
// JavaScript yordamida DOMni o'zgartirish, element qo'shish yoki olib tashlash mumkin.
// DOM elementini olish:

// document.getElementById('id') – ID orqali elementni olish.
// document.querySelector('.class') – CSS selektori orqali olish.

// DOM Children
// Bolalar elementi (Children):

// DOM daraxtida har bir elementning ichida boshqa elementlar bo'lishi mumkin. Bular "children" deb ataladi.
// Foydalanish:

// element.children – barcha to‘g‘ridan-to‘g‘ri bolalarni qaytaradi.
// element.firstElementChild – birinchi bolani qaytaradi.
// element.lastElementChild – oxirgi bolani qaytaradi.

// const ul = document.querySelector('ul');
// console.log(ul.children);

// DOM Style
// Style nima?

// style DOM elementi orqali elementning uslublarini (CSS) JavaScript yordamida o'zgartirish mumkin.

// const div = document.querySelector("div");
// div.style.color = "red";
// div.style.backgroundColor = "yellow";

// DOM ClassList
// ClassList nima?

// HTML elementlariga CSS klasslarini qo'shish, olib tashlash va almashtirish uchun ishlatiladi.
// Foydalanish:

// element.classList.add('className') – Klass qo'shadi.
// element.classList.remove('className') – Klassni o'chiradi.
// element.classList.toggle('className') – Klassni qo'shadi yoki olib tashlaydi.
// element.classList.contains('className') – Klass bor-yo‘qligini tekshiradi.

// const box = document.querySelector('.box');
// box.classList.add('active');
// box.classList.toggle('hidden');

// cloneNode
// cloneNode nima?

// Elementni nusxalash uchun ishlatiladi.
// Foydalanish:

// element.cloneNode(true) – Elementni va uning barcha bolalarini nusxalaydi.
// element.cloneNode(false) – Faqat elementni nusxalaydi, bolalar nusxalanmaydi.

// const original = document.querySelector('div');
// const clone = original.cloneNode(true);
// document.body.appendChild(clone);

// Document Fragment
// Document Fragment haqida:

// DOMga elementlarni bir martada qo'shish uchun vaqtinchalik konteyner. Bu usul samaradorlikni oshiradi.

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 5; i++) {
//    const li = document.createElement('li');
//    li.textContent = `Item ${i}`;
//    fragment.appendChild(li);
// }

// document.querySelector('ul').appendChild(fragment);

// BOM (Browser Object Model) Dataset
// Dataset nima?

// data-* atributlari orqali HTML elementlariga maxsus ma'lumot qo‘shish va ulardan foydalanish imkonini beradi.
// Foydalanish:

// element.dataset.key – Atribut qiymatini olish.
// element.dataset.key = 'value' – Yangi qiymat o'rnatish.

{
  /* <div id="box" data-id="123" data-name="example"></div>
<script>
   const box = document.getElementById('box');
   console.log(box.dataset.id); // "123"
   console.log(box.dataset.name); // "example"
</script> */
}

// InnerHTML
// InnerHTML nima?

// Element ichidagi HTML kodni olish yoki o'rnatish uchun ishlatiladi.
// Foydalanish:

// element.innerHTML – HTML tarkibini olish.
// element.innerHTML = '<p>Hello</p>' – HTML qo'shish.

// const div = document.querySelector('div');
// div.innerHTML = '<strong>Salom!</strong>'; // Div ichiga yangi HTML qo'shildi

// OuterHTML
// OuterHTML nima?

// Elementning o‘zini va ichidagi HTMLni olish yoki o'rnatish uchun ishlatiladi.
// Foydalanish:

// element.outerHTML – Element va uning ichidagi kodni qaytaradi.
// element.outerHTML = '<p>New Element</p>' – Elementni almashtiradi.

// const div = document.querySelector('div');
// div.outerHTML = '<span>Yangi element</span>'; // Div o'rniga span qo'shildi

// DOM: HTML sahifasini manipulyatsiya qilish uchun ishlatiladi.
// DOM Children: Elementning ichidagi boshqa elementlarga murojaat.
// Style: Elementning ko‘rinishini o'zgartirish.
// ClassList: CSS klasslarini boshqarish.
// cloneNode: Elementlarni nusxalash.
// Document Fragment: DOM bilan samarali ishlash.
// BOM Dataset: data-* atributlar orqali ma'lumot uzatish.
// InnerHTML va OuterHTML: HTML tarkibini olish va o'zgartirish uchun ishlatiladi.

// JavaScript Modullari (Modules)
// Modul nima?

// Modul – bu JavaScript kodini bir-biridan mustaqil bo‘laklarga ajratish usuli.
// Har bir modulda o‘z funksiyalarini, o‘zgaruvchilarini va ma'lumotlarini boshqalardan yashirgan holda ishlatish mumkin.
// Afzalliklari:

// Kodni tushunishni va boshqarishni osonlashtiradi.
// Kodni qayta ishlatishga (reuse) imkon beradi.
// Global o'zgaruvchilar sonini kamaytiradi.
// Modullarni qanday ishlatamiz?

// Export: Moduldan ma'lumotlarni eksport qilish
// math.js
// export const sum = (a, b) => a + b;
// export const multiply = (a, b) => a * b;

// Import: Boshqa faylda bu ma'lumotlarni ishlatish.

// // main.js
// import { sum, multiply } from './math.js';

// console.log(sum(2, 3)); // 5

// ES6 modullarni ishlatish uchun:

// HTML faylda type="module" ishlatiladi.

// <script type="module" src="main.js"></script>

// Hodisalar (Events)
// Hodisa nima?

// Hodisa bu brauzer yoki foydalanuvchi tomonidan yuzaga keladigan harakat. Masalan:
// Sichqoncha bosilishi (click).
// Klaviatura tugmasi bosilishi (keydown).
// Forma yuborilishi (submit).
// Hodisani tinglash: Hodisalarni kuzatish uchun addEventListener funksiyasidan foydalanamiz.

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//    alert('Tugma bosildi!');
// });

// Hodisa delegatsiyasi (Event Delegation)
// Hodisa delegatsiyasi nima?

// Hodisani ota element orqali boshqarish texnikasi.
// Dinamik ravishda qo'shiladigan elementlarga hodisalar qo'shilishini osonlashtiradi.
// Qanday ishlaydi?

// Hodisalar yuqoriga qarab ko‘tariladi (event bubbling).
// Biz ota elementda hodisani ushlaymiz va maqsadli elementni aniqlaymiz.
// Misol:

// const parent = document.querySelector('.parent');

// parent.addEventListener('click', (event) => {
//    if (event.target.matches('.child')) {
//       alert('Child element bosildi!');
//    }
// });

// Yuqoridagi kodda .parent ichidagi barcha .child elementlarga bir nechta addEventListener yozmasdan, bitta funksiyaga asoslangan boshqaruv amalga oshiriladi.

// Document Fragment
// Document Fragment nima?

// DocumentFragment – DOM dagi vaqtinchalik konteyner. U ma'lumotni xotirada yaratadi va brauzerga bitta operatsiyada qo'shadi.
// Bu DOM manipulyatsiyalarini tezlashtiradi.
// Afzalliklari:

// DOMga bir necha marta murojaat qilish o'rniga, fragmentda o'zgarish kiritib, bir marta qo'shish mumkin.
// Samaradorlikni oshiradi.

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 5; i++) {
//    const li = document.createElement('li');
//    li.textContent = `Element ${i}`;
//    fragment.appendChild(li);
// }

// document.querySelector('ul').appendChild(fragment);

// Bu usul bilan DOMga har bir elementni alohida qo'shmasdan, oxirida bitta operatsiyada qo‘shiladi.

// Modullar kodni modullarga ajratib ishlash imkonini beradi.
// Hodisalar brauzer va foydalanuvchi harakatlarini kuzatishga yordam beradi.
// Hodisa delegatsiyasi dinamik elementlarni boshqarishni osonlashtiradi.
// Document Fragment DOM bilan ishlashda samaradorlikni oshiradi.
