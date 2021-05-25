<template>
  <div class="deals-container">
    <div class="deal" v-for="deal in deals" :key="deal">
      <img :src="deal.photoURL" class="deal-photo" />
      <h4 class="deal-title">{{ deal.name }}</h4>
      <small class="deal-price">$400.00</small>
      <button class="deal-button">Agregar</button>
    </div>
  </div>
</template>
<style>
.deals-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  row-gap: 12px;
  padding: 0.5rem;
  text-align: center;

  box-sizing: border-box;
}
.deal {
  padding-bottom: 1rem;
  background-color: var(--white);
  color: var(--amber);
  font-size: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    display: flex;
    flex-direction: column;
}
.deal-photo {
  width: 100%;
  height: 20rem;
}
.deal-title {
  font-size: 2rem;
  margin-top: .5rem;
  color: var(--orange);
    text-shadow: 1px 1px var(--amber);
    padding: 1rem;
}
.deal-button {
  padding: 0.6rem;
  font-size: 1.6rem;
  background-color: var(--green);
  border: none;
  color: var(--white);
  text-shadow: 1px 1px var(--black);
  cursor: pointer;
  border-radius: 0.5rem;
  width: 10rem;
  margin: auto;
}
.deal-price{
    color: var(--gray);
    margin-bottom:  2rem;
    font-size: 1.3rem;
    text-align: start;
    padding-left: 1rem;
}
</style>
<script>
export default {
  data() {
    return {
      deals: [
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
        {
          photoURL: require("../assets/imgs/deals/wheel.jpg"),
          name: "Llantas Nuevas",
          paragraph: "Encuentre llantas nuevas para su auto",
        },
      ],
    };
  },
};
</script>

