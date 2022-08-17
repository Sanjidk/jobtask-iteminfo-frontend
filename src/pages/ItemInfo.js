import React from 'react';

const ItemInfo = () => {
    return (
        <div>
            <h1 className='text-4xl font-mono font-bold m-5 bg-black text-white p-5'>Item Information</h1>

            <div className="grid grid-cols-6 gap-2 shadow-lg p-2 font-bold">
                <div className="dropdown">
                    <label  tabIndex="0" className="btn m-1 text-black hover:text-white border-0 bg-slate-300">Item Type
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                            <path  strokeLinecap="round"  strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>

                    </label>
                    <ul  tabIndex="0" className="dropdown-content menu p-2 shadow bg-slate-600 text-white rounded-box w-52">
                        <li><a>Item 1</a></li>
                    </ul>

                </div>

                <div className='p-1'>
                    <input type="text" placeholder="Item Name" className="border-2 border-black input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex'>
                    <div className="dropdown">
                        <label  tabIndex="0" className="btn m-1 text-black hover:text-white border-0 bg-slate-300">Sub-Category
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                                <path  strokeLinecap="round"  strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </label>
                        <ul  tabIndex="0" className="dropdown-content menu p-2 shadow bg-slate-600 text-white rounded-box w-52">
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                                <path  strokeLinecap="round"  strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                </div>
                <div className='flex'>
                    <div className="dropdown">
                        <label  tabIndex="0" className="btn m-1 text-black hover:text-white border-0 bg-slate-300">Unit Name
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                                <path  strokeLinecap="round"  strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </label>
                        <ul  tabIndex="0" className="dropdown-content menu p-2 shadow bg-slate-600 text-white rounded-box w-52">
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                                <path  strokeLinecap="round"  strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                </div>


                <div className='p-1'>
                    <input type="number" placeholder="Stock Limit" className="border-2 border-black input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex justify-around'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor"  strokeWidth="2">
                            <path  strokeLinecap="round"  strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>




                </div>

            </div>

        </div>
    );
};

export default ItemInfo;