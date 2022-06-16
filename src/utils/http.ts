import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { API_ENDPOINTS } from "@utils/apiEndpoints";
import {getAccessToken,} from "@utils/get-token";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "TokenByClass": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU"
    },
});

// Change request data/error here
// http.interceptors.request.use(
//     (config) => {
        
//         config.headers = {
//             ...config.headers,
//            Authentication: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzAiLCJIZXRIYW5TdHJpbmciOiIxNC8xMC8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NjU3MDU2MDAwMDAiLCJuYmYiOjE2Mzc0Mjc2MDAsImV4cCI6MTY2NTg1MzIwMH0.RAzH9H37ZyQ8ZT6A62fw3_bDfJOCq0A9vz08qT262EU'
           
            
//         };
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );


// const createAxiosResponseInterceptor = () => {
//     const refreshInterceptor = http.interceptors.response.use(
//         (res) => {
//             return res;
//         },
//         async (err) => {
//             const originalConfig = err.config;

//             if (
//                 originalConfig.url ===
//                     `airbnb.cybersoft.edu.vn` &&
//                 err.response.status === 401
//             ) {
//                 return Promise.reject(err).catch(() => {
//                     Router.replace("/?logoutExpired=true");
//                 });
//             }
//             // Access Token was expired
//             if (err.response.status === 401) {
//                 try {
//                     axios.interceptors.response.eject(refreshInterceptor);
//                     const rs = await axios.get(
//                         `airbnb.cybersoft.edu.vn`,
//                     );
//                     return http(originalConfig);
//                 } catch (_error) {
//                     return Promise.reject(_error);
//                 }
//             }

//             return Promise.reject(err);
//         },
//     );
// };

// createAxiosResponseInterceptor();
export default http;
