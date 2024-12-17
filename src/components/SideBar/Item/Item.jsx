import {Typography, Layout} from "antd";

import {NotesContext} from "../../../context/Context";
import {useCallback, useContext} from "react";
import './Item.scss'
import {substringRender} from "../../../utils/substringRender";

const Item = ({note}) => {
    const {Content} = Layout;
    const {Text} = Typography;
    const {activeNote, setActiveNote} = useContext(NotesContext);

    const textBodyRender = useCallback(()=> {
        return substringRender(note.body, 25);
    },[note]);

    const textTitleRender = useCallback(()=> {
        return substringRender(note.title, 20);
    },[note]);

    const getLocalDate=useCallback((note)=>{
        return new Date(note.lastModified).toLocaleDateString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }, [note]);
    return (
        <Content
            className={`sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}>
            <Content className='item-content'>
                <Text className='title-text'>
                    {textTitleRender()}
                </Text>
                <Text className='body-text'>
                    {textBodyRender()}
                </Text>
            </Content>
            <Content className='item-content'>
                <span className='date-text'> Last Modified:</span>
                <span className='date-text'> {getLocalDate(note)}</span>
            </Content>
        </Content>
    );
};

export default Item;
