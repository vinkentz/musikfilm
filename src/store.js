import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
Vue.use(Vuex, axios)

var link = "https://app.alunalun.info/fuseki/musikfilm/query"
var urldbpedia = "https://cors-anywhere.herokuapp.com/http://id.dbpedia.org/sparql"

export default new Vuex.Store({
  state: {
    dbpedia_musik:[],
    dbpedia_film:[],
    show_provinsi:[],
    show_musik:[],
    detail_musik:[],
    show_genre:[],
    show_contoh_film:[],
    show_contoh_genre:[],
    detail_film:[],
    detail_seniman:[],
    node_visualisasi:[],
    get_individuals:[],
    dbpedia_link:[],
    show_jenis_seniman:[],
    show_data_seniman:[],
    details_pengarang_musik:[],
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    DBPEDIA_LINK(state, hasil){
      state.dbpedia_link = hasil
    },
    DBPEDIA_MUSIK(state, hasil){
      state.dbpedia_musik = hasil
    },
    DBPEDIA_FILM(state, hasil){
      state.dbpedia_film = hasil
    },
    SHOW_PROVINSI(state, hasil){
      state.show_provinsi = hasil
    },
    SHOW_MUSIK(state, hasil){
      state.show_musik = hasil
    },
    DETAIL_MUSIK(state, hasil){
      state.detail_musik = hasil
    },
    SHOW_GENRE(state, hasil){
      state.show_genre = hasil
    },
    SHOW_CONTOH_FILM(state, hasil){
      state.show_contoh_film = hasil
    },
    SHOW_CONTOH_FILM_GENRE(state, hasil){
      state.show_contoh_film = hasil
    },
    DETAIL_FILM(state, hasil){
      state.detail_film = hasil
    },
    DETAIL_SENIMAN(state, hasil){
      state.detail_seniman = hasil
    },
    NODE_VISUALISASI(state, hasil){
      state.node_visualisasi = hasil
    },
    GET_INDIVIDUALS(state, hasil){
      state.get_individuals = hasil
    },
    SHOW_JENIS_SENIMAN(state, hasil){
      state.show_jenis_seniman = hasil
    },
    SHOW_DATA_SENIMAN(state, hasil){
      state.show_data_seniman = hasil
    },
    DETAILS_PENGARANG_MUSIK(state, hasil){
      state.details_pengarang_musik = hasil
    },
  },
  actions: {
    dbpediaLink({ commit }, id) {
      axios.get(urldbpedia, {
        params: {
          query: `
          PREFIX dbpedia-id: <http://id.dbpedia.org/resource>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX PROV-O: <http://www.w3.org/ns/prov#>
          PREFIX dbo: <http://id.dbpedia.org/property/>
          PREFIX foaf: <http://xmlns.com/foaf/0.1/>

          SELECT ?label ?comment ?link ?image ?birthplace WHERE{
            ?subject rdfs:label "${id}"@id.
            ?subject rdfs:comment ?comment.
            ?subject PROV-O:wasDerivedFrom ?link.
            OPTIONAL{?subject dbo:birthplace ?birthplace.}
            OPTIONAL {?subject foaf:depiction ?image.}
          }`
        }
      }).then((response) => {
        const result = response.data.results.bindings
        let hasil = result
        commit('DBPEDIA_LINK', hasil)
      })
    },

    dbpediaMusik({ commit }) {
      axios.get(urldbpedia, {
        params: {
          query: `
          PREFIX dbpedia-id: <http://id.dbpedia.org/resource>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX PROV-O: <http://www.w3.org/ns/prov#>

          SELECT ?label ?comment ?link WHERE{
            ?subject rdfs:label "Musik tradisional"@id.
            ?subject rdfs:label ?label.
            ?subject rdfs:comment ?comment.
            ?subject PROV-O:wasDerivedFrom ?link.
          }`
        }
      }).then((response) => {
        const result = response.data.results.bindings
        let hasil = result
        commit('DBPEDIA_MUSIK', hasil)
      })
    },

    dbpediaFilm({ commit }) {
      axios.get(urldbpedia, {
        params: {
          query: `
          PREFIX dbpedia-id: <http://id.dbpedia.org/resource>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX PROV-O: <http://www.w3.org/ns/prov#>

          SELECT ?label ?comment ?link WHERE{
            ?subject rdfs:label "Film"@id.
            ?subject rdfs:label ?label.
            ?subject rdfs:comment ?comment.
            ?subject PROV-O:wasDerivedFrom ?link.
          }`
        }
      }).then((response) => {
        const result = response.data.results.bindings
        let hasil = result
        commit('DBPEDIA_FILM', hasil)
      })
    },

    showProvinsi({ commit }) {
      axios.get(link, {
        params: {
          query: `
          PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

          SELECT ?subject ?label
          WHERE {
            ?subject a mf:Provinsi.
            ?subject rdfs:label ?label.
          } ORDER BY ASC(?subject)
          `
        }
      }).then((response) => {
        const result = response.data.results.bindings
        let hasil = result
        commit('SHOW_PROVINSI', hasil)
      })
    },

    showMusik({ commit }, id) {
      axios.get(link, {
        params: {
          query: `
          PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

          SELECT ?subject ?label ?labelprovinsi
          WHERE {
            ?subject mf:fromProvinsi ?object.
            ?subject rdfs:label ?label.
            ?object rdfs:label ?labelprovinsi.
            FILTER(<${id}> = ?object).
          } ORDER BY ASC(?subject)`
        }
      }).then((response) => {
        const result = response.data.results.bindings
        let hasil = result
        commit('SHOW_MUSIK', hasil)
      })
    },

    detailMusik({ commit }, id) {
      axios.get(link, {
        params: {
          query: `
          PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

          SELECT DISTINCT ?pengarang ?label ?labelprovinsi ?labelbirama ?labelnadadasar ?labellirik ?labelpengarang
          ?linkpengarang ?source
          WHERE {
            ?subject rdfs:label ?object.
            ?subject rdfs:label ?label.
            OPTIONAL {?subject mf:fromProvinsi ?provinsi.
              ?provinsi rdfs:label ?labelprovinsi.}
              OPTIONAL {?subject mf:hasPengarangMusik ?pengarang.
                ?pengarang rdfs:label ?labelpengarang.
                OPTIONAL{?pengarang dbo:linkdata ?linkpengarang.}
               }
                OPTIONAL {?subject mf:Birama ?labelbirama.}
                OPTIONAL {?subject mf:NadaDasar ?labelnadadasar.}
                OPTIONAL {?subject mf:Lirik ?labellirik.}
                OPTIONAL {?subject dbo:source ?source}
                FILTER("${id}" = ?object)
              }`
            }
          }).then((response) => {
            const result = response.data.results.bindings
            let hasil = result
            commit('DETAIL_MUSIK', hasil)
          })
        },

        showGenre({ commit }) {
          axios.get(link, {
            params: {
              query: `
              PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
              PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX dbo: <http://dbpedia.org/ontology/>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

              SELECT DISTINCT ?subject ?label
              WHERE {
                ?subject a mf:GenreFilm.
                ?subject rdfs:label ?label.
              }`
            }
          }).then((response) => {
            const result = response.data.results.bindings
            let hasil = result
            commit('SHOW_GENRE', hasil)
          })
        },

        showContohFilm({ commit }) {
          axios.get(link, {
            params: {
              query: `
              PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
              PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX dbo: <http://dbpedia.org/ontology/>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
              PREFIX schema: <http://schema.org/>

              SELECT DISTINCT ?subject ?label ?labelgenre ?labelimage ?labeltahun
              WHERE {
                ?subject a mf:Film.
                ?subject rdfs:label ?label.
                ?subject mf:hasGenreFilm ?genre.
                ?genre  rdfs:label ?labelgenre.
                ?subject schema:image ?labelimage.
                ?subject mf:Tahun ?labeltahun.
              } ORDER BY RAND() LIMIT 6`
            }
          }).then((response) => {
            const result = response.data.results.bindings
            let hasil = result
            commit('SHOW_CONTOH_FILM', hasil)
          })
        },

        showContohFilmGenre({ commit }, id) {
          axios.get(link, {
            params: {
              query: `
              PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
              PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX dbo: <http://dbpedia.org/ontology/>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
              PREFIX schema: <http://schema.org/>

              SELECT DISTINCT ?subject ?label ?labelgenre ?labeltahun ?labelimage
              WHERE {
                ?subject mf:hasGenreFilm ?object.
                ?object rdfs:label ?labelgenre.
                ?subject rdfs:label ?label.
                ?subject schema:image ?labelimage.
                ?subject mf:Tahun ?labeltahun.
                FILTER(<${id}> = ?object)
              } `
            }
          }).then((response) => {
            const result = response.data.results.bindings
            let hasil = result
            commit('SHOW_CONTOH_FILM_GENRE', hasil)
          })
        },

        detailFilm({ commit }, id) {
          axios.get(link, {
            params: {
              query: `
              PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
              PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
              PREFIX dbo: <http://dbpedia.org/ontology/>
              PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
              PREFIX schema: <http://schema.org/>

              SELECT DISTINCT ?labelimage ?sinopsis ?labelgenre ?labeltahun ?labelpemeran ?labelskenario
              ?labelproduser ?labelsutradara ?labelpenatagambar ?labelpenataartistik ?labelpenatamusik ?labelpenatakamera
              ?labelperusahaanproduser ?source ?pemeran ?skenario ?produser ?sutradara ?penatagambar ?penataartistik
              ?penatamusik ?penatakamera ?linkpemeran ?linkskenario ?linkproduer ?linksutradara ?linkpenatagambar
              ?linkpenataartistik ?linkpenatamusik ?linkpenatakamera
              WHERE {
                    ?subject rdfs:label "${id}".
                    { ?subject schema:image ?labelimage.}
                    UNION
                    {?subject mf:Sinopsis ?sinopsis.}
      	            UNION
                    {?subject mf:hasGenreFilm ?genre.
        			       ?genre rdfs:label ?labelgenre.}
                    UNION
                    {?subject mf:Tahun ?labeltahun.}
        	          UNION
                    {?subject mf:hasPemeran ?pemeran.
        			        ?pemeran rdfs:label ?labelpemeran.
                      OPTIONAL{?pemeran dbo:linkdata ?linkpemeran.}}
                    UNION
                    {?subject mf:hasPenulisSkenario ?skenario.
  		               ?skenario rdfs:label ?labelskenario.
                      OPTIONAL{?skenario dbo:linkdata ?linkskenario.}}
                    UNION
                    {?subject mf:hasProduser ?produser.
  		               ?produser rdfs:label ?labelproduser.
                      OPTIONAL{?produser dbo:linkdata ?linkproduer.}}
                    UNION
                    {?subject mf:hasSutradara ?sutradara.
  		               ?sutradara rdfs:label ?labelsutradara.
                      OPTIONAL{?sutradara dbo:linkdata ?linksutradara.}}
                    UNION
                    {?subject mf:hasPenataGambar ?penatagambar.
  		               ?penatagambar rdfs:label ?labelpenatagambar.
                     OPTIONAL{?penatagambar dbo:linkdata ?linkpenatagambar.}}
                    UNION
                    {?subject mf:hasPenataArtistik ?penataartistik.
                    ?penataartistik rdfs:label ?labelpenataartistik.
                      OPTIONAL{?penataartistik dbo:linkdata ?linkpenataartistik.}}
                    UNION
                    {?subject mf:hasPenataMusik ?penatamusik.
  		               ?penatamusik rdfs:label ?labelpenatamusik.
                      OPTIONAL{?penatamusik dbo:linkdata ?linkpenatamusik.}}
                    UNION
                    {?subject mf:hasPenataKamera ?penatakamera.
                     ?penatakamera rdfs:label ?labelpenatakamera.
                        OPTIONAL{?penatakamera dbo:linkdata ?linkpenatakamera.}}
                    UNION
                    {?subject mf:hasPerusahaanProduser ?perusahaanproduser.
                     ?perusahaanproduser rdfs:label ?labelperusahaanproduser.}
                    UNION
                    {?subject dbo:source ?source.}
                  }`
                }
              }).then((response) => {
                const result = response.data.results.bindings
                let hasil = result
                commit('DETAIL_FILM', hasil)
              })
            },

            detailSeniman({ commit }, id) {
              axios.get(link, {
                params: {
                  query: `
                  PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
                  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                  PREFIX dbo: <http://dbpedia.org/ontology/>
                  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                  PREFIX schema: <http://schema.org/>

                  SELECT DISTINCT ?label ?pemeran ?penataArtistik ?penataGambar
                  ?penataKamera ?penataMusik ?penulisSkenario ?produser ?sutradara
                  WHERE {
                    {?object rdfs:label ?label.}
                    UNION
                    {?subject mf:hasPemeran ?object.
                     ?subject rdfs:label ?pemeran.}
                    UNION
                    {?subject mf:hasPenataArtistik ?object.
                     ?subject rdfs:label ?penataArtistik.}
                    UNION
                    {?subject mf:hasPenataGambar ?object.
                     ?subject rdfs:label ?penataGambar.}
                    UNION
                    {?subject mf:hasPenataKamera ?object.
                     ?subject rdfs:label ?penataKamera.}
                    UNION
                    {?subject mf:hasPenataMusik ?object.
                     ?subject rdfs:label ?penataMusik.}
                    UNION
                    {?subject mf:hasPenulisSkenario ?object.
                     ?subject rdfs:label ?penulisSkenario.}
                    UNION
                    {?subject mf:hasProduser ?object.
                     ?subject rdfs:label ?produser.}
                    UNION
                    {?subject mf:hasSutradara?object.
                     ?subject rdfs:label ?sutradara.}

                    FILTER(<${id}> = ?object)
                  }`
                }
              }).then((response) => {
                const result = response.data.results.bindings
                let hasil = result
                commit('DETAIL_SENIMAN', hasil)
              })
            },

            nodeVisualisasi({ commit }) {
              axios.get(link, {
                params: {
                  query: `
                  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                  PREFIX owl: <http://www.w3.org/2002/07/owl#>


                  SELECT ?domains ?propertys ?ranges ?labelsub ?label
                  WHERE {
                    {?property rdf:type owl:ObjectProperty.
                     ?property rdfs:domain ?domain;
                              rdfs:range ?range.
                    ?domain rdfs:label ?domains.
                    ?property rdfs:label ?propertys.
                    ?range rdfs:label ?ranges.}
                    UNION
                    {
                     ?subject rdf:type owl:Class.
                     ?subject rdfs:label ?label.
                     ?subject rdfs:subClassOf ?subclass.
                     ?subclass rdfs:label ?labelsub.
                    }
                  }`
                    }
                  }).then((response) => {
                      const result = response.data.results.bindings
                      let hasil = result
                      commit('NODE_VISUALISASI', hasil)
                  })
                },

                getIndividuals({ commit }, id) {
                  axios.get(link, {
                    params: {
                      query: `
                      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                      PREFIX schema: <http://schema.org/>
                      PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
                      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                      PREFIX owl: <http://www.w3.org/2002/07/owl#>
                      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                      PREFIX seniman: <http://alunalun.info/ontology/seniman#>

                      SELECT *
                      WHERE {
                          ?subject rdfs:label "${id}".
                          ?individuals a ?subject.
                          ?individuals rdfs:label ?label.
                      }`
                    }
                  }).then((response) => {
                    const result = response.data.results.bindings
                    let hasil = result
                    commit('GET_INDIVIDUALS', hasil)
                  })
                },

                showJenisSeniman({ commit }) {
                  axios.get(link, {
                    params: {
                      query: `
                      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                      PREFIX schema: <http://schema.org/>
                      PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
                      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                      PREFIX owl: <http://www.w3.org/2002/07/owl#>
                      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                      PREFIX seniman: <http://alunalun.info/ontology/seniman#>

                      SELECT ?subject ?label
                      WHERE{
                       ?subject rdfs:subClassOf mf:Seniman.
                       ?subject rdfs:label ?label.
                      }`
                    }
                  }).then((response) => {
                    const result = response.data.results.bindings
                    let hasil = result
                    commit('SHOW_JENIS_SENIMAN', hasil)
                  })
                },

                showDataSeniman({ commit }, id) {
                  axios.get(link, {
                    params: {
                      query: `
                      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                      PREFIX schema: <http://schema.org/>
                      PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
                      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                      PREFIX owl: <http://www.w3.org/2002/07/owl#>
                      PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                      PREFIX seniman: <http://alunalun.info/ontology/seniman#>
                      PREFIX dbo: <http://dbpedia.org/ontology/>

                      SELECT ?subject ?label ?peran ?linkdata
                      WHERE{
                       ?subject a ?object.
                       ?subject rdfs:label ?label.
                       OPTIONAL {?subject dbo:linkdata ?linkdata.}
                       ?object rdfs:label ?peran.
                       FILTER( <${id}> = ?object)
                     } ORDER BY ASC(?label)`
                                          }
                  }).then((response) => {
                    const result = response.data.results.bindings
                    let hasil = result
                    commit('SHOW_DATA_SENIMAN', hasil)
                  })
                },

                detailsPengarangMusik({ commit }, id) {
                  axios.get(link, {
                    params: {
                      query: `
                      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                      PREFIX mf: <http://alunalun.info/ontology/musikfilm#>
                      PREFIX dbo: <http://dbpedia.org/ontology/>

                      SELECT ?subject ?label ?labelmusik
                      WHERE{
                        {?object rdfs:label ?label.}
                        UNION{
                          ?subject mf:hasPengarangMusik ?object.
                          ?subject rdfs:label ?labelmusik.
                        }
                       FILTER(<${id}> = ?object)
                      }`
                                          }
                  }).then((response) => {
                    const result = response.data.results.bindings
                    let hasil = result
                    commit('DETAILS_PENGARANG_MUSIK', hasil)
                  })
                },

          }
        })
