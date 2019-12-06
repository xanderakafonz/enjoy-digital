<template>
  <div class="title">
    <h1>{{copy}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private copy!: string;
}
</script>

<style scoped lang="scss">

</style>
