import React from "react";

export const SvgMenuIcon = ({
    width = "16px",
    height = "16px",
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            stroke="currentColor"
            strokeWidth="3"
            // style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
        >
            <g fill="none" fillRule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
            </g>
        </svg>
    );
};

export default SvgMenuIcon;
