import React, { useRef, useState } from "react";
import { Login } from "@components/login";
import { useOnClickOutside } from "usehooks-ts";
import { VerifyIcon } from "@components/icons";
import { CheckIcon, StarIcon } from "@heroicons/react/solid";

import RepoDesktop from "@components/DetailRoom/RepoDesktop";
import RepoMobile from "@components/DetailRoom/RepoMobile";

export const Payment: React.FC = () => {


 
    

    return (
        <div className="">

            
            <div className="hidden lg:block">
                <RepoDesktop />
            </div>

            <div className="block lg:hidden">
                <RepoMobile />
            </div>
        </div>
    );
};

export default Payment;
