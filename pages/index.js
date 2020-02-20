import React from "react";
import HomeLayout from "../components/layouts/Layout";
import HomePage from "./home";
import { useRouter } from "next/router";
// import cookies from "next-cookies";

const IndexPage = props => {
    const router = useRouter();
    return (
        <div>
            <HomePage {...props} />
        </div>
    );
};

const Page = props => {
    return (
        <HomeLayout
            cookies={props.cookies}
            content={<IndexPage {...props}></IndexPage>}
        />
    );
};
export default Page;
