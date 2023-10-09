const SidebarIcon = ({
    styles, imgUrl, name, isActive, disabled, handleClick
}) => {
    return (
        <div
            className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg[#2c2f32'} flex justify-center items-center cursor-pointer ${styles}`}
            onClick={handleClick}
        >
            <img 
                src={imgUrl}
                alt="icon"
                className="w-1/2 h-1/2"
            />
        </div>
    )
}

export default SidebarIcon;