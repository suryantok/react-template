
class App extends React.Component {
  
  constructor(props) {
    super(props);    
  }

  render(){    
    
    return (
    <div>
      <div className="col-xs-12 col-sm-3 col-md-2" >
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/other" activeClassName="active">Other</Link>
          </li>
        </ul>
      </div>
      
      <div className="content col-xs-12 col-sm-8 col-md-6">
        {this.props.children}
      </div>
    </div>
    
    );
  }

}

window.App = App;

