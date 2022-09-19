import './App.css';
import {Header} from '../src/shared/widgets/Header'
import {Banner} from '../src/shared/widgets/banner'
import {Goals} from '../src/shared/widgets/goals_section'
import { Products } from './modules/Products/Products';
// import {ActionAreaCard} from '../src/shared/widgets/Card'
import { Footer } from './shared/widgets/footer';
import SignIn from './pages/Login';
import { SignUp } from './pages/Register';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import ShoppingCartDemo from './pages/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<SignIn/>} />
      <Route path='/register' element = {<SignUp/>} />
      {/* <Route path = '/cart' element = {<ShoppingCartDemo/>}/> */}
      <Route path='/Home' element = {<div>
        <Header/>
       <Banner/> 
       <Goals/>
       <Products title = "In Demand Products"/>
       <Products title = "In Demand Products"/>
       <Products title = "In Demand Products"/>
       <Products title = "In Demand Products"/>
       <Footer/>
      </div>} />
      {/* <Route path='/login' element = {<SignIn/>} />
      <Route path='/register' element = {<SignUp/>} /> */}

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
