<template>
  <form class="sell-form" @submit.prevent="publishItem">
    <img class="sell-img" src="@/assets/imgs/test.png" />
    <div class="input-group">
      <label class="input-label">Nombre</label>
      <input type="text" class="input" v-model="item.name" required />
    </div>
    <div class="input-group">
      <label class="input-label">Precio</label>
      <input
        type="number"
        step="0.01"
        class="input"
        v-model="item.price"
        required
      />
    </div>
    <div class="input-group">
      <label class="input-label">Descripcion</label>
      <input type="text" class="input" v-model="item.paragraph" required />
    </div>
    <div style="text-align: center">
      <button class="publish">Publicar</button>
    </div>
  </form>
  <p id="succes-message">Registrado con exito!</p>
</template>

<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  methods: {
    publishItem() {
      this.$store.dispatch("pushItem", this.item);
      this.item = {};
      document.querySelector("#succes-message").classList.toggle("active")
    },
  },
};
</script>

<style scoped>
.sell-img {
  border-radius: 1rem;
  margin: -2rem;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.sell-form {
  padding: 1rem 0;

  color: var(--amber);
  text-shadow: 3px 3px var(--orange);
  margin: 0 1rem;
  border-radius: 1rem;
}
.input-group:last-child {
  margin: 0 1rem;
}
.input-group {
  margin: 8rem 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.input-label {
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
}
.publish {
  color: var(--white);
  background-color: var(--orange);
  border: none;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 1rem;
  cursor: pointer;
}
.input {
  padding: 0.5rem;
  font-size: 2rem;
  background-color: var(--black);
  color: var(--white);
  border-radius: 1rem;
}
#succes-message {
  width: 70%;
  background-color: hsla(90, 100%, 50%, 0.664);
  margin: auto;
  font-size: 2rem;
  text-align: center;
  color: black;
  text-shadow: 1px 3px white;
  font-weight: 900;
  padding: 1rem;
  margin-top: 1rem;
  display: none;
}
.active{
    display: initial;
}
@media (min-width: 992px) {
  .sell-img {
    width: 60rem;
    height: 20rem;
  }
  .sell-form {
    padding: 0rem 10rem;
  }
  .input {
    padding: 0.55rem;
    font-size: 3rem;
  }
  .input-label {
    font-size: 3rem;
  }
  .input-group {
    margin: 6rem 1rem;
  }
}
</style>