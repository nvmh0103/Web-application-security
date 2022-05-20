import React from "react";
import Head from "next/head";
import "tailwind.config";
import { Container, Footer } from "@components";


import { useState } from "react";

import { StickyHeader } from "@components/header/StickyHeader";
import { useRouter } from "next/router";

import Banner from "@components/banner";
import DetailRoom from "@components/DetailRoom";

const Room: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const Router = useRouter();

    const { location, title, guests } = Router.query;
    
    // const router = useRouter();
    // return <Redirect to="" />;


    return (
        <Container>
            <Head>
                <title>
                    {title} - Airbnb
                </title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            

           <div> <StickyHeader title="Bắt đầu tìm kiếm" place="Bạn muốn đi đâu" /> </div> 

            

           <DetailRoom />
            
           
               
            <Footer />
        </Container>
    );
};

export default Room;
