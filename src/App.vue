<template>
  <div>
    
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
  body, html {
    padding: 0;
    margin: 0;
  }
  .flex-flaot {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex {
    display: flex;
    align-items: center;
  }
</style>
