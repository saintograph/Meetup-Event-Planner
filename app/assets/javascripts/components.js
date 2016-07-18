//= require_self
//= require react_ujs

React = require('react');
// require additional React components below this line
ReactDOM = require('react-dom');
Router = require('react-router');
Link = Router.Link;
DefaultRoute = Router.DefaultRoute;
Route = Router.Route;
RouteHandler = Router.RouteHandler;
IndexRoute = Router.IndexRoute;



App = require('./components/app.jsx');
Main = require('./components/main.jsx');
NavBar = require('./components/_navbar.jsx');
Footer = require('./components/_footer.jsx');

//= require routes

Router.run(routes, Router.HistoryLocation, function (RouteHandler) {
    React.render(<RouteHandler/>, document.getElementById("app"));
});