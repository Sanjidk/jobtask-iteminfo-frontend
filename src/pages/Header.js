import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-around bg-black rounded my-3">
                <div className="">
                    <a className="btn btn-ghost lg:text-4xl font-mono font-bold text-lime-400"> ITEM INFORMATION </a>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal p-0 font-bold text-white">
                        <li><a>Add Item</a></li>
                        <li><a>List Item</a></li>
                    </ul>
                </div>
            </div>










        </div>
    );
};

export default Header;