import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-around bg-black rounded my-3">
                <div className="">
                    <h1 className='lg:text-4xl font-mono font-bold text-lime-400'> ITEM INFORMATION </h1>
                </div>
                <div className="font-bold text-white gap-8">
                        <Link to='/' >Add Item</Link>
                        <Link to='/listItem' >List Item</Link>
                </div>
            </div>










        </div>
    );
};

export default Header;