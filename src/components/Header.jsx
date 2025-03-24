import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'
import { useEffect, useState } from 'react'

export default function Header() {

    const navItems = [
        {  
            name:'Home',
            path:'/'
        },
        {  
            name:'Search',
            path:'/search'
        },
        {  
            name:'Want to Read',
            path:'/tbr'
        },
        {  
            name:'Read',
            path:'/read'
        },
        {  
            name:'Login',
            path:'/login'
        },
    ]

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
        <header className='pb-4'>
            {windowSize < 800 ? 
            <NavMobile navItems={navItems}/> :
            <NavDesktop navItems={navItems}/>}
        </header>
    )
}