import ReactMarkdown from "react-markdown";
import {Layout} from "antd";
import {NotesContext} from "../../../context/Context";
import {useCallback, useContext, useMemo, useState} from "react";
import {DeleteOutlined, EditOutlined, CheckOutlined} from "@ant-design/icons";
import './Title.scss'
import {substringRender} from "../../../utils/substringRender";

const Title = () => {
    const {Footer} = Layout;
    const [textStyle, setChangeStyle]= useState(false);

    const changeStyle = useCallback(() => {
        setChangeStyle((textStyle) => {
            return !textStyle;
        });
    }, [textStyle]);
    const {activeNote, showModal, onFooterChange} = useContext(NotesContext);
    const textTitleRender = useCallback(()=> {
        return substringRender(activeNote.title, 20);
    },[activeNote]);
    return useMemo(()=>
        <Footer>
            <div className='title-div'>
                <h1 className="preview-title">{textTitleRender()}</h1>
                <EditOutlined className='icon edit-icon' onClick={onFooterChange}/>
                <DeleteOutlined  className='icon delete-icon' onClick={showModal}/>
                <CheckOutlined className='icon delete-icon' onClick={changeStyle}/>
            </div>
            <ReactMarkdown className="markdown-preview">
                {activeNote.body}
            </ReactMarkdown>
        </Footer>
    ,[activeNote]);
};

export default Title;
