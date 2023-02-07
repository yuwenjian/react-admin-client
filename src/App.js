/**
 * 应用的根组件
 * 
 */
import React, { Component } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

export default class App extends Component{


   render(){

    return(
        <BrowserRouter>
            <Routes>   {/* V6 版本 Routes 替换了 V5 的 Switch  只匹配其中一个 */}
                <Route element={<Login/>} path='/login' ></Route>
                <Route element={<Admin/>} path='/'></Route>
            </Routes>
        </BrowserRouter>
    )      
   } 

}   