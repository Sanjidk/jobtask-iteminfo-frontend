import React from 'react';

const ItemInfo = () => {
    return (
        <div>
            <h1 className='text-4xl font-mono font-bold m-5'>Item Information</h1>

            <div class="grid grid-cols-6 gap-4 shadow-lg p-3 font-bold">
                <div className='bg-slate-200 p-2'>
                    <h1> Item Type</h1>
                </div>
                <div className='border-2 border-black p-2'>
                    <h1> Item Name</h1>
                </div>
                <div className='bg-slate-200 p-2'>
                    <h1>Sub-Category Name</h1>
                </div>
                <div className='bg-slate-200 p-2'>
                    <h1>Unit Name</h1>
                </div>
                <div className='border-2 border-black p-2'>
                    <h1> Stock Limit</h1>
                </div>
                <div>
                    <h1> Delete</h1>
                </div>

            </div>

        </div>
    );
};

export default ItemInfo;