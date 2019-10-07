var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      firstName:'',
      lastName:'',
      dob:'',
      sexAtBirht:''
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
