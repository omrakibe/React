function Inputs({type, name, id, htmlFor, value, onChange, label, placeHolder }) {
    return(
        <>
        <label htmlFor={htmlFor}>{label} - </label>
        <input type={type} name={name} id={id} value={value} onChange={onChange} placeholder={placeHolder}/>
        </>
    )
}

export default Inputs;