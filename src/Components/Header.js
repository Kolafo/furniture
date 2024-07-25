import React from 'react'
import { Link } from 'react-router-dom'

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
			</nav>
		</header>
	)
}

export default Header
