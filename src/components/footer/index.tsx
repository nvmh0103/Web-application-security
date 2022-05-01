import React from "react";
import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
    GlobeIcon,
    FacebookIcon,
    InstagramIcon,
} from "@components/icons";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const Footer: React.FC = () => {
    const languageOption = ["Tiếng Việt (VN)", "English (EN)"];
    const currencyOption = ["VND", "USD"];

    return (
        <>
            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-4 gap-10 px-16 py-14 text-black font-normal">
                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Hỗ trợ</h5>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/help/home?from=footer"
                        >
                            Trung tâm trợ giúp
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Thông tin an toàn
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Các tùy chọn hủy
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Biện pháp ứng phó với đại dịch COVID-19 của chúng
                            tôi
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Hỗ trợ người khuyết tật
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Báo cáo lo ngại của hàng xóm
                        </a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Cộng đồng</h5>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Airbnb.org: Nhà ở cứu trợ
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Hỗ trợ dân tị nạn Afghanistan
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Chống phân biệt đối xử
                        </a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Đón tiếp khách</h5>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Thử đón tiếp khách
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            AirCover: Bảo vệ cho Host
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Xem tài nguyên đón tiếp khách
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Truy cập diễn đàn cộng đồng
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Đón tiếp khách có trách nhiệm
                        </a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Giới thiệu</h5>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Trang tin tức
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Tìm hiểu các tính năng mới
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Thư ngỏ từ nhà sáng lập
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Cơ hội nghề nghiệp
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Nhà đầu tư
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Airbnb Luxe
                        </a>
                    </p>
                </div>
            </div>

            <hr className="block bg-gray-200 w-[91.5%] mx-auto "></hr>

            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10 px-16 pb-3 pt-6 font-normal relative">
                <div className="flex">
                    <p className="text-center"> © 2022 cmtz, Inc. </p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Quyền riêng tư
                        </a>
                    </p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Điều khoản
                        </a>
                    </p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Sơ đồ trang web
                        </a>
                    </p>
                </div>

                <div className="flex justify-end  space-x-4">
                    <div className="flex  space-x-2">
                        <div className="mt-1">
                            <GlobeIcon color="black" />
                        </div>
                        <a className="text-black underline font-semibold">Tiếng Việt (VN)</a>
                    </div>

                    <div className="flex space-x-1 !mr-10 ">
                        <span className="w-4 h-4 text-center mb-1 text-black"> $ </span>
                        <a className="text-black underline  font-semibold">USD</a>
                    </div>

                    <div className="flex space-x-6 mt-1">
                        <a href="https://www.facebook.com/airbnb">
                            <InstagramIcon />
                        </a>

                        <a href="https://twitter.com/airbnb">
                            <TwitterIcon />
                        </a>

                        <a href="https://instagram.com/airbnb">
                            <FacebookIcon color="black" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
