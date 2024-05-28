import React from 'react';

const JsxNonJsx = () => {
  const nonJsx = React.createElement('h1', {}, 'Ini component Non JSX');

  const jsx = (
    <div>
      <h1>Ini dengan Jsx</h1>
      <p>Lebih mudah dan bersoh kodenya</p>
    </div>
  );
  
  return nonJsx;
};

export default JsxNonJsx;
