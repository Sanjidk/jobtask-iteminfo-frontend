import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import SingleItem from '../pages/SingleItem';


const ItemInfo = () => {

    const itemNameRef = useRef("");

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    // const handleAddItem = event => {
    //     event.preventDefault();

    //     const itemType = event.target.itemType.value;
    //     const nameOfItem = event.target.itemName.value;
    //     const category = event.target.category.value;
    //     const unit = event.target.unit.value;
    //     const stocked = event.target.stock.value;

    //     console.log(stocked);
    // }


    const handleUnit = event1 => {
        const newUnit = event1.target.unit2.value;

        console.log(newUnit)

    };

    return (
        <div>
                {
                    items.map(item =>

                        <div className="grid lg:grid-cols-6 grid-cols-1 gap-2 m-4 shadow-lg p-4 font-bold">
                            <div>
                                <select className="select w-full max-w-xs text-black hover:text-white border-0 bg-slate-300 hover:bg-black">
                                    <option disabled selected> {item.type.item1} </option>
                                    <option>{item.type.item2}</option>
                                    <option>{item.type.item3}</option>
                                    <option>{item.type.item4}</option>
                                </select>
                            </div>

                            <div>
                                <input type="text" ref={itemNameRef} placeholder="Item Name" className="border-2 border-black input input-bordered w-full max-w-xs" />
                            </div>

                            <div className='flex lg:justify-around'>
                                <div>
                                    <select className="select w-full max-w-xs text-black hover:text-white bg-slate-300 hover:bg-black">
                                        <option disabled selected> {item.category.item1} </option>
                                        <option>{item.category.item2}</option>
                                        <option>{item.category.item3}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="category-1" className="btn bg-inherit hover:bg-inherit p-0 border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </label>

                                    <input type="checkbox" id="category-1" className="modal-toggle" />
                                    <div className="modal modal-middle">
                                        <div className="modal-box relative">
                                            <label for="category-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                            <h3 className="font-bold text-lg">Add New Sub-Category</h3>
                                            <input name="category" type="text" placeholder="Sub Category" className="border-2 border-black input input-bordered w-full max-w-xs" />
                                            <div className="modal-action">
                                                <button className="btn btn-primary text-white font-bold">Add Category</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex lg:justify-around'>
                                <div>
                                    <select className="select w-full max-w-xs text-black hover:text-white bg-slate-300 hover:bg-black">
                                        <option disabled selected> {item.unit.item1} </option>
                                        <option>{item.unit.item2}</option>
                                        <option>{item.unit.item3}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="unit-1" className="btn bg-inherit hover:bg-inherit p-0 border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-fuchsia-500	" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </label>

                                    <input type="checkbox" name="unit1" id="unit-1" className="modal-toggle" />
                                    <div className="modal modal-middle">
                                        <div className="modal-box relative">
                                            <label for="unit-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                            <h3 className="font-bold text-lg">Add New Unit Name</h3>
                                            <input name="unit2" type="text" placeholder="Unit Name" className="border-2 border-black input input-bordered w-full max-w-xs" />
                                            <div className="modal-action">
                                                <button onClick={handleUnit} className="btn btn-primary text-white font-bold">Add Unit</button>                                            </div>
                                        </div>
                                    </div>
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
                    )
                }

                <div className="flex justify-around bg-gray-300 p-3">
                    <div>
                        <button className="btn">
                            <Link to='/listItem'>Cancel</Link>
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
        </div>
    );
};

export default ItemInfo;