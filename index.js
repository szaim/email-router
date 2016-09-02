var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');
var Email = require('./email-component');
var Inbox = require('./inbox-component');

var Wrapper = function(props) {
  // console.log(props.data.inbox);
  return (<div className='wrapper'>
    <Inbox data={props.data.inbox}/>
  </div>)
}



// var router = require('react-router');
// var Router = router.Router;
// var Route = router.Route;
// var hashHistory = router.hashHistory;
//
// var routes = (
//     <Router history={hashHistory}>
//         <Route path="/contacts" component={ContactListContainer} />
//     </Router>
// );
//
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(routes, document.getElementById('app'));
// });
/*
  -sidebar: include buttons for inbox and for spam
  -component for inbox and component for spam
  -component for email
  -board component to wrap everything
 */

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Wrapper data={emailData}/>, document.getElementById('app'));
});
