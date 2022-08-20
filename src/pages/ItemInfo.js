import { useEffect, useState } from "react";
import SingleItem from '../pages/SingleItem';


const ItemInfo = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div>
            <h1 className='text-4xl font-mono font-bold m-5 bg-black text-white p-5'>Item Information : {items.length}</h1>

            {
                items.map(item =>

                    <SingleItem
                        key={item.id}
                        item={item}>
                    </SingleItem>
                )
            }
        </div>
    );
};

export default ItemInfo;