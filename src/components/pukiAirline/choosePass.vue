<template>
  <div>
    <h1>{{ msg }}</h1>
    <li>
      <ul>1</ul>
      <ul>2</ul>
      <ul>3</ul>
    </li>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'choose pass'
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