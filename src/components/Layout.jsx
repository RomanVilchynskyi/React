import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mostpopularwork">Most popular work</Link></li>
                        <li><Link to="/works">Work collections</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {}
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
  )
}
