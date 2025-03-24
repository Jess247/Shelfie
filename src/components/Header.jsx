import NavMobile from './NavMobile'

export default function Header() {
const navItems = ['Home', 'Search', 'Want to read', 'read', 'Login']

    return(
        <header>
            <NavMobile navItems={navItems}/>
        </header>
    )
}