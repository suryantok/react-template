class Home extends React.Component {
    constructor(props){
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
    
    render() {
        
        
        return (
            <div id="home">
                <Search handleSearchInputChange={this.getUserInput.bind(this)}/>
                <p></p>                       
                <ExampleList highlightedText={ this.state.searchText}/>            
            </div>
        );      
      }
};

window.Home = Home;