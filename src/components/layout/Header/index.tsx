import React from "react";
import HeaderComponent from "./Header";
import './header.css';

interface HeaderProps {
    handleOpen: () => void;
    headerStyle: string;
}

export const Header: React.FC<HeaderProps> = ({ handleOpen, headerStyle }) => {
    return <HeaderComponent handleOpen={handleOpen} headerStyle={headerStyle ?? ""}/>
}