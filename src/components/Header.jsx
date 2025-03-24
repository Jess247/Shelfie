import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

export default function Header() {
const navItems = ['Home', 'Search', 'Want to read', 'read', 'Login']

    return(
        <header>
            {/* <NavMobile navItems={navItems}/> */}
            <NavDesktop navItems={navItems}/>
        </header>
    )
}