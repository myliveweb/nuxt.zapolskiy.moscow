<template>
  <section id="template" class="pfblock" style="padding: 100px 0 0;">
    <div id="mi-face" style="display: none;"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="pfblock-header wow fadeInUp">
            <h1 class="pfblock-title">Шаблоны для сайта - {{ section }} - {{ url }}</h1>
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
            <li v-for="section of sections" :key="section.id">
              <a href="#" @click.prevent="openSection(section)">{{ section.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    item: {},
    items: [],
    itemSection: ''
  }),
  props: ['sections', 'section', 'url'],
  methods: {
    openSection(section) {
      this.$router.push('/template/' + section.url)
    }
  }
}
</script>
