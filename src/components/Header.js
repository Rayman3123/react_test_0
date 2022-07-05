import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Успешный магазин</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кобинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
