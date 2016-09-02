var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');

var Email = function(props) {
  return (<div className='item-email'>
  <h3>Title: {props.title}</h3>
  <strong>from: {props.from}</strong>
  <h4>to: {props.to}</h4>
  <p>{props.content}</p>

  </div> );
};

module.exports = Email;
