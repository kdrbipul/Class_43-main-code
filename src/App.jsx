
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/Router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   
  

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
