// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

	// Lists all friends
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	// Add a new friend
	app.post('/api/friends', function (req, res) {
	// Capture new friend information
	var newFriend = {
		matchName: "",
		difference: 100
	};
	var { matchName, difference } = newFriend
		
	// capture object of survey answers from front end
		var friendData = {
			Friend: req.body.name,
			Scores: req.body.scores

		}
		var { Friend, Scores } = friendData;


		var scoresArray = [];

		// turning array of string into integers for the scores object
		for (var i = 0; i < Scores.length; i++) {
			scoresArray.push(parseInt(Scores[i]))
		}
		Scores = scoresArray;


		// Array to run through list of existing friends in database
		for (var i = 0; i < friends.length; i++) {

			// equation to find the difference in points for each friend in the loop
			var friendDifference = 0;
			for (var j = 0; j < Scores.length; j++) {
				friendDifference += Math.abs(Scores[j] - friends[i].scores[j]);
// increments the difference in points between the new user and current friends
				
// loops through entire list of friends and keeps going if there is a lower difference
			if (friendDifference < difference) {
				difference = friendDifference;
				matchName = friends[i];
			}
		}
	}

// replies with the name of the friend that has the least difference between survey choices
	res.json(matchName);

// send the user input into the friends array
	friends.push(friendData);

	});
};
