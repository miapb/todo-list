<template>
  <div class = "todo">
    <div id="header">
      <h1>To-Do list</h1>
    </div>
    
    <div class = "content">
      <input type="text" class="input" id="inputTask" placeholder="Add a task and be productive" v-on:keyup.enter="addTask">   
      
      <div v-for = "(task, index) in tasks" :key="task.id" class="taskElement">    
        <div class="checkbox">
          <input type="checkbox" :id="task.id" class="cbx" v-model="task.done" style="display: none;">
          <label :for="task.id" class="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
             </svg>
          </label>
        </div>
        
        <div class="task" v-on:dblclick="toggleEditable(index)">
          <del v-if="task.done">{{ task.name }}</del>
          <div v-else>
            <span v-if="!task.editable">
              {{task.name}}
            </span>
            <input v-else type="text" :id="'taskNameInput'+index" class="input" v-on:keyup.enter="toggleEditable(index)" v-model="task.name">
          </div>
        </div>

        <div class="deleteTask">
          <button v-on:click="removeTask(task.id)"><img src="../assets/trash.svg"/></button>
        </div>   
      </div>

      <button id="removeAllDone" v-on:click="removeAllDone()">Remove All Done</button>
    </div>
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
      this.tasks[index].editable = !this.tasks[index].editable;
      if(this.tasks[index].editable) {
        this.$nextTick(function () {
            let ref = "taskNameInput" + index;       
            document.getElementById(ref).focus();
        });
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.todo {
  margin: 0 auto;
  width: 35%;
  min-width: 400px;
}

#header {
  margin-bottom: 30px;
}


h1 {
  text-transform: uppercase;
  font-size: 3em;
  color: aliceblue;
  background-image: linear-gradient(to left bottom, #523956, #563c59, #5a405d, #5e4360, #624764);
  margin: 0 auto;
  padding: 30px 0;
}

.content {
  padding: 30px;
  padding-bottom: 0;
  background-color: #ffffff;
}


.input {
  width: 100%;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  border: none;
  font-size: 15px;
}


#inputTask {
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
}

.taskElement {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "checkbox task remove";
  height: 80px;
  div {
    margin: auto;
  }
  margin-bottom: 10px;
  border-bottom: 0.5px solid grey;
}

.checkbox { 
  grid-area: checkbox; 
  margin: auto 0 !important;
}

.task { 
  grid-area: task; 
  text-align: center;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
}

.deleteTask { 
  grid-area: remove; 
  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
}


#removeAllDone {
  margin: 20px 0;
  border-radius: 20px;
  height: 60px;
  border: none;
  cursor: pointer;
  color:aliceblue;
  background-image: linear-gradient(to left bottom, #523956, #563c59, #5a405d, #5e4360, #624764);
  box-shadow: 10px 10px 27px -16px rgba(0,0,0,0.75);
  transition: all 50ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    transform: scale(0.95);
  }
}

$color_cloud_burst_3_approx: rgba(34,50,84,0.03);
$color_ghost_approx: #c8ccd4;
$color_royal_blue_approx: #4285f4;

.check {
	cursor: pointer;
	position: relative;
	margin: auto;
	width: 18px;
	height: 18px;
	transform: translate3d(0, 0, 0);
	&:before {
		content: "";
		position: absolute;
		top: -15px;
		left: -15px;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: $color_cloud_burst_3_approx;
		opacity: 0;
		transition: opacity 0.2s ease;
	}
	svg {
		position: relative;
		z-index: 1;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke: $color_ghost_approx;
		stroke-width: 1.5;
		transform: translate3d(0, 0, 0);
		transition: all 0.2s ease;
		path {
			stroke-dasharray: 60;
			stroke-dashoffset: 0;
		}
		polyline {
			stroke-dasharray: 22;
			stroke-dashoffset: 66;
		}
	}
	&:hover {
		&:before {
			opacity: 1;
		}
		svg {
			stroke: $color_royal_blue_approx;
		}
	}
}
.cbx:checked + .check svg {
	stroke: $color_royal_blue_approx;
	path {
		stroke-dashoffset: 60;
		transition: all 0.3s linear;
	}
	polyline {
		stroke-dashoffset: 42;
		transition: all 0.2s linear;
		transition-delay: 0.15s;
	}

}
</style>
