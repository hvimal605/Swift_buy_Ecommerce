import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/common/Navbar'
import VerifyEmail from './pages/VerifyEmail'
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/Signin'
import SignUp from './pages/signup'
import About from './pages/About'
import Contact from './pages/Contact'

import CustomizableProduct from './pages/Product'
import ProductView from './pages/ProductView'
import { useDispatch, useSelector } from 'react-redux'
import MyProfile from './components/common/core/MyProfile'
import PrivateRoute from './components/common/core/PrivateRoute'
import Dashboard from './pages/Dashboard'
import ProductList from './pages/ProductList'



const App = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const { user } = useSelector((state) => state.profile)


  return (
    <div>

      
      <Navbar/>
     
     
     
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<CustomizableProduct/>}/>
      <Route path='/productview' element={<ProductView/>}/>
      <Route path='/verify-email' element={<VerifyEmail/>}/>
      <Route path='/Productslist/:id' element={<ProductList/>}/>


    

      



          <Route path='dashboard/my-profile' element={<PrivateRoute><MyProfile /></PrivateRoute>} />

      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
    </div>
  )
}

export default App