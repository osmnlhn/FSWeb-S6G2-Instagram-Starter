import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map(yorum=> <Yorum yorum={yorum} />)}

    </div>
  );
};

export default Yorumlar;
