import React from "react";
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
    return (
        <ul>
            <ItemList producto='Hoodie' precio='40.000' />
            <ItemList producto='Pantalon' precio='20.000' />
            <ItemList producto='Remera' precio='15.000' />
        </ul>
    )
}

export default ItemListContainer