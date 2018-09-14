<template>
  <div id="app">
      <app-header></app-header>
      <slider></slider>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'

export default {
  name: 'app',
  components: {
      'app-header':Header,
      'app-footer':Footer,
      'slider':Slider
  }
}
</script>

<style>
@import "./assets/css/common.scss";
</style>
