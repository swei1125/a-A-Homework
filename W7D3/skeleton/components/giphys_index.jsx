import React from 'react';

import GiphysIndexItem from './giphys_index_item';


const GiphysIndex = ({giphys}) => (
  <ul>
    {giphys.map((g, i) => <GiphysIndexItem giphy={g} key={i} />)}
  </ul>
);

export default GiphysIndex;
