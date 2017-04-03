var ExampleList = ({highlightedText}) => (
  <div className="container">    
    <div className="row"> <Example highlightedText={highlightedText}/> </div>
    <div className="row"> <Example highlightedText={highlightedText}/> </div>
    <div className="row"> <Example highlightedText={highlightedText}/> </div>    
  </div>  
);

window.ExampleList = ExampleList;