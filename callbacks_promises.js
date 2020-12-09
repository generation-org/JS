// Callback example

firstRequest(function(response) {
	secondRequest(response, function(nextResponse) {
		thirdRequest(nextResponse, function(finalResponse) {
			console.log('Final response: ' + finalResponse);
		}, failureCallback);
	}, failureCallback);
}, failureCallback);

// Promise example
firstRequest()
.then(function(response) {
	return secondRequest(response);
}).then(function(nextResponse) {
	return thirdRequest(nextReponse);
}).then(function(finalResponse) {
	console.log('Final response ' + finalResponse);	
}).catch(failureCallback)