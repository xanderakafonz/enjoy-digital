<template>
  <div class="quote">
    <blockquote>
      <p>
        "{{copy.body}}"
        <span class="box"></span>
      </p>
      <footer><cite>{{copy.subquote}}</cite></footer>
    </blockquote>
    <div class="block"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Quote extends Vue {
  @Prop() private copy!: Object;
}
</script>

<style scoped lang="scss">
  blockquote {
    margin: 30px 0;

    p {
      position: relative;
    }

    .box {
      top: -85px;
      right: 0;
    }

    @media screen and (min-width: 768px) {
      margin: 60px 0 0 20px;
    }
  }
</style>
