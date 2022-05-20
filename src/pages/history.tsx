import React from "react";
// import classNames from "classnames";
import { Footer } from "@components/footer";
import { LoginHeader } from "@components/header/LoginHeader";
import Head from "next/head";
import { HistoryTrip } from "@components/HistoryTrip";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "@utils/apiEndpoints";
import { getCookie, setCookies, checkCookies } from "cookies-next";
import { redirect } from "next/dist/server/api-utils";
import { GetServerSideProps } from "next";
import cookie from "cookie";
import { stringify } from "querystring";

export const Trip: React.FC = () => {
    return (
        <div className="">
            <Head>
                <title>Lịch sử - Airbnb</title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            <LoginHeader />

            <HistoryTrip />

            <Footer />
        </div>
    );
};

export default Trip;

// const response = axios
//     .get(
//         `https://cc62e73f33af4d5eb355d601efc35466-3afda50d-vm-80.vlab2.uit.edu.vn/api/v1${API_ENDPOINTS.ISLOGGEDIN}`,
//     )
//     .then((res) => {
//         const { data } = res;
//         if (data.message == "Logged in!") {
//             // if(localStorage.getItem("isLogin") === "false") {
//             //     return (
//             //         <div>
//             //             {Router.push("/login")}
//             //         </div>

//             //     );
//             // } else

//             return (
//                 <div className="">
//                     <Head>
//                         <title>Đăng ký - Airbnb</title>
//                         <link
//                             rel="icon"
//                             href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
//                             type="image/x-icon"
//                         ></link>
//                     </Head>

//                     <LoginHeader />

//                     <HistoryTrip />

//                     <Footer />
//                 </div>
//             );
//         } else {
//             const router = useRouter();
//             return (
//                 <div>

//                     {router.push("/login")}
//                 </div>
//     )}

//     })
//     .catch((err) => {
//         console.log(err);
//     });
//     // return (<div></div>)

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const cookies = cookie.parse(req.headers.cookie || "");
    const value = cookies["isLoggedIn"];

   

    if (!value) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
