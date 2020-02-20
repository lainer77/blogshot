import Layout from "../components/layouts/Layout";
import ActionMyBar from "../components/component/ActionMyBar";
import TermsArea_1 from "../components/area/TermsArea_1";

const Contact = (
    <div
        style={{
            backgroundColor: "white",
            minHeight: "calc(100vh - 90px)"
        }}
    >
        <ActionMyBar title="이용약관" homeEnable={true} />
        <TermsArea_1 />
    </div>
);

export default props => <Layout cookies={props.cookies} content={Contact} />;
