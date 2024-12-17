import {NotesContext} from "../../../context/Context";
import {useContext, useMemo} from "react";
import {Input} from "antd";
import './SearchBar.scss'
const SearchBar = () => {
    const {text, setText} = useContext(NotesContext);
    return useMemo(()=>
        <Input className="search-bar-input"
               value={text}
               onInput={(e) => setText(e.target.value)}
               type="text"
               placeholder="Search notes"
        />
    ,[text]);
};
export default SearchBar;
