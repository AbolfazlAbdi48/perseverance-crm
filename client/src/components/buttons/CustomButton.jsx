const CustomButton = ({ title, styles, btnType, handleClick }) => {
    return (
        <button
            type={btnType}
            className={`font-semibold text-[16px] leading-[26px] text-white min-h-[52px] rounded-[10px] px-4 ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton;