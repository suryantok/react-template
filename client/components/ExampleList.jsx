var ExampleList = ({highlightedText}) => (
  <div className="container">    
    <div className="row col-xs-9 col3" > <Example highlightedText={highlightedText}/> </div>
    <div className="row col-xs-9 col3"> <Example highlightedText={highlightedText}/> </div>
    <div className="row col-xs-9 col3"> <Example highlightedText={highlightedText}/> </div>    
  </div>  
);

window.ExampleList = ExampleList;