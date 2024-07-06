import React from "react";

function ItemList(props) {
    return (
        <li >
            <p>{props.producto}</p>
            <p>{props.precio}</p>
        </li >
    )
}

export default ItemList