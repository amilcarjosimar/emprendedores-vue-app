<template>
  <div class="nav-header" id="nav-header-container">
    <i class="fas fa-user nav-header-icon"></i>
    <p class="nav-header-text">Te lo traigo</p>
    <div id="fa-toggle-container" @click="toggle_menu">
      <i class="fas fa-bars nav-tabs" id="nav-header-toggle"></i>
    </div>
  </div>
  <nav class="nav" id="dropdown">
    <div class="nav-item">
      <i class="fas fa-home nav-item-icon"></i>
      <p class="nav-item-text">Inicio</p>
    </div>
    <div class="nav-item">
      <i class="fas fa-search-dollar nav-item-icon"></i>
      <p class="nav-item-text">Ofertas</p>
    </div>
    <div class="nav-item">
      <i class="fas fa-comments-dollar nav-item-icon"></i>
      <p class="nav-item-text">Comprar</p>
    </div>
    <div class="nav-item">
      <i class="fas fa-comment-dollar nav-item-icon"></i>
      <p class="nav-item-text">Vender</p>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  methods: {
    toggle_menu() {
      let target = document.querySelector("#nav-header-toggle");
      let dropdown = document.querySelector("#dropdown");
      let container = document.querySelector("#fa-toggle-container");
      let nav_header = document.querySelector("#nav-header-container");
      nav_header.classList.toggle("nav-header-dormant");
      target.classList.toggle("fa-bars");
      target.classList.toggle("fa-times");
      container.classList.toggle("active-times");
      dropdown.classList.toggle("active");
    },
  },
};
</script>
<style scoped>
.nav-header-text {
  width: 100%;
  font-family: "Permanent Marker", cursive;
  font-size: 1.5rem;
}
.nav-header {
  position: relative;
  display: flex;
  background-color: var(--black);
  justify-content: space-around;
  padding: 1rem 0;
  font-size: 2rem;
  box-sizing: border-box;
  text-align: center;
  color: var(--amber);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  text-shadow: 2px 1px var(--orange);
}
.nav-header > [class*="fa-"] {
  margin: auto;
}
.nav-header {
  width: 100%;
  max-height: 100%;
}
.nav-header-dormant {
  height: 0;
}
.nav-header-dormant > .nav-header-icon,
.nav-header-dormant > .nav-header-text {
  display: none;
}
.active-times {
  position: absolute;
  z-index: 999999;
  font-size: 3rem;
  left: 80%;
}
.active {
  height: 100vh !important;
}
.nav {
  background-color: var(--black);
  position: absolute;
  color: var(--amber);
  height: 0;
  width: 100%;
  top: 0;
  z-index: 99999;
  font-size: 3rem;
  font-family: "Farro", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: height 0.4s ease-in-out;
  overflow: hidden;
  text-shadow: 2px 1px var(--orange);
}
[class*="fa-"] {
  display: inline-block;
  width: 100%;
}
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
}
.nav-item-icon {
  margin-right: 2rem;
}
@media (min-width: 768px) {
  .nav-header{
    font-size: 2.5rem;
  }
  .nav-header-text {
     font-size: 2rem;
  }
  .nav-header-icon {
    width: 50%;
  }
}
@media (min-width: 992px) {
  .nav-header {
    display: none;
  }

  .nav {
    flex-direction: row;
    min-height: 80px;
    font-size: 2rem;
    justify-content: none;
    box-sizing: border-box;
  }
  .nav-item{
    width: 100%;
    box-sizing: content-box;
  }
  .nav-item:hover {
     background-color: var(--amber);
      color: var(--orange);
       text-shadow: 2px 1px var(--black);
  }
}
</style>
