import React from "react";
import Head from "next/head";

function Seo(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Head>
    );
}

export default Seo;
