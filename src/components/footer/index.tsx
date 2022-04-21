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

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Footer: React.FC = () => {

    const languageOption = ['Tiếng Việt (VN)', 'English (EN)'];
    const currencyOption = ['VND', 'USD'];

    return (
        <>
            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-4 gap-10 px-16 py-14 text-black font-normal">
                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Hỗ trợ</h5>
                    <p>
                        <a>Trung tâm trợ giúp</a>
                    </p>
                    <p>
                        <a>Thông tin an toàn</a>
                    </p>
                    <p>
                        <a>Các tùy chọn hủy</a>
                    </p>
                    <p>
                        <a
                            className="hover:underline"
                            href="https://www.airbnb.com.vn/d/covidsafety"
                        >
                            Biện pháp ứng phó với đại dịch covid của chúng tôi
                        </a>
                    </p>
                    <p>
                        <a>Hỗ trợ người khuyết tật</a>
                    </p>
                    <p>
                        <a>Báo cáo lo ngại của hàng xóm</a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Cộng đồng</h5>
                    <p>
                        <a>Airbnb.org: Nhà ở cứu trợ</a>
                    </p>
                    <p>
                        <a>Hỗ trợ dân tị nạn Afghanistan</a>
                    </p>
                    <p>
                        <a>Chống phân biệt đối xử</a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Đón tiếp khách</h5>
                    <p>
                        <a>Thử đón tiếp khách</a>
                    </p>
                    <p>
                        <a>AirCover: Bảo vệ cho Host</a>
                    </p>
                    <p>
                        <a>Xem tài nguyên đón tiếp khách</a>
                    </p>
                    <p>
                        <a>Truy cập diễn đàn cộng đồng</a>
                    </p>
                    <p>
                        <a>Đón tiếp khách có trách nhiệm</a>
                    </p>
                </div>

                <div className="space-y-4 text-black">
                    <h5 className="font-bold">Giới thiệu</h5>
                    <p>
                        <a>Trang tin tức</a>
                    </p>
                    <p>
                        <a>Tìm hiểu các tính năng mới</a>
                    </p>
                    <p>
                        <a>Thư ngỏ từ nhà sáng lập</a>
                    </p>
                    <p>
                        <a>Cơ hội nghề nghiệp</a>
                    </p>
                    <p>
                        <a>Nhà đầu tư</a>
                    </p>
                    <p>
                        <a>Airbnb Luxe</a>
                    </p>
                </div>
            </div>

            <hr className="block bg-gray-600 w-[91.5%] mx-auto"></hr>

            <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-10 px-16 pb-3 pt-6  text-black relative">
                <div className="flex">
                    <p className="text-center"> © 2022 cmtz, Inc. </p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center">Quyền riêng tư</p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center">Điều khoản</p>
                    <span className="w-[19px] text-center">.</span>
                    <p className="text-center underline">Sơ đồ trang web</p>
                </div>

                <div className="flex justify-end  space-x-4">
                    <div className="flex  space-x-2">
                        <div className="mt-1">
                            <GlobeIcon color="black" />
                        </div>
                        <a className="text-black underline">Tiếng Việt (VN)</a>
                    </div>

                    <div className="flex space-x-1 !mr-10 ">
                        <span className="w-4 h-4 text-center mb-1"> $ </span>
                        <a className="text-black underline">USD</a>
                    </div>

                    <div className="flex space-x-6 mt-1">

                        <a   href="https://www.facebook.com/airbnb">
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
