import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { API_ENDPOINTS } from "@utils/apiEndpoints";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Change request data/error here
// http.interceptors.request.use(
//     (config) => {
//         const accessToken = getAccessToken();
//         config.headers = {
//             ...config.headers,
//             Authorization: `Bearer ${accessToken ? accessToken : ""}`,
//         };
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );
const createAxiosResponseInterceptor = () => {
    const refreshInterceptor = http.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (
                originalConfig.url ===
                    `https://joolux-demo.site${API_ENDPOINTS.GET_ACCESS_TOKEN}` &&
                err.response.status === 401
            ) {
                return Promise.reject(err).catch(() => {
                    Router.replace("/?logoutExpired=true");
                });
            }
            // Access Token was expired
            if (err.response.status === 401) {
                try {
                    axios.interceptors.response.eject(refreshInterceptor);
                    const rs = await axios.get(
                        `https://joolux-demo.site${API_ENDPOINTS.GET_ACCESS_TOKEN}`,
                    );
                    return http(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }

            return Promise.reject(err);
        },
    );
};

createAxiosResponseInterceptor();
export default http;
