<template>
  <div id="app">
    <Title :copy="content.title" />
    <Body :copy="content.body"></Body>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

import Title from './components/Title.vue';
import Body from './components/Body.vue';

@Component({
  components: {
    Title,
    Body,
  },
})
export default class App extends Vue {
  baseUrl = process.env.VUE_APP_BASE_URL;

  content = null;

  mounted() {
    this.fetchData();
  }

  fetchData() {
    const url = `${this.baseUrl}/data/content.json`;
    axios.get(url).then((response) => {
      this.content = response.data;
    });
  }
}
</script>

<style lang="scss">

</style>
