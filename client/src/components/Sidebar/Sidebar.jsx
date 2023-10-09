import { Link } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import { logo, sun } from "../../assets";

const Sidebar = () => {
    return (
        <section className="flex justify-between items-center flex-col top-5 h-[93v]">
            <Link to="/">
                <SidebarIcon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[10px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    <SidebarIcon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={sun} />
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