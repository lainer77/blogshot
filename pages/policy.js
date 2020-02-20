import Layout from "../components/layouts/Layout";
import ActionMyBar from "../components/component/ActionMyBar";
import PolicyArea_1 from "../components/area/PolicyArea_1";

const Contact = (
    <div
        style={{
            backgroundColor: "white",
            minHeight: "calc(100vh - 90px)"
        }}
    >
        <ActionMyBar title="개인정보처리방침" homeEnable={true} />
        <PolicyArea_1 />
    </div>
);

export default props => <Layout cookies={props.cookies} content={Contact} />;
