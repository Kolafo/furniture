import React, { useEffect, useState } from 'react';
import axios from 'axios';
import furnitureData from './furniture.json';

function FurnitureList() {
    const [furniture, setFurniture] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Загрузка данных из JSON-файла
        setFurniture(furnitureData);
        setLoading(false);

        // Если вы хотите загружать данные с сервера, раскомментируйте следующий блок и замените setFurniture(furnitureData) на запрос axios
        /*
        axios.get('/api/furniture')
            .then(response => {
                setFurniture(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setLoading(false);
            });
        */
    }, []);

    if (loading) {
        return <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '40px' }}>Loading...</p>;
    }

    console.log(furniture);

    return (
        <div>
            <h1 style = {{textAlign: 'center', fontWeight: 'bold', fontSize: '40px'}}>Каталог мебели</h1>
            <ul  className = 'furnitureList'>
                {furniture.map(item => (
                    <li key={item.id} className = 'furnitureCards'>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <img src={item.imageUrl} alt={item.name} className = 'furnitureImages' />
                    </li>
                    
                ))}
                
            </ul>
        </div>
    );
}

export default FurnitureList;