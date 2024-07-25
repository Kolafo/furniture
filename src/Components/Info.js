import React, { useEffect, useState } from 'react'

const Info = () => {
	const [isAnimated, setIsAnimated] = useState(false)

	useEffect(() => {
		setIsAnimated(true)
	}, [])

	return (
		<div className={`info ${isAnimated ? 'animated' : ''}`}>
  <div class="header">
    <h1>FurShop: Стиль и Комфорт для Вашего Дома</h1>
</div>

<div class="section">
    <p>Добро пожаловать в FurShop — место, где ваш дом обретает индивидуальность и уют. Мы предлагаем широкий выбор мебели высокого качества, от классики до современных дизайнов.</p>
    
    <h2>Наши Преимущества:</h2>
    <ul>
        <li>Широкий Ассортимент</li>
        <li>Качество Без Компромиссов</li>
        <li>Индивидуальный Подход</li>
        <li>Удобство Покупок</li>
    </ul>
    
    <h2>Наша Миссия:</h2>
    <p>Создать атмосферу гармонии и стиля в каждом доме через нашу мебель.</p>
    
    <h2>Почему Выбирают Нас:</h2>
    <ul>
        <li>Эксклюзивные Дизайны</li>
        <li>Доступные Цены</li>
        <li>Гарантия Удовлетворения</li>
    </ul>
    <p>FurShop — ваш источник вдохновения и комфорта. Приходите и откройте мир стиля вместе с нами.</p>
</div>
		</div>
	)
}

export default Info
