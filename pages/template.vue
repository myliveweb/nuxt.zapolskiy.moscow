<template>
  <div>
    <TplHeader/>
    <TplIndex/>
    <Footer/>
    <ScrollUp/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TplHeader from '~/components/TplHeader.vue'
import TplIndex from '~/components/TplIndex.vue'
import Footer from '~/components/Footer.vue'
import ScrollUp from '~/components/ScrollUp.vue'

export default Vue.extend({
  components: {
    TplHeader,
    TplIndex,
    Footer,
    ScrollUp
  },
})
</script>

<style>
  .pfblock-header > h1.pfblock-title {
    font: 800 30px/1.2 Raleway700, sans-serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 30px 0 30px;
    color: #222;
  }
</style>
