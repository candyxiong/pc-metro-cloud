<template>
  <div id="app">
      <app-header></app-header>
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <!--<router-view/>-->
</template>

<script>
  import Header from '@/components/Header'

  export default {
      components:{
          'app-header':Header
      }
  }
</script>
<style lang="scss">

</style>
