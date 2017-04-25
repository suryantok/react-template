class MenuItem extends React.Component {
    constructor(props){
        super(props);
    }

    onListItemClick(menuItem, e) {         
        this.props.handleMenuItemClicked(menuItem);
    }

    render(){
        return (
            <li><a href="#" onClick={this.onListItemClick.bind(this, this, this.props.menuItem.Id)}>{this.props.menuItem.Text} </a></li>            
        );                    
    }
};

window.MenuItem = MenuItem;