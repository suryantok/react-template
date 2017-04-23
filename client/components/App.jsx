

// var App = () => (
//   <h1>Test</h1>
// );

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'searchText11',
      activeMenu : 'menuItem'
    }
  }

  getUserInput(query){
    this.setState({
      searchText : query      
    })
    
  }

  getActiveMenu(menuItem){
        this.setState({
            activeMenu : menuItem
        })          
    }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-2  col1">
            <span>active menu : {this.state.activeMenu}</span>
            <Menu menuItems={[{Id: 1, Text : 'Learn React' }, {Id: 2, Text : 'Crush Recast.ly' }, {Id: 3, Text : 'Maybe sleep' }, ]}
              activeMenu={this.getActiveMenu.bind(this)} />
          </div>
          <div className="container col-xs-12 col-sm-10 col2">
            <div className="row col-xs-12">
              <Search handleSearchInputChange={this.getUserInput.bind(this)}/>
              <p></p>
            </div>
            <div className="row col-xs-12">
              <ExampleList highlightedText={ this.state.searchText}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

window.App = App;

