import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza du jour</h1>
      <p>Truffle alfredo sauce topped.</p>
      <FeatureButton>Commander maintenant</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
