
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Main from './components/Layout/Main'
import Nothing from './components/Nothing/Nothing'
import Shop from './components/Shop/Shop'

function App() {
   
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>
        },
        {
          path:'*',
          element:<Nothing></Nothing>
        }
      ]
    }
  ])

  return (
    <>
      {/* <Header></Header>
      <Shop></Shop>
      <h1>Hello World From My Another react project</h1> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
