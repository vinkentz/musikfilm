<template lang="html">
  <div class="container">
    <br><br>
    <span v-for="(i, index) in show_provinsi" :key="index">
      <button @click="showLaguProvinsi(i.subject.value)" type="button" class="btn btn-link font-weight-bold">| {{i.label.value}} |</button>
    </span>

    <hr>

    <table v-if="showData" class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Judul</th>
          <th scope="col">Provinsi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in show_lagu" :key="index">
          <td><a :href="'/detailsLagu/' + i.label.value">{{i.label.value}}</a></td>
          <td>{{i.labelprovinsi.value}}</td>
        </tr>
      </tbody>
      <br><br><br><br>
    </table>
    <table class="table" v-else>
      <br><br><br><br>
      <h1 class="text-center">PILIH SALAH SATU PROVINSI UNTUK MENAMPILKAN LAGU DAERAH </h1>
    </table>

    <br><br><br><br><br><br>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  mounted() {
    this.$store.dispatch('showProvinsi')
  },
  computed: {
    ...mapState([
      'show_provinsi',
      'show_lagu',
    ])
  },
  methods: {
    ...mapActions([
      'showLagu',
    ]),
    showLaguProvinsi(id){
      this.showLagu(id)
      this.showData = true
    }
  },
  data() {
    return {
      showData: false,
    }
  }
}
</script>

<style lang="css" scoped>

</style>
