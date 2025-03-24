import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { Link } from "react-router"

export default function NavMobile({navItems}) {
    
    const [isToggled, setIsToggled] = useState(false)
    
    
    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return(
        <nav className="flex flex-col items-center gap-4 mt-4">
            {isToggled ? 
            <IoClose 
                onClick={handleClick}
                size={25}
                className="hover:text-[#D90368]"
            />:
            <RxHamburgerMenu 
                onClick={handleClick} 
                size={25}
                className="hover:text-[#D90368]"
            /> }
            {isToggled && <div className="flex flex-col justify-center items-center gap-4">
                {navItems.map(item => <Link className={`hover:underline underline-offset-8 hover:text-[#D90368]`} to={`${item.path}`}>{item.name}</Link>)}
            </div>}
        </nav>
    )
}