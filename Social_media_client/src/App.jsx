import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home/Home"
import Messenger from "./pages/Messenger/Messenger"


function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<MainLayout></MainLayout>}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/message" element={<Messenger></Messenger>}></Route>
          </Route>
      </Routes>
    </>
    
  )
}

export default App
