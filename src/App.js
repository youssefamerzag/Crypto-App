
import './App.css'
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Details from "./Details";
import Coins from "./Coins";
const App = () => {

 
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins/>}/>
          <Route path='/details/:id/:name/:priceUsd/:rank' element={<Details/>}/>
        </Routes>
    </BrowserRouter>

  )
}
export default App; 