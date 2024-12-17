import {Button, Layout} from "antd";
import {NotesContext} from "../../context/Context";
import ModalWindow from "./Modal/Modal";
import InputArea from "./InputArea/InputArea";
import Title from "./Title/Title";
import {useContext, useMemo} from "react";
import './WorkSpace.scss'
import {PlusCircleOutlined} from "@ant-design/icons";
const Workspace = () => {
    const {Content} = Layout;
    const {activeNote, onAddNote} = useContext(NotesContext);
    return useMemo(()=>
        !activeNote ? (
            <>
            <Content className="no-active-note">No Active Note</Content>
            <PlusCircleOutlined className='sidebar-btn' onClick={onAddNote} />
            </>
        ) : (
            <Content className='active-note'>
                <ModalWindow/>
                <Title/>
                <InputArea/>
                <PlusCircleOutlined className='sidebar-btn' onClick={onAddNote} />
            </Content>
        )
    ,[activeNote])
};

export default Workspace;
