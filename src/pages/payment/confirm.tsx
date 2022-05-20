import React from "react";
import Head from "next/head";
import "tailwind.config";
import { Container, Footer } from "@components";


import { useState } from "react";

import { LoginHeader } from "@components/header/LoginHeader";
import { useRouter } from "next/router";

import Banner from "@components/banner";
import DetailRoom from "@components/DetailRoom";
import { Payment } from "@components/payment";

const PaymentPage: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const Router = useRouter();

    const { location, title, guests, startDate, endDate,  } = Router.query;
    
    // const router = useRouter();
    // return <Redirect to="" />;


    return (
        <div>
            <Head>
                <title>
                    Xác nhận và thanh toán - Airbnb
                </title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>

            

          

            

           <Payment />
            
           
               
           
        </div>
    );
};

export default PaymentPage;
