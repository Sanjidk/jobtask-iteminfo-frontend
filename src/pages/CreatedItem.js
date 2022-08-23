import React from 'react';

const CreatedItem = () => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Item Type</th>
                            <th>Item Name</th>
                            <th>Sub-Category</th>
                            <th>Unit Name</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Green</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreatedItem;