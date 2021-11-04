<template>
  <div>
    <Video/>
    <FirstScreen/>
    <Header/>
    <Services/>
    <Portfolio/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Video from '~/components/Video.vue'
import FirstScreen from '~/components/FirstScreen.vue'
import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'

export default Vue.extend({
  components: {
    Video,
    FirstScreen,
    Header,
    Services,
    Portfolio
   },
  })
</script>
