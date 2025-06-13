import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import OurSystem from './Components/OurSystem'
// import OurTeam from './Components/OurTeam'
import WhatWeDo from './Components/WhatWeDo'
import { useRef } from 'react'
import { useInView } from "framer-motion";
import ScrollSpy from 'react-scrollspy-navigation'
import Contact from './Components/Contact'
import OurTeam from './Components/OurTeam'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import Vision from './Components/Vision'
import Product from './Components/Product'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import NotFound from './Components/NotFound'
import { useLocalStorage } from '@uidotdev/usehooks'


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  

  return (
    <div ref={ref}  style={{
      transform: isInView ?"none":"translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
        {children}
    </div>
  );
}

function App() {



  const router = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'system',element:<OurSystem/>},
      {path:'whoWeAre',element:<WhatWeDo/>},
      {path:'ourTeam',element:<OurTeam/>},
      {path:'product',element:<Product/>},
      {path:'vision',element:<Vision/>},
      {path:'emailUs',element:<Contact/>},
      {path:'*',element:<NotFound/>},

      // {path:'/cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
    ]}
  ])

  return (
    <>
    
    <RouterProvider router = {router} />
   
    
    
    </>
    
  )
}

export default App
