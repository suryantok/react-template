class Menu extends React.Component {
    constructor(props){
        super(props);        
    }

    getSelectedMenuItem(menuItem){
        this.props.activeMenu(menuItem);        
    }

    render(){
        return(
            <div className="container">
                <h1>Menu1</h1>
                <ul>
                    {this.props.menuItems.map(item => <MenuItem menuItem={item} key={item.Id} handleMenuItemClicked={this.getSelectedMenuItem.bind(this)} /> )} 
                </ul>
            </div>
        );
                            
    }
};

window.Menu = Menu;