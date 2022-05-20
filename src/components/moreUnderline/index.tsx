import { ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

interface Props {
    title: string;
}

export const MoreUnderline: React.FC<Props> = ({ title = "Hiển thị thêm" }) => {
    return (
        
        <div className="text-black underline mt-2 flex items-center cursor-pointer">
                {title}
                <ChevronRightIcon className="ml-1 mt-1 w-5 h-5" />
        </div>
        
    );
};

