import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Logo } from "@components";
import { Button } from "@components/button";
import { AirbnbIcon, GlobeIcon, MenuIcon, UserIcon } from "@components/icons";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Menu } from "@components/menu/Menu";
import { MenuUser } from "@components/menu/MenuUser";
import MenuMobile from "@components/menu/MenuMobile";
import MenuMobileUser from "@components/menu/MenuMobileUser";
import { getCookie } from "cookies-next";
import Search from "@components/search";
import { Modal, useModal, Text } from "@nextui-org/react";
import { LanguageModal } from "@components/modal/language";
import { CurrencyModal } from "@components/modal/currency";

export const LoginHeader: React.FC = () => {
    const [state, setState] = useState("");
    const [stateMenu, setStateMenu] = useState(false);
    const [stateSearch, setStateSearch] = useState(false);
    const [language, setLanguage] = useState(true);
    const [currency, setCurrency] = useState(false);
    const [isSelect, setIsSelect] = useState("Language");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const value = getCookie("isLoggedIn");

    const { setVisible, bindings } = useModal();

    return (
        <div className="sticky top-0 z-10">
            <div className=" grid grid-cols-2 bg-white shadow-md py-3 md:px-20 px-10 border-b border-gray-300">
                <div className=" flex items-center h-10  my-auto ">
                    <a className="cursor-pointer" href="/">
                        <AirbnbIcon />
                    </a>
                </div>

                <div className="flex items-center space-x-4 justify-end ">
                    <div className="flex items-center space-x-4 justify-end ">
                        <div className="relative flex items-center">
                            <a
                                className="p-3 rounded-22 hover:bg-gray-100 hidden md:inline"
                                href="https://www.airbnb.com.vn/host/homes"
                            >
                                Trở thành chủ nhà
                            </a>
                            <a
                                className="hover:bg-gray-100 rounded-22 p-3 m-2"
                                onClick={() => {
                                    setVisible(true);
                                }}
                            >
                                <GlobeIcon />
                            </a>

                            <div className="block">
                                <Button
                                    variant="flat"
                                    className="border-gray-500 border hover:shadow-cart p-2 flex items-center space-x-3 rounded-full transition duration-150 hover:opacity-100 "
                                    onClick={() => {
                                        stateMenu
                                            ? setStateMenu(false)
                                            : setStateMenu(true);
                                    }}
                                >
                                    <MenuIcon className="h-6" />

                                    {!value && <UserIcon className="h-6" />}

                                    {value && (
                                        <img
                                            src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
                                            className="rounded-full w-[28px] h-[28px] block mx-auto"
                                        ></img>
                                    )}
                                </Button>
                                <div className=" hidden md:block">
                                    {!value && stateMenu && <Menu />}

                                    {value && stateMenu && <MenuUser />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" md:hidden">
                {!value && stateMenu && <MenuMobile />}

                {value && stateMenu && <MenuMobileUser />}
            </div>

            <Modal
                scroll
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                width="800px"
                className=""
                {...bindings}
            >
                <Modal.Header className="block">
                    <div className="flex text-left items-start border-b border-gray-300">
                        {isSelect === "Language" ? (
                            <h2
                                className="text-black text-base px-4 py-4 hover:bg-gray-300 border-b border-black"
                                onClick={() => {
                                    setLanguage(true);
                                    setCurrency(false);
                                    setIsSelect("Language");
                                }}
                            >
                                Ngôn ngữ và khu vực
                            </h2>
                        ) : (
                            <h2
                                className=" text-base px-4 py-4 hover:bg-gray-300"
                                onClick={() => {
                                    setLanguage(true);
                                    setCurrency(false);
                                    setIsSelect("Language");
                                }}
                            >
                                Ngôn ngữ và khu vực
                            </h2>
                        )}

                        {isSelect === "Currency" ? (
                            <h2
                                className="text-black text-base px-4 py-4 hover:bg-gray-300 border-b border-black"
                                onClick={() => {
                                    setLanguage(false);
                                    setCurrency(true);
                                    setIsSelect("Currency");
                                }}
                            >
                                Tiền tệ
                            </h2>
                        ) : (
                            <h2
                                className=" text-base px-4 py-4 hover:bg-gray-300"
                                onClick={() => {
                                    setLanguage(false);
                                    setCurrency(true);
                                    setIsSelect("Currency");
                                }}
                            >
                                Tiền tệ
                            </h2>
                        )}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {language ? <LanguageModal /> : <CurrencyModal />}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LoginHeader;
