import { useState, useEffect } from "react";
import axios from 'axios';
import Banner from "./Banner";
//import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Catalog() {

    const [pokemonList, setPokemonList] = useState([]);
   // const [sortType, setSortType] = useState('name');
    const [text, setText] = useState('By Id');
    const [sortedRows, setSortedRows] = useState([]);

    const API_IMAGE_URL ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';//${data.id}.svg';
/*
    const updateMovie = (event) => {
        event.preventDefault();

        const input = event.target.pokemon.value;
        if(input.trim().length > 1) {
            setPokemon(input.trim());
            event.target.pokemon.value = '';      
        }  
        event.target.pokemon.value();
    };
*/

    const toggleButton = () => {
        if (text === 'By Id') { 
            setText('By Name');
        }
        else {
            setText('By Id');
        }
    };

    useEffect(() => {
        const getData = async () => {
            try{
                //const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
                //console.log(data);
                console.log(data.results);
              //  console.log(data.results[0].url);
                /// before set the values sort by id or name
               setPokemonList(data.results);

                
             } catch (error) {
                console.error("Error:", error);
            }
        }
       // if (pokemon) { 
            getData(); 
        //}
    }, []);// [pokemon]);


    useEffect(() => {
      //const _sortedRows = pokemonList.sort((a, b) => b.name - a.name); // as sort mutates the array, thats why created new array through spread operator
      //setSortedRows(_sortedRows);
      //setPokemonList(sortedRows);
      //console.log(_sortedRows);
        if(text === 'By Name'){
        //setPokemonList(data.results);
          const sorted = pokemonList.sort((a, b) => b.name.toLowerCase() - a.name.toLowerCase());
          console.log(sorted);
          setPokemonList(sorted);
        } else {
           const sorted = pokemonList.sort((a, b) => b.id - a.id);
            setPokemonList(sorted);
        }
       // console.log(sorted);
        //setPokemonList(sorted);
    }, [text]);

    return(
        <>
        <Banner />
        <section className="catalog">
            <div className='container'>
                <div className="buttons">
                    <button name="btnToggle" className="btn-sort toggle-button" onClick={toggleButton} >{text}</button>
                    <Link className='button btn-add' to="/pokedex/new">Add pokemon</Link>
                </div>
                <div className="pokemon-list grid">
                    { pokemonList.map((pokemon, index) => 
                    <Link  className="pokemon-container" to={`/pokedex/detail/${pokemon.url.split('/')[6]}`} key={pokemon.url.split('/')[6]}>
                        <div >
                            <figure>
                                <img src={API_IMAGE_URL + `${pokemon.url.split('/')[6]}.svg`} alt="Poster" />
                            </figure>
                            <h4>{pokemon.name}</h4>
                        </div>
                    </Link>
                    )}
                </div>
            </div>
        </section>
        </>
    )
}

export default Catalog;