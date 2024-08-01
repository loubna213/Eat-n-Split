

const Button = ({ children, onClickElement }) => {
    return (
        <button onClick={onClickElement} className="button">{children}</button>
    )
}

export default Button