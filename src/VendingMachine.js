import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Chips from './Chips'
import Starburst from './Starburst'
import Mentos from './Mentos'
import Navbar from "./NavBar"

const VendingMachine = () => {

    return (
        <div className="VendingMachine">
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/chips" element={<Chips/>}/>
                <Route path="/mentos" element={<Mentos/>}/>
                <Route path="/starburst" element={<Starburst/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )


}

export default VendingMachine;