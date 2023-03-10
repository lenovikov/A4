import React from 'react';
import image1 from '../../assets/image1.jpg';
import BlockContainer from '../BlockContainer/BlockContainer';

const Slider = () => {
  return (
    <BlockContainer containerType={'content-wrapper'}>
      <img className="rounded-2xl" style={{ width: '1280px', height: '320px' }} src={image1} />
    </BlockContainer>
  );
};

export default Slider;
