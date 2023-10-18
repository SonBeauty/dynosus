import React from "react";
import Style from "./Button.module.css";

interface ButtonProps {
    content: string;
    color?: string;
    border?: string;
    borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
    content,
    color,
    border,
    borderRadius,
}) => {
    return (
        <button
            className={`${Style.btnBlackBorder} ${color}`}
            style={{ border, borderRadius }}>
            {content}
        </button>
    );
};

export default Button;
