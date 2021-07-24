const vtasks = Vue.createApp({
    data() {
        return {
            oi: 'Hello worldssss'
        }
    },
    methods: {
        addTask(event) {
            console.log('[main.js] Vtasks')
            this.$el.parentNode.appendChild(event.target)
            if (event.target.id === 'clickable')
                this.$refs.holder.pushTask()
        }
    },
    created() {
     //   document.addEventListener('dblclick', this.addTask)
    }
    
})
