import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Category from "../component/Category";
import Detail from "../component/Detail";
import NewsFeed from "../component/NewsFeed";
import ContentDetail from "../component/ContentDetail";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: '',
        element: <Home/>
    }, {
        path: 'category',
        element: <Category/>,
        // loader: loadProduct,
        // errorElement:<Error/>,
    }, {
        path: 'detail',
        element: <Detail/>,
    }
    ]
}]);