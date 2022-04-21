import React, { useRef, RefObject } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMouseWheel } from "react-use";
import clickOutside from "@utils/clickOutside";
import { useForm } from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import {
    AppleIcon,
    ColorFacebookIcon,
    GoogleIcon,
    InstagramIcon,
    MailIcon,
} from "@components/icons";
import classNames from "classnames";

type User = {
    username: string;
    password: string;
};

export const Modal: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
    });

    // const {closeModal} = useUI();

 

    const ref = useRef(null);
    const handleClickOutside = () => {
        // Your custom logic here
        console.log("clicked outside");
    };

    const handleClickInside = () => {
        // Your custom logic here
        console.log("clicked inside");
    };

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="center inline-block bg-white relative rounded-22 ">
            <div className="modalContainer  text-black "  onClick={handleClickInside}>
                {/* Title */}
                <div className="items-center  sticky top-0 border-b border-gray-500 bg-white py-[25px] rounded-t-22">
                    <button
                        ref={ref}
                        className="absolute hover:bg-gray-200 rounded-full ml-6"
                       
                    >
                        X
                    </button>
                    <div className=" text-center">
                        <h1>Đăng nhập hoặc đăng ký</h1>
                    </div>
                </div>

                <div className="overflow-y-auto">
                    {/* Body */}
                    <div className="p-6 ">
                        <h2 className="text-[22px] leading-6">
                            Chào mừng bạn đến với Airbnb
                        </h2>

                        <form className="form py-5" onSubmit={onSubmit}>
                            <div className="flex flex-col justify-between ">
                                <div className="rounded-lg">
                                    <input
                                        {...register("username", {
                                            required: true,
                                        })}
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Tài khoản"
                                        className=" text-base w-full  border border-gray-500 border-b-0 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.username && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            Tài khoản không được để trống
                                        </div>
                                    )}
                                </div>

                                <div className="rounded-lg">
                                    <input
                                        {...register("password", {
                                            required: true,
                                        })}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        className="text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black"
                                    ></input>
                                    {errors.password && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            Bạn chưa nhập mật khẩu
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="bg-gradient-to-r from-[#e61e4d] to-[#d70466] w-full rounded-xl py-3 mt-5 text-white active:bg-pink-500 hover:shadow-xl active:scale-90 transition duration-150"
                                    onClick={onSubmit}
                                >
                                    Tiếp tục
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center">
                        <hr className="text-gray-500 h-[1px] bg-gray-500 mr-3 w-full flex-1  "></hr>
                        <div className="font-normal text-sm">hoặc</div>
                        <hr className="text-gray-500  h-[1px] bg-gray-500 ml-3 w-full flex-1  "></hr>
                    </div>

                    {/* Footer */}
                    <div className="flex-col flex justify-between p-6">
                        <button
                            type="button"
                            className=" w-full rounded-xl py-3 px-5 border text-black flex font-medium hover:bg-gray-200 items-center hover:shadow-xl active:scale-90 transition duration-150"
                            onClick={() => {}}
                        >
                            <ColorFacebookIcon />
                            <div className="flex-1">Tiếp tục với Facebook</div>
                        </button>
                        <button
                            type="button"
                            className=" w-full rounded-xl py-3 px-5 mt-5 border text-black flex font-medium hover:bg-gray-200 items-center hover:shadow-xl active:scale-90 transition duration-150"
                            onClick={() => {}}
                        >
                            <GoogleIcon />
                            <div className="flex-1">Tiếp tục với Google</div>
                        </button>
                        <button
                            type="button"
                            className=" w-full rounded-xl py-3 px-5 mt-5 border text-black flex items-center font-medium hover:bg-gray-200 hover:shadow-xl active:scale-90 transition duration-150"
                            onClick={() => {}}
                        >
                            <AppleIcon />
                            <div className="flex-1">Tiếp tục với Apple</div>
                        </button>
                        <button
                            type="button"
                            className=" w-full rounded-xl py-3 px-5 mt-5 border items-center text-black flex font-medium hover:bg-gray-200 hover:shadow-xl active:scale-90 transition duration-150"
                            onClick={() => {}}
                        >
                            <MailIcon />
                            <div className="flex-1">Tiếp tục với Email</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
