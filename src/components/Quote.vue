<template>
  <div class="quote">
    <blockquote>
      <p>
        "{{copy.body}}"
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
    margin: 60px 0 0 20px;
  }
</style>
