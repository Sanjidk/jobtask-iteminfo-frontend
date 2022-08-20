import React from 'react';

const singleItem = ({ item }) => {

    const { type, category, unit } = item;


    return (
        <div>
            <div className="grid grid-cols-6 gap-2 shadow-lg p-2 font-bold">
                <div>
                    <select className="select w-full max-w-xs text-black hover:text-white border-0 bg-slate-300 hover:bg-black">
                        <option disabled selected> {type.item1} </option>
                        <option>{type.item2}</option>
                        <option>{type.item3}</option>
                        <option>{type.item4}</option>
                    </select>
                </div>

                <div>
                    <input type="text" placeholder="Item Name" className="border-2 border-black input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex justify-around'>
                    <div>
                        <select className="select w-full max-w-xs text-black hover:text-white bg-slate-300 hover:bg-black">
                            <option disabled selected> {category.item1} </option>
                            <option>{category.item2}</option>
                            <option>{category.item3}</option>
                        </select>
                    </div>
                    <div>
                        <button className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div>
                        <select className="select w-full max-w-xs text-black hover:text-white bg-slate-300 hover:bg-black">
                            <option disabled selected> {unit.item1} </option>
                            <option>{unit.item2}</option>
                            <option>{unit.item3}</option>
                        </select>
                    </div>
                    <div>
                        <button className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div>
                    <input type="number" placeholder="Stock Limit" className="border-2 border-black input input-bordered w-full max-w-xs" />
                </div>

                <div className='flex justify-around'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default singleItem;