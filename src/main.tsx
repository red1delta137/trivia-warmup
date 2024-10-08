import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QuestionPage} from "@/pages/QuestionPage";
import {MantineProvider} from "@mantine/core";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/question',
        element: <QuestionPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<MantineProvider><RouterProvider router={router}/></MantineProvider>);
