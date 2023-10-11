import { Link } from "react-router-dom";
import { menu, payment, profile, search } from "../../assets";
import { useState } from "react";
import CustomButton from "../buttons/CustomButton";

const Navbar = () => {
    const [toggleDrawer, setToggleDrawer] = useState(false)

    return (
        <div
            className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6"
        >
            <div
                className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-2 pr-4 h-[52px] bg-[#1c1c24] rounded-[100px]"
            >
                <input
                    type="text"
                    placeholder="جستجو..."
                    className="flex pr-3 w-full font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
                />
                <div
                    className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer"
                >
                    <img
                        src={search}
                        alt="search"
                        className="w-[15px] h-[15px] object-contain"
                    />
                </div>
            </div>

            <div
                className="sm:flex hidden flex-row justify-end gap-4"
            >
                <Link to={"/profile"}>
                    <div className="w-[60px] h-[60px] flex justify-center items-center cursor-pointer">
                        <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain" />
                    </div>
                </Link>
            </div>
            <div className="sm:hidden flex justify-between items-center relative">
                <Link to={"/profile"} className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                    <img src={profile} alt="user" className="w-[60%] h-[60%] object-contain" />
                </Link>
                <img
                    src={menu}
                    alt="menu"
                    className="w-[34px] h-[34px] object-contain cursor-pointer"
                    onClick={() => setToggleDrawer(!toggleDrawer)}
                />

                <div
                    className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 rounded-[10px] shadow-secondary py-4 ${toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transation-all duration-500`}
                >
                    <ul className="mb-4">
                        {/* items */}
                        {/* <li
                        key={index}
                        className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'} rounded-[10px] mx-2`}
                        onClick={() => {
                            setIsActive(link.name)
                            setToggleDrawer(!toggleDrawer)
                            navigate(link.link)
                        }}
                    >
                        <img
                            src={link.imgUrl}
                            alt={link.name}
                            className={`w-[24px] h-[24px] object-contain ${isActive == link.name ? "grayscale-0" : "grayscale"}`}
                        />
                        <p className={`mr-[15px] font-semibold text-[14px] ${isActive == link.name ? "text-[#1dc071]" : "text-[#808191]"}`}>
                            {link.name}
                        </p>
                    </li> */}
                        <li
                            key={1}
                            className={`flex p-4 'bg-[#3a3a43]' rounded-[10px] mx-2`}
                            onClick={() => {
                                alert('hello')
                            }}
                        >
                            <img
                                src={payment}
                                alt={'test'}
                                className={`w-[24px] h-[24px] object-contain grayscale-0`}
                            />
                            <p className={`mr-[15px] font-semibold text-[14px] text-[#1dc071]`}>
                                {'پرداخت'}
                            </p>
                        </li>
                    </ul>
                    <div className="flex mx-4">
                        <CustomButton
                            btnType="button"
                            title={"اتصال کیف پول"}
                            styles={"bg-[#8c6dfd]"}
                            handleClick={() => {
                                alert('سلام')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;