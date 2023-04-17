import axios from 'axios';
import {cacheAdapterEnhancer} from 'axios-extensions';

// enhance the original axios adapter with throttle and cache enhancer
let httpAxios = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    //************************************************************ */
    withCredentials: true,
    headers: {'Cache-Control': 'no-cache'},
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, {enabledByDefault: false, cacheFlag: 'useCache'})

});
httpAxios.interceptors.response.use(
    (response) => {
        console.log(response);
        console.log(response.headers['content-type'])
        return Promise.resolve(response)
    },
    (error) => {
        // unauthorized request redirection
        if(error.response.status==401)  
        {
            throw(error);
            //router.push("/login")
        }    
       
        
        return Promise.reject(error.response)
    }
);


export default httpAxios;