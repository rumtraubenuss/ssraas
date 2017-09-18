import React from 'react';

const Component = ({ foo = 'bar'}) => (
  <div>
    {foo}
  </div>
);

export default Component;
