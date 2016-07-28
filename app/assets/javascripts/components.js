//= require_self
React = require('react');
ReactDOM = require('react-dom');
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


const appDom = document.getElementById('appDom');


ReactDOM.render(     
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AllEvents}></IndexRoute>
            <Route path="new" component={NewEvent}></Route>
        </Route>
    </Router>, appDom);