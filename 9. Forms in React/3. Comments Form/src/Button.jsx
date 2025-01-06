function Button({buttonName, clickMethod}) {
    return(
        <>
        <button onClick={clickMethod}>{buttonName}</button>
        </>
    )
}
export default Button;