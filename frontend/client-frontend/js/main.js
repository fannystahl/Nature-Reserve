// Fanny Ståhl 2019

new Vue({
    el: '#app',
    data () {
      return {
        nrs: [],
        search: ""
      }
    },
    // Computed properties
    computed: {
      // Search filter
      filteredNrs: function() {
        return this.nrs.filter((nr) => {
          return ((nr.nrName).toLowerCase()).match((this.search).toLowerCase());
        })
      }

    },
    // When Vue app is mounted, Get from REST
    mounted () {
      axios
        .get('https://nature-reserve-app.herokuapp.com/api/natureres')
        .then(response => (this.nrs = response.data))
        .catch(e => {
          console.error(e)
        })
    }
  })