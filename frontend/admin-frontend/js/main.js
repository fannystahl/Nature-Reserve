// Fanny Ståhl 2019

new Vue({
    el: '#app',
    data () {
      return {
        nrs: [],
        search: '',
        editNrs: null,
        showForm: false,
        NatureRes: {
          nrName: null,
          nrSize: null,
          nrYear: null,
          nrRegion: null,
          nrTrustee: null,
          nrPlotOwner: null,
          nrDecisionLink: null,
          nrManagementLink: null,
          nrDescription: null
        }
      }
    },
    // Methods
    methods: {
      // Check form, validate
      checkForm: function(nr) {
        if (nr.nrName && nr.nrSize && nr.nrYear && nr.nrRegion && nr.nrTrustee && nr.nrPlotOwner && nr.nrDescription) {
          return true;
        } else {
          return false
        }
      },
      // Post to REST
      postNr: function() {

        if(this.checkForm(this.NatureRes)){
            // Axios POST
            axios
            .post(`https://nature-reserve-app.herokuapp.com/api/natureres/add`, this.NatureRes)
            .then( response => {
              console.log(response);
            })
            .catch( error => {
              console.log(error);
            });

        }

      },
      // Delete from REST
      removeNr: (id) => {

        // Confirm that DELETE should be executed
        var result = confirm(`Vill du ta bort Naturreservat med id: ${id}?`)
        
        if (result){
          axios
            .delete(`https://nature-reserve-app.herokuapp.com/api/natureres/${id}`)
            .then(() => { 
              // Reload location
              location.reload();
            })
            .catch( error => {
              console.log(error);
            })
        }

      },
      // PUT to REST
      updateNr: function(nr) {
        if(this.checkForm(nr)){
          axios
          .put(`https://nature-reserve-app.herokuapp.com/api/natureres/${nr._id}`, nr)
          .then( () => {
            this.editNrs = null;
          })
        }
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