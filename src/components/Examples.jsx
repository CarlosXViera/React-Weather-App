import React from 'react';
import {Link} from 'react-router';

var Examples = () => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some examples that you can try</p>
      <ol>
        <li><Link to="/?Philadelphia">Philadelphia, PA</Link></li>
        <li><Link to="/?Bronx">Bronx, NY</Link></li>
      </ol>

    </div>

  );
};

module.exports = Examples;
