exports.handler = async function(event, context) {
  const requestBody = JSON.parse(event.body);
  const message = requestBody.message;
  
  if (message == null) {
	  return {
		statusCode: 400,
	  };
  } else {
	  return {
		statusCode: 200,
		body: message,
	  };
  }
};
