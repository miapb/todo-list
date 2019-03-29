<template>
  <div class="hello">
    <h1>{{ name }}'s To-Do list</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mia"
    };
  },
  methods() {},
  computed() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$palette_regular: rgb(255, 0, 0);
$palette_hightlight: rgb(0, 47+20, 255);

h1 {
  color: $palette_hightlight;
  &:hover {
    color: $palette_regular;
  }
}
</style>
