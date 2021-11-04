<template>
  <div>
    <Video/>
    <FirstScreen/>
    <Header/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <CallToAction/>
    <Contact/>
    <Footer/>
    <ScrollUp/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Video from '~/components/Video.vue'
import FirstScreen from '~/components/FirstScreen.vue'
import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'
import Skills from '~/components/Skills.vue'
import CallToAction from '~/components/CallToAction.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
import ScrollUp from '~/components/ScrollUp.vue'


export default Vue.extend({
  components: {
    Video,
    FirstScreen,
    Header,
    Services,
    Portfolio,
    Skills,
    CallToAction,
    Contact,
    Footer,
    ScrollUp
   },
  })
</script>
