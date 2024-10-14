<template>
  <div>
    <h1>child-vue3-page2</h1>
    <div class="child-vue3-test-btn">test</div>
    <img src="../assets/micro-app-logo.png" alt="micro-app-logo" />
     <!-- 创建大量dom -->
     <div v-for="i in 5000" :key="i" class="vue3">
      <p @click="()=>{}">子应用 -- Vue@3.x</p>

    </div>
  </div>
</template>

<style>
.child-vue3-test-btn {
  height: 40px;
  width: 100px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
  margin: 0 auto;
  user-select: none;
}
</style>
