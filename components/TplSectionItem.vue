<template>
  <section class="pfblock" style="padding: 0 0 100px 0;">
    <div class="container">
      <div class="row">
        <ul class="products-grid">
          <li v-for="item of mutTemplates" :key="item.id" class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item wow zoomIn">
              <div class="col-item">
                <div class="item-inner">
                  <div class="product-wrapper">
                    <div class="thumb-wrapper">
                        <a href="#" @click.prevent="openItem(item, section)" class="thumb flip">
                            <span class="face"><img :src="`/assets/images/${item.img_local}`" :alt="item.name"></span>
                        </a>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="info-inner">
                      <div class="item-title"> <a href="#" @click.prevent="openItem(item, section)">{{ item.name }}</a></div>
                    </div>
                    <div class="actions">
                      <a href="#" @click.prevent="openItem(item, section)" class="button btn-cart download"><span>Подробнее</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import getData from '../util/getData'

export default {
  props: ['section', 'templates'],
  data () {
    return {
      busy: false,
      mutTemplates: this.templates,
      wow: new WOW({ mobile: false, live: true }),
    }
  },
  methods: {
    openItem(item, section) {
      this.$router.push(`/template/${section.url}/${item.url}`)
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 600 && !this.busy;

        if (bottomOfWindow) {
          this.busy = true
          const load = this.mutTemplates.map(function(item) {
            return item.id;
          });
          const postTemplatesSection = { action: 'templates_section', url: this.section.url, limit: 20, load }

          const getLazy = async (postTemplatesSection) => {
            const data = await getData(postTemplatesSection)
            this.mutTemplates = [...this.mutTemplates, ...data.items]
            this.busy = false
          }
          getLazy(postTemplatesSection)
        }
      };
    },
  },
  mounted() {
		this.wow.init();
    this.scroll();
  }
}
</script>
