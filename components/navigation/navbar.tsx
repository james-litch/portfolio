import React from 'react'
import Link from 'next/link'
import style from './navbar.module.css'

const NavBar = () => (
    <header className={style.header}>
        <nav className={style.navItems}>
            <Link href="/about"><a>About</a></Link>
            <Link href="/resume"><a>Resume</a></Link>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    </header>
)

export default NavBar
