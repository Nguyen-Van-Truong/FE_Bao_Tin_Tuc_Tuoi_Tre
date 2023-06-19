import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Category from "../component/Category";
import Detail from "../component/Detail";
import NewsFeed from "../component/NewsFeed";
import ContentDetail from "../component/ContentDetail";
import ViewedArticles from "../component/ViewedArticles";
import FavoriteArticles from "../component/FavoriteArticles";

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
    }, {
        path: 'viewed-articles',
        element: <ViewedArticles/>,
    }, {
        path: 'favorite-articles',
        element: <FavoriteArticles/>,
    }
    ]
}]);