<template>
  <div class = "todo">
    <div id="header">
      <h1>To-Do list</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "test",
          done: false,
          id: Date.now(),
          editable: false
        }
      ]
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
