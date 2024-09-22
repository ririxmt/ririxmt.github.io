// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Product from './components/product.jsx';
import Feature from './components/feature.jsx';
import Cyber from './components/cyber.jsx';
import Login from './components/login.jsx';
import Sign from './components/signup.jsx';
import Job from './components/jobconnect.jsx';
import Center from './components/centered.jsx';
import Course from './components/course.jsx';
import Forgot from './components/forgotpassowrd.jsx';
import Sertif from './components/sertifikasi.jsx';
import Info from './components/infopenerimaan.jsx';
import Kerja from './components/kerja.jsx';
import Cloud from './components/cloud.jsx';
import Profile from './components/profile.jsx';
import Setting from './components/Setting.jsx';
import Merch from './components/merch.jsx';
import Shop1 from './components/shop1.jsx';
import Modal from './components/modal.jsx';
import Payment from './components/payment.jsx';
import Global from './components/global.jsx';
import XP from './components/xp.jsx';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/about"></Link></li>
                    <li><Link to="/contact"></Link></li>
                    <li><Link to="/product"></Link></li>
                    <li><Link to="/cyber"></Link></li>
                    <li><Link to="/login"></Link></li>
                    <li><Link to="/signup"></Link></li>
                    <li><Link to="/jobconncet"></Link></li>
                    <li><Link to="/aboutpijar"></Link></li>
                    <li><Link to="/course"></Link></li>
                    <li><Link to="/forgotpassword"></Link></li>
                    <li><Link to="/coursesertif"></Link></li>
                    <li><Link to="/infopenerimaan"></Link></li>
                    <li><Link to="/job"></Link></li>
                    <li><Link to="/coursecloud"></Link></li>
                    <li><Link to="/profile"></Link></li>
                    <li><Link to="/setting"></Link></li>
                    <li><Link to="/merchandise"></Link></li>
                    <li><Link to="/shop1"></Link></li>
                    <li><Link to="/bayar"></Link></li>
                    <li><Link to="/payment"></Link></li>
                    <li><Link to="/global"></Link></li>
                    <li><Link to="/xp"></Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/feature" element={<Feature />} />
                <Route path="/cyber" element={<Cyber />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
                <Route path="/jobconnect" element={<Job />} />
                <Route path="/aboutpijar" element={<Center />} />
                <Route path="/course" element={<Course />} />
                <Route path="/forgotpassword" element={<Forgot />} />
                <Route path="/coursesertif" element={<Sertif />} />
                <Route path="/infopenerimaan" element={<Info />} />
                <Route path="/job" element={<Kerja />} />
                <Route path="/coursecloud" element={<Cloud />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/merchandise" element={<Merch />} />
                <Route path="/shop1" element={<Shop1 />} />
                <Route path="/bayar" element={<Modal />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/global" element={<Global />} />
                <Route path="/xp" element={<XP />} />
            </Routes>
        </Router>
    );
}

export default App;
