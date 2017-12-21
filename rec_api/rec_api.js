/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */ 

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.post('/mobile/custom/rec_api/recipes', function(req,res) {
		var result = {};
		var statusCode = 201;
		if (statusCode == 201){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					    "id": 547,
					    "name": "Widget Adapter",
					    "description": "this is a description",
					    "portion": 2
					};
			}
		}
		if (statusCode == 400){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					    "code": 4001,
					    "description": "Invalid name"
					};
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/rec_api/recipes', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [
					  {
					    "id": 547,
					    "name": "Widget Adapter",
					    "description": "this is a description",
					    "portion": 2
					  },
					  {
					    "id": 548,
					    "name": "Widget",
					    "description": "this is a description",
					    "portion": 3
					  }
					];
			}
		}
		res.status(statusCode).send(result);
	});

	service.get('/mobile/custom/rec_api/recipes/:name', function(req,res) {
		var result = {};
		var statusCode = 200;
		if (statusCode == 200){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = {
					  "id": 547,
					  "name": "Widget Adapter",
					  "description": "this is a description",
					  "portion": 2
					};
			}
		}
		if (statusCode == 400){
			var acceptType = req.accepts(['application/json']);
			if (acceptType == 'application/json'){
				result = [
					  {
					    "code": 4001,
					    "message": "Invalid name"
					  }
					] ;
			}
		}
		res.status(statusCode).send(result);
	});

};
