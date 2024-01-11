import './header.css';

interface HeaderProps{
    title?: string;
}

export function Header({title = "Curso React + Typescript"}: HeaderProps){
    return(
        <header className="header">
            <h1>{title}</h1>
        </header>
    )
}