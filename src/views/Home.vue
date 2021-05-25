<template>
  <main class="home-content">
    <h3 class="home-title">Piezas para vehiculos, simplificado</h3>
    <img class="home-illustration" src="../assets/imgs/supply.png" />
    <p class="home-paragraph">
      Todo lo que necesites para tu vehiculo, a un click de distancia
    </p>
    <p class="home-paragraph in-progress">
      Esto es una prueba de concepto, actualmente solo utilizacion de sitio web
      con sesion publica
    </p>
  </main>
</template>

<script>
export default {};
</script>

<style>
.home-content {
  text-align: center;
  padding: 2rem;
}
.home-title {
  font-family: "Press Start 2P", cursive;
  font-size: 2rem;
  font-weight: 300;
  text-shadow: 2px 1px var(--orange);
}

.home-illustration {
  height: 30rem;
  width: 26em;
}
.home-paragraph {
  font-size: 2rem;
  font-weight: bolder;
  color: var(--orange);
  text-shadow: 1px 1px var(--black);
}
.in-progress {
  margin-top: 30%;
  color: var(--amber);
  text-shadow: 1px 1px var(--orange);
}
@media (min-width: 768px) {
  .home-illustration {
    height: 70rem;
    width: 70rem;
  }

  .home-title {
    font-size: 3rem;
  }
  .home-paragraph,
  .in-progress {
    font-size: 2.5rem;
  }
}
@media (min-width: 992px) {
  .home-illustration {
    height: 70rem;
    width: 90rem;
  }

  .home-title {
    font-size: 3.5rem;
  }
  .home-paragraph,
  .in-progress {
    font-size: 3.5rem;
  }
}
</style>