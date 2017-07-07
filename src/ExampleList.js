import React from 'react'
import Example from './Example';;
var ExampleList = ({highlightedText}) => (
  <div className="container">
    <div className="row col-xs-9" > <Example highlightedText={highlightedText}/> </div>
    <div className="row col-xs-9"> <Example highlightedText={highlightedText}/> </div>
    <div className="row col-xs-9"> <Example highlightedText={highlightedText}/> </div>
  </div>
);

export default ExampleList;