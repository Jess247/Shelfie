import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'
import { useEffect, useState } from 'react'

export default function Header() {

    const navItems = ['Home', 'Search', 'Want to read', 'read', 'Login']

    const [windowSize, setWindowSize] = useState(window.innerWidth) 

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return(
        <header>
            {windowSize < 800 ? 
            <NavMobile navItems={navItems}/> :
            <NavDesktop navItems={navItems}/>}
        </header>
    )
}