import { Footer } from "@components/footer";
import LoginHeader from "@components/header/LoginHeader";
import Head from "next/head";
import { ErrorPage } from "@components/ErrorPage";



export default function Custom404() {
    return (
        <div className="">
            <Head>
                <title>404 - Trang không tìm thấy</title>
                <link
                    rel="icon"
                    href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
                    type="image/x-icon"
                ></link>
            </Head>
            
           
            <LoginHeader />

            
            <ErrorPage error={404} />
            
        </div>
    );
}
