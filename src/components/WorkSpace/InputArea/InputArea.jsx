import {Layout, Input} from "antd";
import {NotesContext} from "../../../context/Context";
import {useContext, useMemo} from "react";
import "antd/dist/antd.css";
import './InputArea.scss'
const InputArea = () => {
    const {Footer} = Layout;
    const {activeNote, onUpdateNote, isFooterVisible} = useContext(NotesContext);
    return useMemo(()=>
        <Footer className='ia-footer'
            style={{visibility: isFooterVisible ? "visible" : "hidden"}}>
            <Input
                className='workspace-input'
                type="text"
                placeholder="Note Title"
                value={activeNote.title}
                onChange={(e) =>
                    onUpdateNote({
                        ...activeNote,
                        ["title"]: e.target.value,
                        lastModified: Date.now(),
                    })
                }
            />
            <textarea
                className='workspace-textarea'
                placeholder="Write your note here..."
                value={activeNote.body}
                onChange={(e) =>
                    onUpdateNote({
                        ...activeNote,
                        ["body"]: e.target.value,
                        lastModified: Date.now(),
                    })
                }
            />
        </Footer>
    , [activeNote,isFooterVisible]);
};
export default InputArea;
