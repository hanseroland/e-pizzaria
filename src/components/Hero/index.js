import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP, 
  HeroBtn
} from './HeroElements';

const Hero = () => {
 

  return (
    <HeroContainer>
      <HeroContent> 
        <HeroItems>
          <HeroH1>La meilleure pizza de tous les temps</HeroH1>
          <HeroP>Prête en 60 secondes</HeroP>
          <HeroBtn>Passer la commande</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
