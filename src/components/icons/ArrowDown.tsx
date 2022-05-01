import * as React from "react";

const SvgArrowDownIcon = ({
    color = "currentColor",
    width = "12px",
    height = "12px",
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            // style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"
        >
            <g fill="none">
                <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
            </g>
        </svg>
    );
};

export default SvgArrowDownIcon;
