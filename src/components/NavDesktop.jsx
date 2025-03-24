import { useState } from "react"
import { Link } from "react-router"

export default function NavDesktop({navItems}) {
    
    const [isToggled, setIsToggled] = useState(false)
    
    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return(
        <nav className="flex gap-4 mt-4 justify-between w-[90%] mx-auto">
            <span>Logo</span>
            <div className="flex justify-center items-center gap-4 ">
                {navItems.map(item => <Link className={`hover:underline underline-offset-8 hover:text-[#D90368]`} to={item.path}>{item.name}</Link>)}
            </div>
        </nav>
    )
}