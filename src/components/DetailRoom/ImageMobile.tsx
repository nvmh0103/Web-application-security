import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";
import { Image } from "@nextui-org/react";

export const Payment: React.FC = () => {
    return (
        <div className="pt-6">
            <Image
                showSkeleton
                maxDelay={5000}
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-23863755/original/2ce81508-1182-4fdf-87b9-382867a48815.jpeg?im_w=720"
                alt=""
                objectFit="cover"
                className="rounded-none"
            />
        </div>
    );
};

export default Payment;
