<template>
  <div>
    <navbar />
    <Category />
    <div class="container">
      <nuxt />
    </div>
    <Footer />
    <div class="spa">
      <span><mdicon name="plus-thick" />&nbsp;SELL</span>
    </div>
  </div>
</template>
<script>
import Category from "../components/Category.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
    Category,
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
body {
  padding: 0 !important;
  margin: 0 !important;
  scroll-behavior: smooth;
}
</style>
<style scoped>
.spa {
  display: none;
}
@media screen and (max-width: 750px) {
  .spa {
    position: sticky;
    bottom: 2rem;
    left: 40%;
    width: 6rem;
    height: 2.5rem;
    padding-right: 5px;

    background-color: #fff;
    border-radius: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
  }

  .spa::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      90deg,
      red 0%,
      orange 25%,
      yellow 50%,
      green 75%,
      blue 100%
    );
    border-radius: 50px;
    z-index: -1;
  }

  .spa::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 50px;
    padding: 2px;
    z-index: -1;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
