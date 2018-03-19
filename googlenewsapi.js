// JavaScript Document

var googleApp = {
	gnewsApiData : [],
	
	gnewsApiLink: 'https://newsapi.org/v2/everything/',

	initialize: function() {
		console.log('google news');
		googleApp.getgnewsApiData();
	},

	getgnewsApiData: function() {
		console.log("Getting gnewsApi Data");
		var searchTerm = 'boko%20haram';
		var language='en';
		var startTime='2018-03-17';
		var endTime='2018-03-25';
		var sortedBy='popularity';
		var gnewsApiURL = 'https://newsapi.org/v2/everything?q='+ searchTerm +'&language='+ language +'&from='+ startTime + '&to='+ endTime +'&sortBy='+ sortedBy +'&apiKey=';
		var mygnewsApiAPIKey = "0a35e5dd16a541678f6c27471fafcee6";
		var gnewsApiReqURL = gnewsApiURL + mygnewsApiAPIKey;

		$.ajax({
			url: gnewsApiReqURL,
			type: 'GET',
			dataType: 'json',
			 
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("Got the data");
				googleApp.gnewsApiData = data.articles;
				googleApp.makeHTML();
				debugger;
				
			}
		});
	},
			//Clear out the container
	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < googleApp.gnewsApiData.length; i++){
			theHTML += "<div class='text-article-box'>";
			theHTML += "<headline>" + googleApp.gnewsApiData[i].title + "</headline>";
			theHTML += "<summary>" + googleApp.gnewsApiData[i].description + "</summary>";
			theHTML += "<author>"  + googleApp.gnewsApiData[i].source.author + "</headline>";
			theHTML += "<source>" + googleApp.gnewsApiData[i].source.name + "</source>";
			theHTML += "<time>" + googleApp.gnewsApiData[i].publishedAt + "</time>";
			theHTML += "<url>" + googleApp.gnewsApiData[i].url + "</url>";
	
			theHTML += "</div>";
		}
		
		$('.article-news-container').html(theHTML);
	},
};