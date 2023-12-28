import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing Bootstrap and other style sheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/styles/index.css';


// importing pages needed for navigation
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Routing of navigation
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />,
            }
        ],
    },
]);

//Render the page.
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
