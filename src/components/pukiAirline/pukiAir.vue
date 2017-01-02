<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Where do you want to go??</h2>
    <p><chooseDate></chooseDate></p>
    <p><choosePass></choosePass></p>
    <p><chooseFlight></chooseFlight></p>
  </div>
</template>

<script>
import chooseDate   from 'src/components/pukiAirline/chooseDate'
import choosePass   from 'src/components/pukiAirline/choosePass'
import chooseFlight from 'src/components/pukiAirline/chooseFlight'

export default {
  components: {
    chooseDate, chooseFlight,choosePass
  },
  data () {
    return {
      msg: 'Welcome to Puki Air!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  padding: 6px;
}
a {
  color: #42b983;
}
</style>
