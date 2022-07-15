import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PokemonService, { IPokemon } from '../../services/PokemonService';

const Pokemon = () => {
    import('./styles.css');

    const { uri } = useParams();

    const setColor = (newColor: any) => {
        document.documentElement.style.setProperty('--pokemon-color', newColor);
      }
    
    const [Pokemon, setPokemons] = useState<IPokemon>();
    useEffect(() => {

        PokemonService.getPokemons(uri || "").then((data) => setPokemons(data));
    }, [])

    if(!Pokemon){
        return null;
    }   

    setColor(Pokemon.color)

    const hashMap: {[key in number]: string} = {
      1: 'Iniciante',
      2: 'Intermediário',
      3: 'Expert',
    }

    return <>

    <section className="preview__container">
    <div className="preview__pokemon">
      <img src={`/assets/images/stat/stat-${Pokemon.avatar}.png`} alt="Charizard" className="preview__image"/>
    </div>
    <div className="preview__details">
      <h1 className="pokemon__color">{Pokemon.name}</h1>
      <p className="preview__level">Nível: {hashMap[Pokemon.level]}</p>
      <p className="preview__description"> {Pokemon.description} </p>
      <div className="preview__pills">
        {Pokemon.stats_battle.map((item)=> { return (<span className="preview__pill">{item}</span>)})}
      </div>
    </div>
  </section>
  <section className="skills__container">
    <h2 className="skills__title pokemon__color">
      Skills do Pokémon
    </h2>
    <p className="skills__description">
      Esse Pokémon possui as seguintes habilidades de batalha:
    </p>
    <div className="skills__list">
      <div className="skills__item">
        <label className="skills__label pokemon__color">Ataque</label>
        <progress className="skills__progress pokemon__color" max="100" value={Pokemon.skills.attack}></progress>
      </div>
      <div className="skills__item">
        <label className="skills__label pokemon__color">Resistência</label>
        <progress className="skills__progress pokemon__color" max="100" value={Pokemon.skills.resistance}></progress>
      </div>
      <div className="skills__item">
        <label className="skills__label pokemon__color">Mobilidade</label>
        <progress className="skills__progress pokemon__color" max="100" value={Pokemon.skills.mobility}></progress>
      </div>
      <div className="skills__item">
        <label className="skills__label pokemon__color">Pontuação</label>
        <progress className="skills__progress pokemon__color" max="100" value={Pokemon.skills.punctuation}></progress>
      </div>
      <div className="skills__item">
        <label className="skills__label pokemon__color">Apoio</label>
        <progress className="skills__progress pokemon__color" max="100" value={Pokemon.skills.support}></progress>
      </div>
    </div>
  </section>
  {
    !!Pokemon.evolutions.length &&
  <section className="evolutions__container">
    <h2 className="pokemon__color">Evoluções</h2>
    <p className="evolutions__description">Esse Pokémon pode evoluir em:</p>
    <div className="evolutions__list">
    { 
        Pokemon.evolutions.map((evolution) => { 
            
            return (<div className="evolutions__item">
                 <img src={`/assets/images/evolution/${evolution.avatar}`} alt="Charmander" className="evolutions__image"/>
                    <div className="evolutions__details">
                        <p className="evolutions__name pokemon__color">{evolution.name}</p>
                        <p className="evolutions__level">Nível {evolution.level}</p>
                    </div>
                </div>);
        
        
    })
    }
  

    </div>
  </section>
}
  </>;
}




export default Pokemon