import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function withLayout(WrappedComponent, header = false, footer = false) {
    const Layout = (props) => {

        return (
            <>
                {header && <Header {...props} />}
                <WrappedComponent {...props} />
                {footer && <Footer {...props} />}
            </>
        );
    };
    return Layout;
};
