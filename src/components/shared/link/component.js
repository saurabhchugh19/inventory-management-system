import React from "react";
// import styles from "./link.css";

const Link = ({
    onClick,
    text,
    href = "#",
    preventDefault = true,
    item
}) => 
    <a
        href={href}
        onClick={(e) => {preventDefault && e.preventDefault(); onClick(e, item); }}
    >
        {text}
    </a>;

export default Link;