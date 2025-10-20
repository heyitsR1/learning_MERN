import store from './store'
import {Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App></App>}>
      <Route index = {true} path = "/" element = {<HomeScreen></HomeScreen>}/> 
      <Route  path = "/login" element = {<LoginScreen/>}/> 
      <Route  path = "/register" element = {<RegisterScreen/>}/> 
      <Route  path = "" element = {<PrivateRoute/>}> 
      {/* Private Routes */}
        <Route  path = "/profile" element = {<ProfileScreen/>}/> 
      </Route>    
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Provider store= {store}> 
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
  </Provider>
)
