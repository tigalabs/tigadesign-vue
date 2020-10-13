<template>
  <div class="t-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "t-button",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="stylus" scoped>
.t-button {
  color: red;
}
</style>
