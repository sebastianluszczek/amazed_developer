---
title: EventSide
published: true
description: Aplikacja FullStack pozwalająca na rejestracje/logowanie (JWT), oraz tworzenie i bookowanie eventów (CRUD). Zamiast standardowego REST API wykorzystałem API GraphQL 
ctime: 2019-06-26
git: https://github.com/sebastianluszczek/graphql_events_app
url: 
img: /projects_img/eventside.png
tech: vuejs,apollo,graphql,mongo_db,nodejs
---

# Pierwsza próba połączenia aplikacji GraphQL z klientem front-endowym


Pomysł tego projektu podsunął kurs na youtube [Build a Complete App with GraphQL, Node.js, MongoDB and React.js](https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_), a jako, ze nie mam pojęcia za duzego o React.js pomyślałem, ze dobrym pomysłem będzie przerobić część o backendzie a front-endowego klienta napisać samemu w Vue.js. Wyszło zadowalajaco, rozbudowałem nawet nieznacznie aplikacje o avatary eventów i usówanie samych eventów (modyfikacje Schemy).

---
## Aplikacja korzysta z:
<div style="display: flex">
<img src="/icons/vuejs.png" "Vue.js" style="height: 64px; padding: 0 10px">
<img src="/icons/apollo.png" "Apollo" style="height: 64px; padding: 0 10px">
<img src="/icons/SASS.png" "Sass" style="height: 64px; padding: 0 10px">
<img src="/icons/graphql.png" "GraphQL" style="height: 64px; padding: 0 10px">
<img src="/icons/mongo_db.png" "MongoDB" style="height: 64px; padding: 0 10px">
<img src="/icons/nodejs.png" "Node.js" style="height: 64px; padding: 0 10px">
<img src="/icons/JWT.png" "JWT tokens" style="height: 64px; padding: 0 10px">
<img src="/icons/express.png" "express" style="height: 44px; padding: 10px 10px">
</div>

---

Aplikacja pozwala na rejestracje i logowanie użytkowników. Zalogowany klient otrzymuje token JWT i z nim wykonuje zapytania do platformy. Klient moze tworzyć, usówać i edytować eventy, oraz bookować swoje uczestnictwo w nich (z możliwością odwołania udziału).
Tylko zalogowany użytkownik ma dostęp do bookowania i widzi zabookowane przez siebie wydarzenia. Każdy natomiast moze zobaczyć liste wszystkich wydarzeń.

Od strony front-endu Vue.js wykorzystuje klienta Apollo do komunikowania się z platformą i odpytywania od dane. Znacznie ułatwia to komunikacje i zrozumienie kody, lecz połączenie Vuex'a i Apollo sprawiło mi sporo problemów.