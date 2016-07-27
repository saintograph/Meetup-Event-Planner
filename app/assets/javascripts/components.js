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
//  App = require("./components/app.js.jsx");
// Footer = require('./components/_footer.js.jsx');
// NewEvent = require('./components/_new_event.js.jsx');
// AllEvents = require('./components/_all_events.js.jsx');
// NavBar = require('./components/_navbar.js.jsx');
Geosuggest = require('react-geosuggest').default;
// moment = require('moment');


// 12345678910
const app = document.getElementById('app');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={"./components/app.js.jsx"}>
            <IndexRoute component={'./components/_all_events.js.jsx'}></IndexRoute>
            <Route path="new" component={'./components/_new_event.js.jsx'}></Route>
        </Route>
    </Router>
);


ReactDOM.render( routes, app);