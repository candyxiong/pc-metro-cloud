<template>
  <div id="app">
      <app-header></app-header>
      <app-footer></app-footer>
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->


    </div>
    <!--<router-view/>-->
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
      data(){
          return {
          }
      },
      components:{
          'app-header':Header,
          'app-footer':Footer,

      },
      created(){

      }
  }
</script>
<style lang="scss">

</style>
