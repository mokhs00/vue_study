<template>
  <div>
    <div class="black-bg" @click="close" v-if="selectedRoomIndex != null">
      <div class="white-bg">
        <h4>상세 페이지</h4>
        <p>{{ rooms[selectedRoomIndex].name }}</p>
        <p>{{ rooms[selectedRoomIndex].price }}</p>
        <button class="close-btn" @click="close">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a :href="item.link" v-for="( item, index ) in menu" :key="index" >{{ item.name }}</a>
    </div>    

    <Rooms @open="open" :rooms="rooms"></Rooms>
    
  </div>
</template>

<script>
import { rooms } from './assets/rooms.js'
import Rooms from './components/Rooms.vue'


export default {
  name: 'App',
  components: {
    Rooms
  },
  data() {
    return {      
      selectedRoomIndex: null,
      menu: [
          {name: 'Home', link: '/Home'},
          {name: 'Products', link: '/Products'},
          {name: 'About', link: '/About'}
        ],
      rooms : rooms,
      
    }
  },
  methods: {
    addCount(index){
     this.rooms[index].count += 1;
    },
    open(index){
      this.selectedRoomIndex = index;      
    },
    close(e){      
      if(e.target.classList.contains('black-bg') || e.target.classList.contains('close-btn')){
        this.selectedRoomIndex = null;
      }
    }
  },
  
  
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
}

.room {
  margin-top: 20px;
}
</style>
