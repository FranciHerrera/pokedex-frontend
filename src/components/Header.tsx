export type HeaderProps = {
    title : string;
}

function Header({title}: HeaderProps) {
//props.title
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;