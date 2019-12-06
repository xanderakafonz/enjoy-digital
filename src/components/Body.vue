<template>
  <div class="body">
    <div class="content">
      <p v-for="(line, index) in copy" :key="index">{{line}}</p>
    </div>
    <div class="block"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Body extends Vue {
  @Prop() private copy!: Array<string>;
}
</script>

<style scoped lang="scss">
  .content {
    background: #fff;
    padding: 55px 85px;
  }
</style>
