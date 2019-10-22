<template lang="html">
  <div class="container">
    <br>
    <h5>Home>Film>DetailFilm</h5>
    <br>

    <table class="table">
      <tbody>
        <tr>
          <td width="400">
            <span v-for="(i, index) in detail_film" :key="index">
              <span v-if="i.labelimage">
                <img :src="'../../gambarfilm/' + i.labelimage.value " @error="imageUrlAlt" alt="Movie" class="w-100" />
              </span>
            </span>
          </td>
          <td>
            <h4>{{$route.params.id}}</h4><br>
            <span v-for="(i, index) in detail_film" :key="index">
              <span v-if="i.sinopsis">
                <label>Sinopsis :</label>
                <p class="text-justify" v-html="i.sinopsis.value"></p>
              </span>
              <span v-if="i.labelgenre">
                <p class="text-justify"><strong>Genre: </strong>{{i.labelgenre.value}}</p>
              </span>
              <span v-if="i.labeltahun">
                <p class="text-justify"><strong>Tahun: </strong>{{i.labeltahun.value}}</p>
              </span>
              <span v-if="i.source">
                <p class="text-justify"><strong>Source: </strong><br><a :href="i.source.value">{{i.source.value}}</a></p>
              </span>
            </span>
          </td>
        </tr>
  </tbody>
</table>

<table class="table">
  <tr>
    <td>
      <ol>
        <strong>Pemeran:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelpemeran">
            <router-link to="/detailsSeniman">
              <span v-if="i.pemeran">
                <span v-if="i.linkpemeran">
                  <a @click="detailSeniman(i.pemeran.value); dbpediaLink(i.linkpemeran.value)">{{i.labelpemeran.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.pemeran.value)">{{i.labelpemeran.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Penulis Skenario:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelskenario">
            <router-link to="/detailsSeniman">
              <span v-if="i.skenario">
                  <span v-if="i.linkskenario">
                    <a @click="detailSeniman(i.skenario.value); dbpediaLink(i.linkskenario.value)">{{i.labelskenario.value}}</a>
                  </span>
                  <span v-else>
                    <a @click="detailSeniman(i.skenario.value)">{{i.labelskenario.value}}</a>
                  </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Produser:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelproduser">
            <router-link to="/detailsSeniman">
              <span v-if="i.produser">
                <span v-if="i.linkproduer">
                  <a @click="detailSeniman(i.produser.value); dbpediaLink(i.linkproduer.value)">{{i.labelproduser.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.produser.value)">{{i.labelproduser.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Sutradara:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelsutradara">
            <router-link to="/detailsSeniman">
              <span v-if="i.sutradara">
                <span v-if="i.linksutradara">
                  <a @click="detailSeniman(i.sutradara.value); dbpediaLink(i.linksutradara.value)">{{i.labelsutradara.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.sutradara.value)">{{i.labelsutradara.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Penata Gambar:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelpenatagambar">
            <router-link to="/detailsSeniman">
              <span v-if="i.penatagambar">
                <span v-if="i.linkpenatagambar">
                  <a @click="detailSeniman(i.penatagambar.value); dbpediaLink(i.linkpenatagambar.value)">{{i.labelpenatagambar.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.penatagambar.value)">{{i.labelpenatagambar.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
  </tr>
  <tr>
    <td>
      <ol>
        <strong>Penata Artistik:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelpenataartistik">
            <router-link to="/detailsSeniman">
              <span v-if="i.penataartistik">
                <span v-if="i.linkpenataartistik">
                  <a @click="detailSeniman(i.penataartistik.value); dbpediaLink(i.linkpenataartistik)">{{i.labelpenataartistik.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.penataartistik.value)">{{i.labelpenataartistik.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Penata Musik:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelpenatamusik">
            <router-link to="/detailsSeniman">
              <span v-if="i.penatamusik">
                <span v-if="i.linkpenatamusik">
                  <a @click="detailSeniman(i.penatamusik.value); dbpediaLink(i.linkpenatamusik.value)">{{i.labelpenatamusik.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.penatamusik.value)">{{i.labelpenatamusik.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Penata Kamera:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelpenatakamera">
            <router-link to="/detailsSeniman">
              <span v-if="i.penatakamera">
                <span v-if="i.linkpenatakamera">
                  <a @click="detailSeniman(i.penatakamera.value); dbpediaLink(i.linkpenatakamera.value)">{{i.labelpenatakamera.value}}</a>
                </span>
                <span v-else>
                  <a @click="detailSeniman(i.penatakamera.value)">{{i.labelpenatakamera.value}}</a>
                </span>
              </span>
            </router-link>
          </li>
        </span>
      </ol>
    </td>
    <td>
      <ol>
        <strong>Perusahaan:</strong>
        <span v-for="(i, index) in detail_film" :key="index">
          <li v-if="i.labelperusahaanproduser">
            {{i.labelperusahaanproduser.value}}
          </li>
        </span>
      </ol>
    </td>
    <td></td>
  </tr>
</table>

<br><br>

</div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import img from '../../public/gambarfilm/bind.jpg'

export default {
  mounted() {
    this.$store.dispatch('detailFilm', this.$route.params.id)
    this.$store.dispatch('dbpediaLink')
  },
  computed: {
    ...mapState([
      'detail_film',
    ])
  },
  methods: {
    ...mapActions([
      'detailFilm',
      'detailSeniman',
      'detailSeniman',
      'dbpediaLink',
    ]),
    imageUrlAlt(e) {
      e.target.src = img
    }
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
