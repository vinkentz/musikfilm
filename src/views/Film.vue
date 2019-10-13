<template lang="html">
  <div class="container">

    <br><br>

    <div class="text-center">
      <span v-for="(i, index) in show_genre" :key="index">
        <button @click="showContohFilmGenre(i.subject.value)" type="button" class="btn btn-link font-weight-bold">| {{i.label.value}} |</button>
      </span>
    </div>

    <hr>

    <div class="row">
      <div v-for="(i, index) in show_contoh_film" :key="index" class="col-lg-4 col-md-4 col-sm-6">
        <article class="card">
          <header class="title-header">
            <h3>{{i.label.value}}</h3>
          </header>
          <div class="card-block">
            <div class="img-card">
                <img :src="'../../gambarfilm/' + i.labelimage.value " @error="imageUrlAlt" alt="Movie" class="w-100" />
            </div>
            <hr>
            <p class="tagline card-text text-xs-center"><strong>Genre: </strong>{{i.labelgenre.value}}</p>
            <p class="tagline card-text text-xs-center"><strong>Tahun: </strong>{{i.labeltahun.value}}</p>
            <a :href="'/detailsFilm/' + i.label.value" class="btn btn-primary btn-block"><i class="fa fa-eye"></i> Details</a>
          </div>
        </article>
      </div>
    </div>

    <br><br>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import img from '../../public/gambarfilm/bind.jpg'

export default {
  mounted() {
    this.$store.dispatch('showGenre')
    this.$store.dispatch('showContohFilm')
  },
  computed: {
    ...mapState([
      'show_genre',
      'show_contoh_film',
    ])
  },
  methods: {
    ...mapActions([
      'showGenre',
      'showContohFilm',
      'showContohFilmGenre',
    ]),
    imageUrlAlt(e) {
      e.target.src = img
    }
  },
}
</script>

<style lang="css" scoped>
.card {
  margin: 20px;
}
</style>
