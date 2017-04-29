
var { Router, Route, IndexRoute, IndexLink, hashHistory, Link } = ReactRouter;

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="other" component={Other} />
  </Route>
</Router>, document.getElementById('mainapp') );

