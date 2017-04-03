
class Example extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            decoratedText: this.props.highlightedText
        };
    }

    
      render() {
        
        var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum ex eget porttitor sollicitudin. Morbi cursus tempor \
               placerat. Pellentesque suscipit tortor in orci pretium, ac facilisis ex pretium. Fusce hendrerit orci diam, \
                vitae tristique';
        var highlightedText = "/" +  this.props.highlightedText + "/g";          
        this.state.decoratedText = text.replace(new RegExp(this.props.highlightedText,"g"), "<span class=\"highlightme\">" + this.props.highlightedText  + "</span>");  
        
        return (
            <div className="media-body">    
                <div className="well well-sm">                
                <div dangerouslySetInnerHTML={{__html: this.state.decoratedText}} />               
                <p></p>
                </div>
            </div>
            );      
      }
}
window.Example = Example;