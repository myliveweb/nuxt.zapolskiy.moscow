<template>
  <div>
    <TplHeader/>
    <TplSections :sections='sections' :section='$route.params.sections' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getData from '../../../util/getData'


export default Vue.extend({
  async asyncData() {
    const post: {} = { action: 'sections_list' }
    const sections = await getData(post)
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
