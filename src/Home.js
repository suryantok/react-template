import React from 'react';
import Search from './Search';
import ExampleList from './ExampleList';


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
            <div id="home" className="container" >
                <div className='row'>
                    <Search handleSearchInputChange={this.getUserInput.bind(this)}/>
                    <p></p>
                </div>
                <div className='row'>
                    <ExampleList highlightedText={ this.state.searchText}/>
                </div>

            </div>
        );
      }
};

export default Home;