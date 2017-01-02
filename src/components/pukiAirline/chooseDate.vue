<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="card">
      <div class="row">
        <span>Departure Date：</span>
        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
      </div>
      <div class="row">
        <span>Return Date：</span>
        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
      </div>
    </div>

  </div>
</template>
<script>
  import myDatepicker from 'vue-datepicker'

  export default {
    name: 'ChooseDate',
    components: {
      'date-picker': myDatepicker,
    },
    data() {
      return {
        msg: 'HI Choose A Date!!',
        startTime: {
          time: ''
        },
        endtime: {
          time: ''
        },
        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          placeholder: 'when?',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: "YYYY-MM-DD HH:mm"
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5, 6, 7]
        },
        {
          type: 'fromto',
          from: '2016-01-01',
          to: '2017-12-31'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  display: flex;
}
a {
  color: #42b983;
}
</style>