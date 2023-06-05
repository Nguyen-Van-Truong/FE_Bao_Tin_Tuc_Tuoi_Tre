import './App.css';
import {Outlet} from "react-router-dom";
import getNewsCategories from "./component/rssCategories";

function App() {
    getNewsCategories();
    return (
        <div className="App">
            <Outlet></Outlet>
        </div>
    );
}

export default App;
