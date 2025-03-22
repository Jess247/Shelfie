import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { Link } from "react-router"

export default function NavMobile() {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(!isToggled)
    }
    return(
        <nav>
            {isToggled ? 
            <IoClose 
                onClick={handleClick}
                size={25}
            />:
            <RxHamburgerMenu 
                onClick={handleClick} 
                size={25}
            /> }
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/tbr">Want to read</Link>
            <Link to="/read">Read</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}