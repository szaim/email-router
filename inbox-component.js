var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');
var Email = require('./email-component');

// var contacts = Object.keys(props.contacts).map(function(contactId, index) {
//         var contact = props.contacts[contactId];
// <Email title="" from="" to="" content=""/>

var Inbox = function(props) {
  var InboxData = props.data;
  console.log(InboxData);
  // var email = props.email.map(function(value, index) {
  //   return <Email title="" from="" to="" content=""/>
  // })
  return (<div className='inbox'>
  <h2>Inbox</h2>
  {InboxData[0].title}

  </div>)
}

module.exports = Inbox;
