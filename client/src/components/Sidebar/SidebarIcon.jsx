const SidebarIcon = ({
    styles, imgUrl, link, isActive, disabled, handleClick
}) => {
    return (
        <div
            className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === link && 'bg-[#2c2f32]'} flex justify-center items-center cursor-pointer ${styles}`}
            onClick={handleClick}
        >
            {
                !isActive ? (
                    <img
                        src={imgUrl}
                        alt="icon"
                        className="w-1/2 h-1/2"
                    />
                ) : (
                    <img
                        src={imgUrl}
                        alt="icon"
                        className={`w-1/2 h-1/2 ${isActive !== link && 'grayscale'}`}
                    />
                )
            }
        </div>
    )
}

export default SidebarIcon;