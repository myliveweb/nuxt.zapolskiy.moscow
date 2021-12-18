<template>
  <div>
    <TplHeader/>
    <TplSections :sections='sections' :section='section' :items='items' />
    <TplSectionItem :section='section' :templates='items' />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import getData from '../../../util/getData'


export default Vue.extend({
  async asyncData($route) {
    const post: {} = { action: 'sections_list' }
    const sections: [{}] = await getData(post)

    const postTemplatesSection: {} = { action: 'templates_section', url: $route.params.sections, limit: 20, load: [] }
    const templates: {items: [{}], section: {}} = await getData(postTemplatesSection)
    const items: [{}] = templates.items
    const section: {} = templates.section

    return {sections, section, items}
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
