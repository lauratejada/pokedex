import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <section className='not-found'>  
            <div className='center'>
                <h2>404 - Not Found!</h2>
                <Link className='button btn-go-home' to="/pokedex">Go Home</Link>
            </div>
        </section>
    )
}

export default NotFound;