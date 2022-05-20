import React, { useRef, RefObject } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMouseWheel } from "react-use";
import { useForm } from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import { Menu } from "@components/menu/Menu";
import {API_ENDPOINTS} from "@utils/apiEndpoints";
import http from "@utils/http"
import axios from "axios"
import {toast} from "react-toastify"
import {
    AppleIcon,
    ColorFacebookIcon,
    GoogleIcon,
    InstagramIcon,
    MailIcon,
    UserIcon,
} from "@components/icons";
// import classNames from "classnames";

import { watch } from "fs";
import { Loading } from "@nextui-org/react";

type User = {
    username: string;
    password: string;
    confirmPassword?: string;
    name: string;
    email: String;
    phoneNumber: number;
};

export const Register: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<User>();

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = handleSubmit( async (user) => {
        setIsLoading(true);
        delete user.confirmPassword;
        const response = await axios.post(`https://cc62e73f33af4d5eb355d601efc35466-3afda50d-vm-80.vlab2.uit.edu.vn/api/v1${API_ENDPOINTS.REGISTER}`, user)
        .then(res => {
            toast.info("Đăng ký thành công!", {
                position: "top-right",
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                });
            setIsLoading(false);
        })
        .catch(err => {
            if (err.response.status === 403) { 
                toast.error("Truy cập bị chặn!", {
                  position: "top-right",
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  autoClose: 3000,
                  });
                 setIsLoading(false); 
            }

            if (err.response.status === 500) { 
                toast.error("Đã có lỗi xảy ra, vui lòng liên hệ bộ phận CSKH để được hỗ trợ", {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    autoClose: 3000,

                  });
                    setIsLoading(false);
            }
        });
        
    });

    const newPassword = useRef({});
    newPassword.current = watch("password", "");

    // const ref = useRef(null);
    // const handleClickOutside = () => {

    //     console.log("clicked outside");
    // };

    // const handleClickInside = () => {
    //     // Your custom logic here
    //     console.log("clicked inside");
    // };

    // useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="center block bg-white relative border border-gray-400 rounded-xl w-full lg:w-2/5 mx-auto lg:mt-14 lg:mb-10 ">
            <div className=" text-black ">
                {/* Title */}

                <div className="items-center  lg:relative sticky top-0 border-b border-gray-500 bg-white py-[25px] rounded-t-22">
                    {/* <button
                        ref={ref}
                        className="absolute hover:bg-gray-200 rounded-full ml-6"
                        onClick={() => {}}
                    >
                        X
                    </button> */}
                    <div className=" text-center text-xl">
                        <h1>Đăng ký</h1>
                    </div>
                </div>

                <div className="">
                    {/* Body */}
                    <div className="p-6 ">
                        <h2 className="text-[22px] leading-6">
                            Chào mừng bạn đến với Airbnb
                        </h2>

                        <form className="form py-5" onSubmit={onSubmit}>
                            <div className="flex flex-col justify-between ">
                                {/* <div className="rounded-lg">
                                    <input
                                        {...register("username", {
                                            required:
                                                "Tài khoản không được để trống",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Tên tài khoản phải có ít nhất 6 ký tự",
                                            },

                                            pattern: {
                                                value: /^[a-zA-Z0-9]+$/,
                                                message:
                                                    "Tên tài khoản không được chứa ký tự đặc biệt",
                                            },
                                        })}
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Tài khoản"
                                        className=" text-base w-full  border border-gray-500 border-b-0 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.username && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.username.message}
                                        </div>
                                    )}
                                </div> */}

                                <div className="rounded-lg">
                                    <input
                                        {...register("email", {
                                            required:
                                                "Email không được để trống",
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message:
                                                    "Email không đúng định dạng",
                                            },
                                        })}
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        className=" text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.email && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.email.message}
                                        </div>
                                    )}
                                </div>

                                <div className="rounded-lg">
                                    <input
                                        {...register("password", {
                                            required: "Bạn chưa nhập mật khẩu",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Mật khẩu phải có ít nhất 8 ký tự",
                                            },

                                            pattern: {
                                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i,
                                                message:
                                                    "Mật khẩu phải có ít nhất 1 kí tự in hoa, 1 kí tự thường, 1 kí tự số và 1 kí tự đặc biệt",
                                            },
                                        })}
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Mật khẩu"
                                        required
                                        className="text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black"
                                    ></input>
                                    {errors.password && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>

                                <div className="rounded-lg">
                                    <input
                                        {...register("confirmPassword", {
                                            required:
                                                "Bạn chưa nhập mật khẩu xác nhận",
                                            validate: (value) =>
                                                value === newPassword.current ||
                                                "Mật khẩu xác nhận phải giống mật khẩu đặt trước đó",
                                        })}
                                        required
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        className=" text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.confirmPassword && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.confirmPassword.message}
                                        </div>
                                    )}
                                </div>

                                <div className="rounded-lg">
                                    <input
                                        {...register("name", {
                                            required: "Bạn chưa nhập tên",

                                            pattern: {
                                                value: /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i,
                                                message:
                                                    "Tên không được chứa ký tự đặc biệt và số",
                                            },
                                        })}
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Họ tên"
                                        className=" text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.name && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.name.message}
                                        </div>
                                    )}
                                </div>

                                <div className="rounded-lg">
                                    <input
                                        {...register("phoneNumber", {
                                            required:
                                                "Số điện thoại không được để trống",

                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message:
                                                    "Số điện thoại không đúng định dạng",
                                            },

                                            maxLength: {
                                                value: 10,
                                                message:
                                                    "Số điện thoại phải có 10 số",
                                            },

                                            minLength: {
                                                value: 10,
                                                message:
                                                    "Số điện thoại phải có 10 số",
                                            },
                                        })}
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        className=" text-base w-full  border border-gray-500 md:text-left text-center p-4 active:outline-black "
                                    ></input>
                                    {errors.phoneNumber && (
                                        <div className="text-red-500 font-medium text-xs my-2">
                                            {errors.phoneNumber.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#e61e4d] to-[#d70466] w-full rounded-xl py-3 mt-5 text-white active:bg-pink-500 hover:shadow-xl active:scale-90 transition duration-150"
                                    onClick={onSubmit}
                                >
                                    {isLoading ? (
                                        <Loading type="default" color="white" />
                                    ) : (
                                        "Tiếp tục"
                                    )}
                                </button>
                            </div>

                            <div>
                                <a href="/login">
                                    <button
                                        type="button"
                                        className="bg-white w-full rounded-xl py-3 mt-5 text-black active:bg-gray-300 hover:shadow-xl border active:scale-90 transition duration-150 font-medium"
                                    >
                                        Đăng nhập
                                    </button>
                                </a>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
