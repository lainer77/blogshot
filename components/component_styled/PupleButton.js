import styled from "styled-components";
import { Button as B } from "@material-ui/core";
import { pTr } from "../../styles/typography";

const Button = styled(B)`
    && {
        background-color: rgb(20 82 123);
        color: white;
        margin: 0 ${pTr(10)};
        border-radius: 6px;
    }
`;

export default function PupleButton(props) {
    const { children, ...other } = props;
    return <Button {...other}>{children}</Button>;
}
