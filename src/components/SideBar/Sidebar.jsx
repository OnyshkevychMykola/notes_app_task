import {Layout} from "antd";
import Item from "./Item/Item";
import {NotesContext} from "../../context/Context";
import SearchBar from "./SearchBar/SearchBar";
import {useContext, useMemo} from "react";
import './SideBar.scss'

const {Sider, Content} = Layout;
const Sidebar = () => {
    const {filteredPosts} = useContext(NotesContext);
    return useMemo(()=>
        <Sider className='sidebar'>
                <SearchBar/>
            <Content className='sidebar-items' key={filteredPosts.index}>
                {filteredPosts.sort((onePost, anotherPost) => anotherPost.lastModified - onePost.lastModified).map((note) => (<Item note={note}/>))}
            </Content>
        </Sider>
    ,[filteredPosts]);
};
export default Sidebar;
