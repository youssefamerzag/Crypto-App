
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
          <Route path='/details/:id/:name/:priceUsd/:rank/:changePercent24Hr' element={<Details/>}>
        </Route>
        </Routes>
        <div className='text-center flex justify-center m-1'>
        <a href='https://github.com/youssefamerzag' className='mr-2'><img width="41" height="41" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png" alt="github"/></a>
        <a href='https://linkedin.com/in/youssefamerzag' className='ml-2'><img width="45" height="45" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/></a>
      </div>
    </div>
    </BrowserRouter>
  )
}
export default App; 
