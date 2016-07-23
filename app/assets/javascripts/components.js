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
Datetime = require('react-datetime');
moment = require('moment');
Geosuggest = require('react-geosuggest').default;
TagsInput = require('react-tagsinput');

App = require('./components/app.jsx');
Main = require('./components/main.jsx');
Footer = require('./components/_footer.jsx');
NewEvent = require('./components/_new_event.jsx');
AllEvents = require('./components/_all_events.jsx');
NavBar = require('./components/_navbar.jsx');


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