import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-white px-5 py-3 items-center border-b'>
            <ul className='flex gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destination'}>Destinations</Link></li>
                <li><Link href={'/booking'}>My Bookings</Link></li>
            </ul>
            <div>
                <h4 className='text-2xl text-cyan-500 font-bold'>WanderLust</h4>
            </div>
            <ul className='flex gap-4'>
                <li><Link href={'/profile'} className='flex gap-1 items-center'><CgProfile /> Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;