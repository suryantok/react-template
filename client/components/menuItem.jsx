class MenuItem extends React.Component {
    constructor(props){
        super(props);
    }

    onListItemClick(menuItem, e) {         
        this.props.handleMenuItemClicked(menuItem);
    }

    render(){
        return (
            <li value={this.props.menuItem} onClick={this.onListItemClick.bind(this, this.props.menuItem.Id)}>{this.props.menuItem.Text}</li>
        );                    
    }
};

window.MenuItem = MenuItem;