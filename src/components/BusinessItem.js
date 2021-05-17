import React, { createElement } from 'react';

export function BusinessItem({ hit, components }) {
  return (
     
          <div className="aa-ItemContent">
          <p>{hit.firstname}</p>
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="name" />
        </div>
      </div>
    
  );
}
