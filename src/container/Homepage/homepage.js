import React from 'react';
import ChildCarousel from '../../components/carousel/childcarousel/childcarousel';
import MainCarousel from '../../components/carousel/maincarousel/maincarousel';

function HomePage(props) {
  // console.log(props.token);
  return (
    <div style={{ backgroundColor: 'white' }}>
      <MainCarousel />
      <ChildCarousel token={props.token} user={props.user} />
    </div>

  );
}

export default HomePage;