import React from "react";
import { AirbnbIcon } from "@components/icons";


export const Logo: React.FC = () => {
    return (
        <AirbnbIcon
            data-test="icon"
            className="text-white mx-auto"
            width="96"
            height="58"
        />
    );
};
