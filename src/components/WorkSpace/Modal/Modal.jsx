import {Modal, Typography} from "antd";
import {NotesContext} from "../../../context/Context";
import {useContext, useMemo} from "react";
import './Modal.scss'
const ModalWindow = () => {
    const {Text} = Typography;
    const {activeNote, isModalVisible, handleOk, showModal} = useContext(NotesContext);
    return useMemo(()=>
        <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={showModal}
        >
            <Text className='modal-title'>
                <p className='thin-text'>  Are you sure to delete </p> <p className='bold-text'>{activeNote.title}?</p>
            </Text>
        </Modal>
    , [showModal]);
};

export default ModalWindow;
