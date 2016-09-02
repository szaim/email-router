var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');
var Email = require('./email-component');
var Spam = require('./spam-component');
var Inbox = require('./inbox-component');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
//for nested Routes : Spam and Inbox
var IndexRoute = router.IndexRoute;

var InboxWrapper = function(props) {
  console.log(props.data);
  return (<div className='wrapper'>
    <Inbox data={emailData.inbox}/>
  </div>)
}
var SpamWrapper = function(props) {
  console.log(props.data);
  return (<div className='wrapper'>
    <Spam data={emailData.spam}/>
  </div>)
}

var App = function(props) {
    return (
        <div>
            <h1>
                HOTMAIL
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<Route path="inbox" component={InboxWrapper} />
        	<Route path="spam" component={SpamWrapper} />
         </Route>
    </Router>
);

/*
  -sidebar: include buttons for inbox and for spam
  -component for inbox and component for spam
  -component for email
  -board component to wrap everything
 */

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});
