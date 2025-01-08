import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protofolio from './Components/Protofolio/Protofolio';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound'

let x = createBrowserRouter([
  {path : "" , element : <Layout/>, children:[
    {index: true, element: <Home/>},
    {path : "about", element : <About/>},
    {path : "protofolio", element : <Protofolio/>},
    {path : "contact", element : <Contact/>},
    {path : "*", element : <Notfound/>}
  ]}
]);




function App() {

  return <RouterProvider router={x} ></RouterProvider>
}

export default App
