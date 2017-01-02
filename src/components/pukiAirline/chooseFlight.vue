<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    
  </div>

</template>

<script>
  export default {
    data() {
      return {
        msg: 'choose flight'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>