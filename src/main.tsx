import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TriviaPage} from "@/pages/TriviaPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/trivia-page",
        element: <TriviaPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>);
