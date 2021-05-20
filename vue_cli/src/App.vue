<template>
  <div v-for="(room, index) in rooms" :key="index">
    {{ index }}
    <h4>{{ room.name }}</h4>
    <p>{{ room.price }}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      rooms : [
        {name: 'A 원룸', price: '70 만원'},
        {name: 'B 원룸', price: '100 만원'}
      ]
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
