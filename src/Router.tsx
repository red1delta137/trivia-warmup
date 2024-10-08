import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import {QuestionPage} from "@/pages/QuestionPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/question',
    element: <QuestionPage/>
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
