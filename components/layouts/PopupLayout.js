import React from "react";
import Modal from "@material-ui/core/Modal";

const PopupLayout = props => {
    const {
        content,
        open,
        handleClose,
        visibility,
        otherAreaClose,
        disableScrollLock,
        ...other
    } = props;
    const Content = content;

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open ? open : false}
                onClose={otherAreaClose ? handleClose : null}
                style={{
                    visibility: visibility || "visible"
                }}
                // disableScrollLock={disableScrollLock}
            >
                <div>
                    <Content open={open} onClose={handleClose} {...other} />
                </div>
            </Modal>
        </div>
    );
};

export default PopupLayout;
