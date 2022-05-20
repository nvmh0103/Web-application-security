import React, { useRef } from "react";
import Head from "next/head";
import "tailwind.config";
import { Button } from "@components";
import { Container, Header, Main, Footer, Cards, Logo } from "@components";
import { Banner } from "@components/banner";
import router, { Router } from "next/router";

import { useEffect, useState } from "react";
import { useMouseWheel } from "react-use";
import { useRouter } from "next/router";
import { useOnClickOutside } from "usehooks-ts";

import cors from "cors";
import { LoginHeader } from "@components/header/LoginHeader";
import Profile from "@components/profile";
import { getCookie } from "cookies-next";
import { GetServerSideProps } from "next";

import cookie from "cookie";

// function Redirect({to}) {
//     useEffect(() => {
//         router.push(to);
//     }, [to]);
//     return null;
// }

const User: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const router = useRouter();
    // return <Redirect to="" />;

    return (
        <div>
            <Head>
                <title>Hồ sơ của Eric - Airbnb</title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            <LoginHeader />

            <Profile />

            <Footer />
        </div>
    );
};

export default User;

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
