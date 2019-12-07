<template>
  <div class="feature">
    <span class="box"></span>
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
    padding: 20px 25px;
    background: #fff;
    position: relative;

    .box {
      right: -65px;
      top: -1px; // Sneaky magic number
    }

    @media screen and (min-width: 768px) {
      padding: 50px 85px;
    }
  }
</style>
