<template lang="html">
  <div class="container">
    <table class="table">
      <tr>
        <td width="400"><img src="../../public/gambarfilm/bind.jpg" @error="imageUrlAlt" alt="Movie" class="w-100" /></td>
        <td>
          <span v-for="(i, index) in details_pengarang_musik" :key="index">
            <span v-if="i.label">
              <h1>{{i.label.value}}</h1>
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
      <br><br>
      <tr>
        <td>
          <ol>
            <strong>Karya Musik :</strong>
            <span v-for="(i, index) in details_pengarang_musik" :key="index">
              <span v-if="i.labelmusik">
                <li><a :href="'/detailsMusik/' + i.labelmusik.value">{{i.labelmusik.value}}</a></li>
              </span>
            </span>
          </ol>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import img from '../../public/gambarfilm/bind.jpg'

export default {
  mounted() {

  },
  computed: {
    ...mapState([
      'details_pengarang_musik',
      'dbpedia_link',
    ])
  },
  methods: {
    ...mapActions([

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
