const Button = ({ label, clickEvent}) => {
    return (
        <span className="button" onClick={clickEvent}>{label}</span>
    );
}

export default Button;