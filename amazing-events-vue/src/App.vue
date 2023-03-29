<script setup>
import NavBar from './components/nav-bar/NavBar.vue'
import Footer from './components/footer/Footer.vue'
import Home from './components/home/Home.vue'
import Upcoming from './components/upcoming-events/UpcomingEvents.vue'
import Past from './components/past-events/PastEvents.vue'
import Contact from './components/contact/Contact.vue'
import Stats from './components/stats/Stats.vue'
import DetailsCard from './components/details/Details.vue'
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <DetailsCard/>
  </main>

  <footer>
    <Footer/>
  </footer>
</template>








<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
