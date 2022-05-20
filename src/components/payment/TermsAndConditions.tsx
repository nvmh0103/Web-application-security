import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";

export const Payment: React.FC = () => {
    return (
        <div className="text-xs py-6 font-normal ">
            <span>Bằng việc chọn nút bên dưới, tôi đồng ý với </span>
            <span className="text-black underline font-semibold">
                <a>Nội quy nhà của chủ nhà, </a>
            </span>
            <span className="text-black underline font-semibold">
                <a href="https://www.airbnb.com.vn/help/article/2839/what-are-the-health-and-safety-guidelines-for-hosts-and-guests-on-airbnb">
                    Các yêu cầu về an toàn trong đại dịch COVID-19 của Airbnb{" "}
                </a>
            </span>
            <span> và </span>
            <span className="text-black underline font-semibold">
                <a href="https://www.airbnb.com.vn/terms/guest_refund_policy">
                    Chính sách hoàn tiền cho khách
                </a>
            </span>
        </div>
    );
};

export default Payment;
