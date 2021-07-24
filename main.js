const vtasks = Vue.createApp({
    data() {
        return {
            oi: 'Hello worldssss'
        }
    },
    methods: {
        addTask(event) {
            this.$el.parentNode.appendChild(event.target)
            if (event.target.id === 'clickable')
                this.$refs.holder.pushTask()
        }
    },
    created() {
     //   document.addEventListener('dblclick', this.addTask)
    }
    
})
