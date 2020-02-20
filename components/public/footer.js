import Link from "next/link";
import CompanyInfo from "../component/CompanyInfo";
import styled from "styled-components";

const FooterStyle = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    position: static;
    width: 100%;
    height: 100%;
`;

const footer = () => (
    <FooterStyle className="footer">
        <CompanyInfo />
    </FooterStyle>
);

export default footer;
