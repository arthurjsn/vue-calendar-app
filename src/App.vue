<template>
  <div>
    <CalendarWidget />
    <Hour />
    <Text />
  </div>
</template>

<script>
  import CalendarWidget from './components/CalendarWidget.vue';
  import Hour from './components/Hour.vue';
  import Text from './components/Text.vue';

  export default {
    name: 'App',
    components: {
      CalendarWidget,
      Hour,
      Text,
    }
  }
</script>

<style scoped>
 .container {
     max-width: 500px;
 }
</style>