import { NavLink} from 'react-router-dom';

function Header({title='Title'}){
    return(
        <header>
            <div className="container flex">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <nav>
                    <ul>
                        <li>{/*<Link to="/pokedex"> Home</Link>*/}
                            <NavLink 
                                className={navData => (navData.isActive ? "active" : "")}
                                to="/pokedex"> 
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={navData => (navData.isActive ? "active" : "")}
                                to="https://pokeapi.co/docs/v2"> 
                                Documentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({isActive}) => (isActive ? "active" : "")}
                                to="https://pokeapi.co/about">
                                About Us 
                            </NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;