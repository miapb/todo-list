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
  methods: {
    addTask: function(event) {
      const name = event.target.value
      this.tasks.push({name, done: false, id: Date.now(), editable: false})
      event.target.value = ""
    },
    removeTask: function(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    removeAllDone: function() {
      this.tasks = this.tasks.filter(task => !task.done)
    },
    toggleEditable: function(index){
      this.tasks[index].editable = !this.tasks[index].editable 
    }
  }
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
