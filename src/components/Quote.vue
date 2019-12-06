<template>
  <div class="quote">
    <blockquote>"{{copy.body}}"</blockquote>
    <p>{{copy.subquote}}</p>
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

</style>
