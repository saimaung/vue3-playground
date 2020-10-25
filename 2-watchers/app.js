const App = {
    data() {
        return {
            orderStatus: '',
            orderSubmitted: null
        }
    },
    methods: {
        getTaco() {
            this.orderStatus = 'submitted';
            this.orderSubmitted = true;
        }
    },
    watch: {
        orderSubmitted() {
            window.setTimeout(() => this.orderSubmitted = null, 1000);
        }
    }
}

Vue.createApp(App).mount('#app')