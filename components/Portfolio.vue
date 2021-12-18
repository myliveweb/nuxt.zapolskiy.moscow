<template>
  <section id="portfolio" class="pfblock">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <div class="pfblock-header wow fadeInUp">
            <h2 class="pfblock-title">Мои работы</h2>
            <div class="img-section"><img src="assets/images/tools/typescript.png" alt="Мои работы" title="Мои работы" /></div>
            <div class="pfblock-subtitle">
              Здесь показана только часть работ.<br>При нажатии перейдёте на рабочий сайт.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
          <div v-for="item of portfolioList" :key="item.name" class="col-xs-12 col-sm-4 col-md-4">
              <div class="grid wow zoomIn">
                  <a :href="item.url" target="blank">
                    <figure class="effect-bubba">
                        <img :src="`assets/images/work/${ item.name }.webp`" :alt="item.name" />
                        <figcaption>
                            <h2 v-html="item.title"></h2>
                            <p>{{ item.desc }}</p>
                        </figcaption>
                    </figure>
                  </a>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import portfolio from '../util/portfolio'

export default {
  data () {
    return {
      portfolioList: portfolio
    }
  }
}
</script>
