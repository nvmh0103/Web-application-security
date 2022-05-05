import React, { useState } from "react";
import { Login } from "@components/login";



export const Menu: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

 
    

    return (
        <div className="">
            <div className="bg-white w-3/4 absolute top-16 rounded-xl py-3 right-0 opacity-100  z-50 items-right border border-gray-300 shadow-subMenu">
                <ul className="space-y-3 font-normal">
                    <li className="font-bold hover:bg-gray-300 py-1 px-5">
                        <a
                            href="/register"
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        >
                            Đăng ký
                        </a>
                    </li>
                    <li className="hover:bg-gray-300 py-1 px-5">
                        <a
                            href="/login"
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        >
                            Đăng nhập
                        </a>
                    </li>
                    <hr></hr>
                    <li className="hover:bg-gray-300 py-1 px-5">
                        <a href="">Cho thuê nhà</a>
                    </li>
                    <li className="hover:bg-gray-300 py-1 px-5">
                        <a href="">Tổ chức trải nghiệm</a>
                    </li>
                    <li className="hover:bg-gray-300 py-1 px-5">
                        <a href="">Trợ giúp</a>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default Menu;
