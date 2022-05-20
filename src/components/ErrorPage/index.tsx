import { LargeNumberLike } from "crypto";
import React from "react";

interface Errors {
    error: number;
}

export const ErrorPage: React.FC<Errors> = ({ error }) => {
    return (
        <div className="mx-[18%]">
            <div className="border-b border-gray-300 flex  py-[60px]">
                <div className="w-2/3 pr-20">
                    <div className="font-bold text-8xl mb-10 md:block hidden">
                        {" "}
                        Rất tiếc!{" "}
                    </div>

                    <div className="text-3xl font-normal">
                        Có vẻ chúng tôi không tìm thấy{" "}
                    </div>
                    <div className="text-3xl font-normal">
                        {" "}
                        trang bạn đang tìm kiếm
                    </div>

                    <div className="py-6"> Mã lỗi: {error} </div>

                    <div className="py-4">
                        <div className="font-normal">
                            Dưới đây là một số liên kết hữu ích để thay thế
                        </div>
                        <div className="text-blue-900 font-normal flex flex-col">
                            <a href="/" className="hover:underline">
                                Nhà
                            </a>
                            <a
                                href="https://www.airbnb.com.vn/help"
                                className="hover:underline"
                            >
                                Trợ giúp
                            </a>
                            <a
                                href="https://www.airbnb.com.vn/help/getting-started/how-to-travel"
                                className="hover:underline"
                            >
                                Đi lại cùng Airbnb
                            </a>
                            <a
                                href="https://www.airbnb.com.vn/info/why_host"
                                className="hover:underline"
                            >
                                Đón tiếp khách trên Airbnb
                            </a>
                            <a
                                href="https://www.airbnb.com.vn/trust"
                                className="hover:underline"
                            >
                                Tin cậy và an toàn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 md:block hidden ml-5">
                    <img
                        src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
                        alt=""
                    />
                </div>
            </div>

            <div className="py-5">© 2022 cmtz, Inc. All rights reserved.</div>
        </div>
    );
};
