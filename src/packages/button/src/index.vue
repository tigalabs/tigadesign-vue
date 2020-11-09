<script>
export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default() {
        return !this.$TIGA || this.$TIGA.size === ""
          ? "default"
          : this.$TIGA.size;
      },
      validator(value) {},
    },
  },
};
</script>