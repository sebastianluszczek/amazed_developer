<template>
  <div class="about container">
    <h1 class="title">O mnie</h1>
    <p>Jako programista z niespełna rocznym doświadczeniem komercyjnym nie mogę wciąż za dużo o sobie powiedzieć w
      odniesieniu do tej branzy. Naukę zacząłem późno, bo w wieku 27 lat, mając dyplom magistra studiów technicznych i 2
      lata doświadczenia w branży geologicznej.
      Lecz to nie było to co chciałem robić, nie czerpałem z tego przyjemność. Pomysł programowania, a dokładniej
      front-endu narodził się właśnie z potrzeby zmian.</p>
    <p>Przez ostatni rok starałem się przerobić jak najwięcej kursów, tutoriali w internecie, zadań projektowych.
      Postanowiłem nie przywiązywać się jakoś bardzo szczególnie do konkretnych technologi lecz już widzę, że
      zdecydowany prym wiedzie u mnei Vue.js, którego używam na codzień w pracy. Większość moich projektów treningowych
      jak dotąd została wykonana w oparciu o tutoriale, na youtube czy udemy, więc nie dziw się jeśli widziałeś coś
      podobnego. Za każdym razem jednak staram sie rozszeżyć projekt, dodać kolejne elementy, albo dostosować go do
      technologi, które znam.</p>
    <div class="stack">
      <p>Technologie front-endowe:</p>
      <div class="icons">
        <img src="/icons/HTML5.png" alt="" class="icon">
        <img src="/icons/CSS.png" alt="" class="icon">
        <img src="/icons/JavaScript.png" alt="" class="icon">
        <img src="/icons/SASS.png" alt="" class="icon">
        <img src="/icons/vuejs.png" alt="" class="icon">
        <img src="/icons/vuetify.png" alt="" class="icon">
        <img src="/icons/nuxt.png" alt="" class="icon">
        <img src="/icons/apollo.png" alt="" class="icon">
        <img src="/icons/webpack.png" alt="" class="icon">
      </div>
    </div>
    <div class="stack">
      <p>Technologie back-endowe:</p>
      <div class="icons">
        <img src="/icons/nodejs.png" alt="" class="icon">
        <img src="/icons/express.png" alt="" class="icon express">
        <img src="/icons/graphql.png" alt="" class="icon">
        <img src="/icons/mongo_db.png" alt="" class="icon">
        <img src="/icons/JWT.png" alt="" class="icon">
        <img src="/icons/firebase.png" alt="" class="icon">
      </div>
    </div>
    <p>Nie czuję się ekspertem w tych technologiach, ale w każdej z nich wykonałem kilka prostszych lub trudniejszych
      projektów. Zwłaszcza back-end jest dla mnie bardzo nową rzeczą, ale chciałbym poświęcić na niego w przyszłości
      znacznei więcej czasu.</p>
    <h1 class="title">Kontakt</h1>
    <p>Jeśli masz jakieś pytania, oferty współpracy lub uwagi do projektów, odezwij się do mnie!</p>
    <div class="contact">
      <div class="contact_element">
        <fa :icon="['fas', 'envelope']"/>
        <h5>luszczeksebastian@gmail.com</h5>
      </div>
      <div class="contact_element">
        <fa :icon="['fas', 'mobile-alt']"/>
        <h5>+48 665-148-668</h5>
      </div>
      <div class="contact_element">
        <fa :icon="['fab', 'facebook-messenger']"/>
        <h5>m.me/luszczeksebastian</h5>
      </div>
    </div>
  </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
  .about {
    .title {
      margin-top: 4rem;
    }

    .stack {
      margin: 4rem 0;

      .icons {
        display: flex;

        .icon {
          padding: 0 10px;
          height: 54px;

          &.express {
            width: 120px;
            height: 40px;
            margin-top: 10px;
          }
        }
      }
    }

    .contact {
      margin: 2rem 2rem;

      .contact_element {
        display: grid;
        grid-template-columns: 50px auto;
        align-items: center;
        margin: 1rem 0;

        svg {
          color: #333;
          font-size: 30px;
          margin-right: 2rem;
          justify-self: center;
        }

        h5 {
          font-size: 20px;
          font-weight: normal;
        }
      }
    }

    @media screen and (max-width: 1280px) {
      .title {
        margin-top: 3rem;
      }

      .stack {
        margin: 2rem 0;

        .icons {
          .icon {
            height: 48px;
          }
        }
      }

      .contact {
        margin: 1rem 2rem;
      }
    }
  }
</style>
