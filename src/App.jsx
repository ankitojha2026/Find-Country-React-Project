
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Country from './pages/Country';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import CountryInd from './components/Layout/CountryInd';



// here i'm using react-router-dom 
// and createBrowserRouter to create a router
const rounter = createBrowserRouter([

    {
        // here i'm creating a route for the app
        // and i'm using the path parameter to create a route
        // and i'm using the element parameter to create a route
        // and i'm using the errorElement parameter to create a route
        // and i'm using the children parameter to create a route
        // and i'm using the path parameter to create a route
        // and i'm using the element parameter to create a route
        // and i'm using the errorElement parameter to create a route
        // and i'm using the children parameter to create a route
        // and i'm using the path parameter to create a route
        path: '/',
        element: <AppLayout />,
        errorElement:<ErrorPage/>,
        children: [ {path: '/', element: <Home />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />},
        {path: 'country', element: <Country />},
        {path: 'country/:id', element: <CountryInd/>},
    ]

    }




  ]);


function App() {
    // here i'm using the RouterProvider to create a router
    // and i'm using the router parameter to create a router
    

return <RouterProvider router={rounter} >
    <h1>heelo</h1>

</RouterProvider>

}

export default App;
