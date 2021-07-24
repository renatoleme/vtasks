app.component('holder', {
    data() {
        return {
            tasks: []
        }
    },
    template: `<div class="holder">
                  <div v-for="(task, index) in this.tasks">
                   <div @mouseover="overItemMask(index)" @mouseout="removeItemMask(index)" class="mask" :style="task.style">
                     <img :src="this.assetsPath(index)"  class="holder-item" @click="this.restoreWindow(index)" />
                   </div>                      
                  </div>
                  <i class="vtask-credit">vtask.js</i>
               </div>`,
    methods: {
        removeItemMask(index) {
            this.tasks[index].style.opacity = 1;
        },
        overItemMask(index) {
            this.tasks[index].style.opacity = 0.5;
        },
        assetsPath(index) {
            return this.tasks[index].icon
        },
        restoreWindow(index) {
            this.tasks[index].trigger()
            this.tasks.splice(index, 1)
        },
        pushTask(trigger) {
            trigger.style = {opacity: 1};
            this.tasks.push(trigger)
        }
    }
        
    
})
