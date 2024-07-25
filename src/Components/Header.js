import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
const Header = () => {
	return (
		<header className='headers'>
			<nav className='nav'>
				<Link to='/' className='nav-link'>
					Главная
				</Link>
				<Link to='/FurnitureList' className='nav-link'>
					Товары
				</Link>
				<Link to='/Contact' className='nav-link'>
					Контакты
				</Link>
        <Cart />
			</nav>
		</header>
	)
}

export default Header
