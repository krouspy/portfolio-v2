import React from 'react';

export const LineSpacer: React.FC<{ lines?: number }> = ({ lines }) => {
  return (
    <>
      {[...Array(lines)].map((_, index) => (
        <br key={index} />
      ))}
    </>
  );
};

LineSpacer.defaultProps = {
  lines: 2,
};

export default LineSpacer;
