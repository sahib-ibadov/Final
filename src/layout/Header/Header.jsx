import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="TARİFLER">TARİFLER</Link>
                </li>
                <li>
                    <Link to="KALKULYATOR">KALKULYATOR</Link>
                </li>
                <li>
                    <Link to="MAGAZALAR">MAGAZALAR</Link>
                </li>
                <li>
                    <Link to="XƏBƏRLƏR">XƏBƏRLƏR</Link>
                </li>
                <li>
                    <Link to="ƏLAQƏ">ƏLAQƏ</Link>
                </li>
                <li>
                    <Link to="KARGOMAT">KARGOMAT</Link>
                </li>
                <li>
                    <Link to="Baglamamharadaır">Baglamam haradadır?</Link>
                </li>
            </ul>

        </div>
    )
}

export default Header
