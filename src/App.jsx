import Workspace from "./components/WorkSpace/Workspace";
import Sidebar from "./components/SideBar/Sidebar";
import "antd/dist/antd.css";
import {Layout} from "antd";
import {NotesProvider} from "./context/Context";
import './App.scss'
import { version } from 'react';

const App = () => {

    console.log(version);
    return (
        <NotesProvider>
            <Layout className='app-notes'>
                <Sidebar/>
                <Workspace/>
            </Layout>
        </NotesProvider>
    );
};

export default App;
