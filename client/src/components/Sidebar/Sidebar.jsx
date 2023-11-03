import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import { logo, sun } from "../../assets";
import { navlinks } from "../../constants/navlinks";

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isActive, setIsActive] = useState(location.pathname)

    return (
        <section className="flex justify-between items-center flex-col top-5 h-[93v]">
            <Link to="/">
                <SidebarIcon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[10px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {
                        navlinks.map((link, index) => (
                            <SidebarIcon 
                                key={index}
                                {...link}
                                isActive={isActive}
                                handleClick={() => {
                                    setIsActive(link.link)
                                    navigate(link.link)
                                }}
                            />
                        ))
                    }
                </div>

                <SidebarIcon
                    styles={"bg-[#1c1c24] shadow-secondary"}
                    imgUrl={sun}
                />
            </div>
        </section>
    )
}

export default Sidebar;