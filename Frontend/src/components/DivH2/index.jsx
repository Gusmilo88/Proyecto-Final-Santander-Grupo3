import "./style.css"
import React from 'react';

const DivH2 = ({ title }) => {
  return (
    <div role="divH2" id="container_h2" className="bg-neutral-300 text-center text-neutral-700 dark:bg-zinc-900">
      <h2 id="h2_events">{title}</h2>
    </div>
  );
};

export default DivH2;




