var React = require('react');
var ReactDOM = require('react-dom');
var emailData = require('./email-data');
var Email = require('./email-component');



var Spam = function(props) {
  var SpamData = Object.keys(props.data);
  console.log(SpamData);
  var emails = SpamData.map(function(emailId, index) {
  		var email = props.data[emailId];
    return (
            <li key={index}> 
            	<Email id={email.id} title={email.title} from={email.from} to={email.to}
            	content={email.content} />
            </li>
        );
   })
  return (
  <div className='spam'>
  <h2>Spam Folder</h2>
  	{emails}
  </div>)
}

module.exports = Spam;
