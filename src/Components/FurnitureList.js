import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FurnitureList() {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        axios.get('/api/furniture')
            .then(response => {
                setFurniture(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    if (furniture.length === 0) {
        return <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '40px' }}>Loading...</p>;
    }
    return (
        <div>
            <h1>Furniture Catalog</h1>
            <ul>
                {furniture.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FurnitureList;