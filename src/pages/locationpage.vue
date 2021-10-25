<template>
  <q-page class="flex-center">
    <TomTomMap city='Thailand, OR' apikey='scQnhiQ71GvRA0HmCrirnmDvngEqCaqw'/>
  </q-page>
</template>

<script>
import TomTomMap from 'components/TomTomMap.vue'
export default {
  components: { TomTomMap }
}
</script>