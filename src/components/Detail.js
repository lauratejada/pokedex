import React, { useState , useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Detail(){
    const [pokemonData, setPokemonData] = useState([]);
    const [types, setTypes] = useState([]);
    const { id } = useParams();

    const API_IMAGE_URL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    
   useEffect(() => {
        console.log(id);
        const getPokemon = async () => {
            try{
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                console.log(data);
                console.log(data.name);
                console.log(data.types);
                setPokemonData(data);
                setTypes(data.types);
                } catch (error) {
                console.error("Error:", error.message);
            }
        }
       if(id) { getPokemon(); }
    },[id]);

    return(
        <><Helmet>
            <title>{pokemonData.name}</title>
        </Helmet>
        <section className="pokemon-details">
                <div className="container pokemon-profile">
                    <div className="pokemon-image">
                        <figure>
                            <img src={API_IMAGE_URL + `${pokemonData.id}.svg`} alt="Poster" />
                        </figure>
                    </div>
                    <div className="pokemon-name">
                        <h2>{pokemonData.name}</h2>
                    </div>

                    <div className="pokemon-profile-data">
                        {types.map((type, index) => <div className="repositories" key={index}>
                            <span>{type.type.name}</span>
                        </div>
                        )}
                    </div>
                    <div className="goto-btn">
                        <Link className="button" to="/pokedex">Go Home</Link>
                    </div>

                </div>

            </section></>
    )
}

export default Detail; 