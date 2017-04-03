

// var App = () => (
//   <h1>Test</h1>
// );

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'searchText11' 
    }
  }

  getUserInput(query){
    this.setState({
      searchText : query
    })
    
  }

  render(){
    return (
      <div className="container">
        <div className="row top-buffer">            
            <Search handleSearchInputChange={this.getUserInput.bind(this)}/>
            <p></p>
          </div>
          <div className="row top-buffer">
              <ExampleList highlightedText = {this.state.searchText}/>
          </div>  
      </div>      
    );
  }

}

window.App = App;

