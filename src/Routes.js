import React from 'react';
import { Routes, Route } from 'react-router-dom';


import { Home } from './Pages/Home/index';
import { About } from './Pages/About/index';
import { NotFound } from './Pages/NotFound/index';
import { SignIn } from './Pages/SignIn/index';
import { SignUp } from './Pages/SignUp/index';
import { AdPage } from './Pages/AdPage';
import { RequireAuth } from './helpers/RequireAuth';
import { AddAd } from './Pages/AddAd/index';
import { Ads } from './Pages/Ads/index';
import { MyAccount } from './Pages/MyAccount';
import { EditUser } from './Pages/EditUser';


const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            -
            <Route path="/about" element={
                <RequireAuth>
                    <About/>
                </RequireAuth>}>
            </Route>

            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/ad/:id" element={<AdPage/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            <Route private path="/post-an-ad" element={<AddAd/>}></Route>
            <Route path="/ads" element={<Ads/>}></Route> 
            <Route path="/my-account" element={<MyAccount />}></Route>
            <Route path="/edit-user" element={<EditUser />}></Route>

           
        </Routes>
    );
}

export default Rotas;
