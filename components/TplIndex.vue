<template>
  <section id="template" class="pfblock" style="padding: 100px 0 0;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="pfblock-header wow fadeInUp">
            <h2 v-if="item" class="pfblock-title">Шаблоны Item</h2>
            <h1 v-if="!item" class="pfblock-title">Шаблоны</h1>
            <div class="pfblock-line"></div>
            <div class="pfblock-subtitle" style="width: 90%; margin-left: 5%;">
              Закажите сайт на любой CMS с любым из этих шаблонов и сэкономьте деньги, на услугах дизайнера. Также можете скачать шаблоны бесплатно из этой подборки. Я занимаюсь поиском новых и интересных адаптивных шаблонов для сайта, чтобы всегда предоставлять вам и вашему бизнесу возможность идти в ногу со временем.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <h3 class="title-section">Категории</h3>
          </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <ul class="nav-section">
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      item: false
    }
  },
})
</script>
