import React, { useEffect, useState } from 'react';

const Info = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className={`info ${isAnimated ? 'animated' : ''}`}>
      <p className="text">Мебель</p>
    </div>
  );
};

export default Info;