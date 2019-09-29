import React from 'react';
import Card from '../Card/Card';

const CardContainer = (props) => {
 console.log(props)
  return(
    <section>
        <Card 
          pokemon={props.pokemon}
          nextPokemon={props.nextPokemon}/>
    </section>
  )
}

export default CardContainer;