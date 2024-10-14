<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="子应用 -- Vue@3.x"/>
    <div v-for="i in 5000" :key="i" class="vue3-home">
      <p @click="()=>{}">子应用 -- Vue@3.x</p>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
