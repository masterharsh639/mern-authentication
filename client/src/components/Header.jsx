import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between items-center mx-auto p-6'>
                <Link to='/'>
                    <p>Auth App</p>
                </Link>

                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/signin'>
                        <li>Sign In</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header