<template>
  <div class="grid" v-if="content">
    <Title :copy="content.title" />
    <Body :copy="content.body" />
    <Quote :copy="content.quote" />
    <Feature :copy="content.feature" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

import Title from './components/Title.vue';
import Body from './components/Body.vue';
import Quote from './components/Quote.vue';
import Feature from './components/Feature.vue';

@Component({
  components: {
    Title,
    Body,
    Quote,
    Feature,
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
