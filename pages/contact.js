import Layout from "../components/layouts/Layout";
import ActionMyBar from "../components/component/ActionMyBar";
import ContactArea from "../components/area/ContactArea_1";

const Contact = (
    <div
        style={{
            backgroundColor: "white",
            minHeight: "calc(100vh - 90px)"
        }}
    >
        <ActionMyBar title="문의 및 제안하기" />
        <ContactArea />
    </div>
);

export default props => <Layout cookies={props.cookies} content={Contact} />;
