import React from 'react';
import BlockContainer from '../../components/BlockContainer/BlockContainer';
import Slider from '../../components/Slider/Slider';

const Dashboard = () => {
  return (
    <>
      <div className="py-20">
        <Slider />
      </div>
      <div>Категория</div>
      <div>Новинки</div>
    </>
  );
};

export default Dashboard;
