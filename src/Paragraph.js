import React, { useEffect } from 'react';

const Paragraph = () => {
  const someVar = 1;

  useEffect(() => {
    if (someVar === 1) {
      throw new Error('SomeVar is equal to 1');
    }
  }, []);
  return <div>Paragraph</div>;
};

export default Paragraph;
