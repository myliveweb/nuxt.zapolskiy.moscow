<template>
  <section class="pfblock" style="padding: 0 0 100px 0;">
    <div class="container">
      <div class="row">
        <ul class="products-grid">
          <li v-for="item of templates" :key="item.id" class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div class="item wow zoomIn">
              <div class="col-item">
                <div class="item-inner">
                  <div class="product-wrapper">
                    <div class="thumb-wrapper">
                        <a href="#" @click.prevent="openItem(item)" class="thumb flip">
                            <span class="face"><img :src="`/assets/images/${item.img_local}`" :alt="item.name"></span>
                        </a>
                    </div>
                  </div>
                  <div class="item-info">
                    <div class="info-inner">
                      <div class="item-title"> <a href="#" @click.prevent="openItem(item)">{{ item.name }}</a></div>
                    </div>
                    <div class="actions">
                      <a href="#" @click.prevent="openItem(item)" class="button btn-cart download"><span>Подробнее</span></a>
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
export default {
  props: ['templates'],
  methods: {
    openItem(item) {
      this.$router.push(`/template/${item.section_url}/${item.url}`)
    }
  }
}
</script>
