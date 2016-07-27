//= require_self
//= require react_ujs
React = require('react');
ReactDOM = require('react-dom');
// require additional React components below this line
ReactRouter = require('react-router');
Route = ReactRouter.Route;
Router = ReactRouter.Router;
DefaultRoute = ReactRouter.DefaultRoute;
RouteHandler = ReactRouter.RouteHandler;
IndexRoute = ReactRouter.IndexRoute;
Link = ReactRouter.Link;
hashHistory = ReactRouter.hashHistory;
browserHistory = ReactRouter.browserHistory;
Geosuggest = require('react-geosuggest').default;
// moment = require('moment');


// 12345678910
const app = document.getElementById('app');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AllEvents}></IndexRoute>
            <Route path="new" component={NewEvent}></Route>
        </Route>
    </Router>
);


ReactDOM.render( routes, app);