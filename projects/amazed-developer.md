---
title: Strona AmazedDeveloper.pl
description: Portfolio i Blog napisane Vue.js i Nuxt.js z dynamicznym kontentem wykorzystującym pliki Markdown. Prosty projekt, który przerodził się w osobista stronę.
ctime: 2019-06-26
url: https://brave-shaw-f5e5a1.netlify.com
git: https://github.com/sebastianluszczek/amazed_develope
img: /projects_img/amazed-developer.png
tech: vuejs,nuxt,markdown,SASS
---

# Trochę więcej niż portfolio

Gdy znalazłem tutorial na youtube'ie pokazujący podstawy Nuxt.js pomyślałem o tym jako o ciekawej alternatywie dla SPA, ale nie do końca widziałem zastosowanie dla tego rozwiazania. Dopiero gdy znalazłem artykuł opisujący połączenie nuxt'a jako generatora stron statycznych pomyślałem, ze można by spróbować się tym zająć. Tak narodził się pomysł napisania mockowego boilerplate dla bloga z 'dynamicznie' serwowanym kontentem (postami) z plików typu markdown. A z takich niewinnych prób apka bardzo szybko zyskała zakładkę portfolio i teraz jest moją osobistą stroną.


---
## Aplikacja korzysta z:
<div style="display: flex">
<img src="/icons/vuejs.png" "Vue.js" style="height: 64px; padding: 0 10px">
<img src="/icons/nuxt.png" "Nuxt.js" style="height: 64px; padding: 0 10px">
<img src="/icons/markdown.png" "Markdown" style="height: 64px; padding: 0 10px">
<img src="/icons/SASS.png" "Sass" style="height: 64px; padding: 0 10px">
</div>

---

W aplikacji postanowiłem użyć Nuxt'a jako generatora stron statycznych. Spodobał mi się pomysł umieszczenia całej apki na prostym hostingu, bez martwienia się o backend i api dla blogu. Wszystko siedzi w plikach .md, a metoda 'nuxt generate' renderuje dynamiczne podstrony. Oprócz podstron dla bloga w ten sam sposób, z plików .md, generowane są podstrony dla poszczególny projektów w portfolio.

Na Nuxt padło również dlatego, ze mam trochę doświadczenia komercyjnego w pisaniu Single Page Aplications w Vue


