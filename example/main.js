const app = Vue.createApp({
    data() {
        return {
            movingWindowRef: '',
            isWindowMoving: false,
            diffX: 0,
            diffY: 0
        }
    },
    methods: {
        minimizeWindow(trigger) {
            this.$refs.holder.pushTask(trigger)
        },
        moveEnd() {
            this.isWindowMoving = false;
        },
        mouseMove(event) {
            if (this.isWindowMoving) {
                this.$refs[this.movingWindowRef].moveWindow(event, this.diffX, this.diffY);
            }
        },
        moveStart(info) {
            this.diffX = info.diffX;
            this.diffY = info.diffY;
            this.isWindowMoving = true
            this.movingWindowRef = info.ref
        }
    }
})
