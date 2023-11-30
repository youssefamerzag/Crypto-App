
import './App.css'
import { BrowserRouter , Link , Route , Routes } from "react-router-dom";
import Details from "./Details";
import Coins from "./Coins";
const App = () => {

  return(
    <BrowserRouter>
    <div>
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<Coins/>}></Route>
          <Route path='/details/:id/:name/:priceUsd/:rank' element={<Details/>}>
        </Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App; 