var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');
var Email = require('./email-component');


var Inbox = function(props) {
  var InboxData = Object.keys(props.data);
  console.log(InboxData);
  var emails = InboxData.map(function(emailId, index) {
  		var email = props.data[emailId];
    return (
            <li key={index}> 
            	<Email id={email.id} title={email.title} from={email.from} to={email.to}
            	content={email.content} />
             
            </li>
        );
   })
  return (<div className='inbox'>
  <h2>Inbox Folder</h2>
  	{emails}
  </div>)
}

module.exports = Inbox;
