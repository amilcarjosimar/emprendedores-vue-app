<template>
  <div class="items-container">
    <div class="item" v-for="item in items" :key="item">
      <img alt="item image" src="@/assets/imgs/test.png" class="item-photo" />
      <h4 class="item-title">{{ item.name }}</h4>
      <small class="item-price">${{ parseFloat(item.price).toFixed(2) }}</small>
      <button class="item-button">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items : [] 
        }
    },beforeMount(){
        this.$store.dispatch('getItems').then(data => this.items = data)
        console.log(this.$store.dispatch('getItems'))
    }
}
</script>

<style>
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px, 350px )) ;
  justify-content: center;
  justify-items: stretch;
  align-items: stretch;
  column-gap: 10px;
  row-gap: 12px;
  padding: 0.5rem;
  text-align: center;
  box-sizing: border-box;
}
.item {
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
.item-photo {
  width: 100%;
  height: 20rem;
}
.item-title {
  font-size: 2rem;
  margin-top: 0.5rem;
  color: var(--orange);
  text-shadow: 1px 1px var(--amber);
  padding: 1rem;
}
.item-button {
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
.item-price {
  color: var(--gray);
  margin-bottom: 2rem;
  font-size: 1.3rem;
  text-align: start;
  padding-left: 1rem;
}
@media (min-width: 768px) {
  .item-title {
    font-size: 2.5rem;
  }
  .item-button {
    font-size: 1.8rem;
  }
  .item-price {
    font-size: 1.4rem;
  }
}
@media (min-width: 992px) {

  .item-photo {
    height: 30rem;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .item-title {
    font-size: 3rem;
  }
  .item-button {
    font-size: 2rem;
  }
  .item-price {
    font-size: 1.6rem;
  }
}
</style>