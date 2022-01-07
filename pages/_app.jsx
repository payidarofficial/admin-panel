import Head from "next/head";
import React from "react";
import "../public/style.scss";

export default function Header({ Component, pageProps }) {
    return (<React.Fragment>
        <Head>
            <title>React Admin Panel</title>
        </Head>
        <Component {...pageProps} />
    </React.Fragment>)
};
