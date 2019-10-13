<template lang="html">
  <div class="container">
    <br><br><br><br>
    <table class="table">
      <tr>
        <td width="400">
          <span v-for="(i, index) in dbpedia_link" :key="index">
            <span v-if="i.image">
                <img :src="i.image.value" alt="Movie" class="w-100 h-50" />
            </span>
            <span v-else>
                <img src="../../public/gambarfilm/bind.jpg" alt="Movie" class="w-100" />
            </span>
          </span>
        </td>
        <td>
          <span v-for="(i, index) in detail_seniman" :key="index">
            <span v-if="i.label">
                  <h4>{{i.label.value}}</h4>
            </span>
          </span>
          <span v-if="Object.keys(dbpedia_link).length">
            <span v-for="(j, index) in dbpedia_link" :key="index">
              <span v-if="j.comment">
                    <p class="text-justify" v-html="j.comment.value"></p>
              </span>
              <span v-if="j.birthplace">
                    <strong>Birth Place :</strong><p class="text-justify" v-html="j.birthplace.value"></p>
              </span>
              <span v-if="j.link">
                    <p class="text-justify"><strong>Source: </strong> <a :href="j.link.value">{{j.link.value}}</a> </p>
              </span>
            </span>
          </span>
        </td>
      </tr>
    </table>

    <table class="table" v-if="Object.keys(detail_seniman).length">
      <tr>
        <td>
          <ol>
            <strong>sebagai Pemeran di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.pemeran">
                    <a :href="'/detailsFilm/' + i.pemeran.value">{{i.pemeran.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Penata Artistik di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.penataArtistik">
                    <a :href="'/detailsFilm/' + i.penataArtistik.value">{{i.penataArtistik.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Penata Gambar di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.penataGambar">
                    <a :href="'/detailsFilm/' + i.penataGambar.value">{{i.penataGambar.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Penata Kamera di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.penataKamera">
                    <a :href="'/detailsFilm/' + i.penataKamera.value">{{i.penataKamera.value}}</a>
              </li>
            </span>
          </ol>
        </td>
      </tr>
      <tr>
        <td>
          <ol>
            <strong>sebagai Penata Musik di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.penataMusik">
                    <a :href="'/detailsFilm/' + i.penataMusik.value">{{i.penataMusik.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Penulis Skenario di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.penulisSkenario">
                    <a :href="'/detailsFilm/' + i.penulisSkenario.value">{{i.penulisSkenario.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Produser di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.produser">
                    <a :href="'/detailsFilm/' + i.produser.value">{{i.produser.value}}</a>
              </li>
            </span>
          </ol>
        </td>
        <td>
          <ol>
            <strong>sebagai Sutradara di film:</strong>
            <span v-for="(i, index) in detail_seniman" :key="index">
              <li v-if="i.sutradara">
                    <a :href="'/detailsFilm/' + i.sutradara.value">{{i.sutradara.value}}</a>
              </li>
            </span>
          </ol>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  mounted() {

  },
  computed: {
    ...mapState([
      'detail_seniman',
      'dbpedia_link',
    ])
  },
  methods: {
    ...mapActions([

    ]),
  },
}
</script>

<style lang="css" scoped>
table{
  table-layout: fixed;
}

td{
  word-wrap:break-word;
}
</style>
