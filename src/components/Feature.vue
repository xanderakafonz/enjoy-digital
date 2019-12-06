<template>
  <div class="feature">
    <h2>{{copy.title}}</h2>
    <p>{{copy.body}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Feature extends Vue {
  @Prop() private copy!: Object;
}
</script>

<style scoped lang="scss">
  .feature {
    padding: 50px 85px;
    background: #fff;
  }
</style>
