import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { setCookies, getCookie, removeCookies } from "cookies-next";

export const MenuUser: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const ref = useRef(null);

    const handleClickOutside = () => {
        // Your custom logic here
        setIsOpen(false);
    };

    const handleClickInside = () => {
        setIsOpen(true);
        console.log("clicked inside");
    };

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="">
            {isOpen && (
                <div
                    className="bg-white w-4/5 absolute top-16 rounded-xl py-3 right-0 opacity-100  z-50 items-right border border-gray-300 shadow-subMenu"
                    ref={ref}
                >
                    <ul className="space-y-3 font-normal">
                        <li className="font-bold text-black hover:bg-gray-300 py-1 px-5">
                            <a href="/register">Tin nhắn</a>
                        </li>

                        <li className="font-bold text-black hover:bg-gray-300 py-1 px-5">
                            <a href="/history">Chuyến đi</a>
                        </li>

                        <li className="font-bold hover:bg-gray-300 py-1 px-5">
                            <a href="/register">Danh sách yêu thích</a>
                        </li>

                        <hr className="text-gray-500"></hr>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a href="/register">Cho thuê nhà</a>
                        </li>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a href="/login">Tổ chức trải nghiệm</a>
                        </li>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a href="https://www.airbnb.com.vn/host/homes">
                                Giới thiệu chủ nhà
                            </a>
                        </li>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a href="/user">Tài khoản</a>
                        </li>

                        <hr className="text-gray-500"></hr>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a href="https://www.airbnb.com.vn/help">
                                Trợ giúp
                            </a>
                        </li>

                        <li className="hover:bg-gray-300 py-1 px-5">
                            <a
                                href="/"
                                onClick={() => {
                                    removeCookies("isLoggedIn");
                                }}
                            >
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuUser;
