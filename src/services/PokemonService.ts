import axios from "axios";
import Pokemon from "../pages/pokemon";

interface IEvolution {
    id: number,
    name: string,
    avatar: string,
    level: number
  }
  
  export interface IPokemon {
    id: number,
    name: string,
    avatar: string,
    description: string
    level: number,
    stats_battle: string[],
    color: string,
    uri: string,
    skills: {
      attack: number
      resistance: number
      mobility: number
      punctuation: number
      support: number
    }
    evolutions: IEvolution[]
  }

  export interface IPokemons{

    id: number;
    name: string;
    avatar: string;
    color: string;
    uri: string;
  }

class PokemonService{

    private pokemons: IPokemons[] = [];

    public async getPokemon(): Promise<IPokemons[]>{
      try {
        
        const response = await axios.get('https://6283929f92a6a5e462260498.mockapi.io/pokemons')
        this.pokemons = response.data;
        return this.pokemons;
      } catch (error) {
        return [];
      }

    }

    public searchPokemon(search: string){

        const pokemonsFiltrados = this.pokemons.filter((Pokemon) => {
          
          return Pokemon.name.toUpperCase().includes(search.toUpperCase())})

        return pokemonsFiltrados;
        
    }



    public async getPokemons(uri: string): Promise<IPokemon| undefined> {
        try {
          
          const response = await axios.get(`https://6283929f92a6a5e462260498.mockapi.io/pokemon/${uri}`)

          return response.data;

        } catch (error) {
          
          return undefined;
        }
        
      }
    
    

    }
export default  new PokemonService();

