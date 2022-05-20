import React, { useEffect } from "react";
import "tailwind.config";

import { useState } from "react";

import { useRouter } from "next/router";
import LoginHeader from "@components/header/LoginHeader";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { Loading } from "@nextui-org/react";

const SuccessPayment: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [seconds, setSeconds] = useState(3);

    const Router = useRouter();
    const query = Router.query;

    useEffect(() => {
        setTimeout(() => {
            Router.push("/");
        }, 5000);
    });

    // const router = useRouter();
    // return <Redirect to="" />;

    return (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Head>
                <title>Thanh toán thành công</title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>
            
         

            <div className="text-center">
                
                    <CheckCircleIcon className="h-[100px] w-[100px] text-pink-500 inline-block" />

                    <h1 className="text-black text-3xl md:text-6xl mb-6" >Thanh toán thành công</h1>

                    <Loading type="points-opacity" size="xl" color="error"/>

                    <h2 className="text-black font-normal text-xl mx-4">Bạn sẽ được chuyển về trang chủ trong chốc lát...</h2>
                
            </div>
        </div>
    );
};

export default SuccessPayment;
