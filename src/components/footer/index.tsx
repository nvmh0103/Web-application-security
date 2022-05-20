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
            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-4 gap-10 px-16 py-14 text-black font-normal border-t border-gray-300">
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
                            href="https://www.airbnb.com.vn/trust"
                        >
                            Thông tin an toàn
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19"
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
                            href="https://www.airbnb.com.vn/accessibility"
                        >
                            Hỗ trợ người khuyết tật
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/neighbors"
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
                            href="https://www.airbnb.org/?locale=vi"
                        >
                            Airbnb.org: Nhà ở cứu trợ
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.org/refugees"
                        >
                            Hỗ trợ dân tị nạn Afghanistan
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/against-discrimination"
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
                            href="https://www.airbnb.com.vn/host/homes?from_footer=1"
                        >
                            Thử đón tiếp khách
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/aircover-for-hosts"
                        >
                            AirCover: Bảo vệ cho Host
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/help/community?s=footer"
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
                            href="https://www.airbnb.com.vn/help/responsible-hosting"
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
                            href="https://www.airbnb.com.vn/press/news"
                        >
                            Trang tin tức
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/2021-winter"
                        >
                            Tìm hiểu các tính năng mới
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://news.airbnb.com/what-makes-airbnb-airbnb"
                        >
                            Thư ngỏ từ nhà sáng lập
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/careers"
                        >
                            Cơ hội nghề nghiệp
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://investors.airbnb.com/"
                        >
                            Nhà đầu tư
                        </a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com/luxury"
                        >
                            Airbnb Luxe
                        </a>
                    </p>
                </div>
            </div>

            <hr className="block text-gray-300 w-[91.5%] mx-auto "></hr>

            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10 px-16 py-6 font-normal relative">
                <div className="flex flex-col md:flex-row">
                    <p className="text-center"> © 2022 cmtz, Inc. </p>
                    <span className="w-[19px] text-center hidden md:block">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/terms/privacy_policy"
                        >
                            Quyền riêng tư
                        </a>
                    </p>
                    <span className="w-[19px] text-center hidden md:block">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/terms"
                        >
                            Điều khoản
                        </a>
                    </p>
                    <span className="w-[19px] text-center hidden md:block">.</span>
                    <p className="text-center">
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/sitemaps/v2"
                        >
                            Sơ đồ trang web
                        </a>
                    </p>
                </div>

                <div className="md:flex-row flex-col flex justify-end  md:space-x-4 md:space-y-0 space-y-4 ">
                    <div className="flex space-x-2 justify-center">
                        <div className="mt-1 cursor-pointer">
                            <GlobeIcon color="black" />
                        </div>
                        <a className="text-black hover:underline font-semibold cursor-pointer ">Tiếng Việt (VN)</a>
                    </div>

                    <div className="flex space-x-1 cursor-pointer justify-center">
                        <span className="w-4 h-4 text-center mb-1 text-black"> $ </span>
                        <a className="text-black hover:underline font-semibold">USD</a>
                    </div>

                    <div className="flex space-x-6 md:!mt-1 justify-center">
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
