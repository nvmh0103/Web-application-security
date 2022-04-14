import React from "react";
import Head from "next/head";
import "tailwind.config";
import { Button } from "@components";
import { Container, Header, Main, Footer, Cards, Logo } from "@components";
import { Banner } from "@components/banner";
import { Router } from "next/router";

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>
                    Airbnb: Nhà nghỉ dưỡng cho thuê, Cabin, Nhà trên bãi biển,
                    Nhà và Trải nghiệm độc đáo - Airbnb
                </title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            <Header />

            <Banner />

            <Main/>
               
            <Footer />
        </Container>
    );
};

export default Home;
