<template lang="html">
  <div class="container">
    <br><br>

    <div class="text-center">
      <span v-for="(i, index) in show_jenis_seniman" :key="index">
        <button @click="showDataSeniman(i.subject.value)" type="button" class="btn btn-link font-weight-bold">| {{i.label.value}} |</button>
      </span>
    </div>

    <hr>

    <table class="table">
      <thead>
        <th>Nama</th>
        <th>Peran</th>
      </thead>
      <tbody>
        <tr v-for="(i, index) in show_data_seniman" :key="index">
            <td>
              <span v-if="i.peran.value != 'Pengarang Lagu'">
                <router-link to="/detailsSeniman">
                  <span v-if="i.linkdata">
                    <a @click="detailSeniman(i.subject.value); dbpediaLink(i.linkdata.value)">{{i.label.value}}</a>
                  </span>
                  <span v-else>
                    <a @click="detailSeniman(i.subject.value)">{{i.label.value}}</a>
                  </span>
                </router-link>
              </span>
              <span v-else>
                <router-link to="/detailsPengarangLagu">
                  <span v-if="i.linkdata">
                    <a @click="detailsPengarangLagu(i.subject.value); dbpediaLink(i.linkdata.value)">{{i.label.value}}</a>
                  </span>
                  <span v-else>
                    <a @click="detailsPengarangLagu(i.subject.value)">{{i.label.value}}</a>
                  </span>
                </router-link>
              </span>
            </td>
            <td>{{i.peran.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  mounted() {
    this.$store.dispatch('showJenisSeniman')
    this.$store.dispatch('detailsPengarangLagu')
    this.$store.dispatch('dbpediaLink')
  },
  computed: {
    ...mapState([
      'show_jenis_seniman',
      'show_data_seniman',
    ])
  },
  methods: {
    ...mapActions([
      'showJenisSeniman',
      'showDataSeniman',
      'detailSeniman',
      'dbpediaLink',
      'detailsPengarangLagu',
    ]),
  },
  data() {
    return {
      showData: false,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
