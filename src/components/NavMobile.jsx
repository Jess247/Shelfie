import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { Link } from "react-router"

export default function NavMobile() {
    const [isToggled, setIsToggled] = useState(false)

    const hoverStyle = 'bg-[#A50062]'
    const handleClick = () => {
        setIsToggled(!isToggled)
    }
    return(
        <nav className="flex flex-col items-center gap-4 mt-4">
            {isToggled ? 
            <IoClose 
                onClick={handleClick}
                size={25}
            />:
            <RxHamburgerMenu 
                onClick={handleClick} 
                size={25}
            /> }
            {isToggled && <div className="flex flex-col justify-center items-center gap-4">
                <Link className={`hover:underline underline-offset-8 hover:text-[#a50062]`} to="/">Home</Link>
                <Link className={`hover:underline underline-offset-8 hover:text-[#a50062]`} to="/search">Search</Link>
                <Link className={`hover:underline underline-offset-8 hover:text-[#a50062]`} to="/tbr">Want to read</Link>
                <Link className={`hover:underline underline-offset-8 hover:text-[#a50062]`} to="/read">Read</Link>
                <Link className={`hover:underline underline-offset-8 hover:text-[#a50062]`} to="/login">Login</Link>
            </div>}
        </nav>
    )
}