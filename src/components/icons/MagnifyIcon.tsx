import React from "react";

export const SvgMagnifyIcon = ({
    width = "12px",
    height = "12px",
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            // style="display:block;fill:none;height:12px;width:12px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            stroke="currentColor"
            strokeWidth="3"
        >
            <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
            </g>
        </svg>
    );
};

export default SvgMagnifyIcon;
