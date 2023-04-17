import { createApp, h } from 'vue';
import App from './App.vue'
import httpAxios from './httpAxios';
httpAxios.defaults.headers.common['Authorization'] = "token";
import router from './router';
const app = createApp({
    render() { return h(App); }
});


app.mount('#app');
app.use(httpAxios);
app.use(router);

