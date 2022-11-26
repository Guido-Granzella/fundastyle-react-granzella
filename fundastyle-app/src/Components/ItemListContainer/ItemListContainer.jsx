import React from 'react'
import GroupExample from '../Cards/Cards'
import Crea from '../Crea/Crea'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div id='elegi' className='contenedor'>
            <h3>{greeting}</h3>
            <GroupExample/>
            <h3 id='crea'>Creá</h3>
            <Crea/>
        </div>
    )
}

export default ItemListContainer
