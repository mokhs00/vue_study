<template>
    <div class="rooms">
        <div class="room" v-for="(room, index) in rooms" :key="index">      
            <img class="room-img" @click="open(index)" :src="room.imgPath">
            <h4>{{ room.name }}</h4>
            <p>{{ room.price }}</p>
            <button @click="addCount(index)">추천</button>
            <span> 추천 수 : {{ room.count }}</span>      
        </div>        
    </div>
</template>
<script>
export default {
    props: {
        rooms: {
            type: Array,
            required: true
        }
    },
    methods: {
        open(index){
            this.$emit('open', index)
        }
    },
}
</script>
<style >
    
</style>