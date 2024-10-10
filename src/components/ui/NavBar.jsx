import { navLinkData } from "../../data"
import Logo from "./Logo"

const NavBar = () => {
  return (
    <>
        <nav className="w-full flex justify-center items-center fixed top-0 z-50">
            <div className="relative w-full flex justify-between items-center xl:max-w-7xl py-5">
                <Logo className={ "text-black" }></Logo>
                <ul className="flex justify-between items-center w-96">
                    {
                        navLinkData.map((item, index)=>(
                            <a href={ item.link } key={ index }>
                                <li className="font-montserrat text-text_secondary text-sm font-medium mix-blend-difference">{ item.title }</li>
                            </a>
                        ))
                    }
                </ul>

                <div className="absolute w-full h-[1px] bg-accent bottom-0 bg-blend-difference mix-blend-difference"></div>
            </div>
        </nav>
    </>
  )
}

export default NavBar