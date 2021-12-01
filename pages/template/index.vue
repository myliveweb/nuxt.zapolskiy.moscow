<template>
  <div>
    <TplHeader/>
    <TplIndex :sections='sections' />
    <TplHome :templates='templates' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getData from '../../util/getData'


export default Vue.extend({
  async asyncData() {
    const postSectionsList: {} = { action: 'sections_list' }
    const sections = await getData(postSectionsList)

    const postTemplatesRand: {} = { action: 'templates_rand', limit: 20 }
    const templates: {} = await getData(postTemplatesRand)

    return {sections, templates}
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
