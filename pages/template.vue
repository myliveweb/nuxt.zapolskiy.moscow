<template>
  <div>
    <TplHeader/>
    <TplIndex :sections='sections' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  async asyncData({ $axios }) {
    const sections = await $axios.$get('https://api.zapolskiy.moscow/v2/?action=sections_list')
    return {sections}
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
