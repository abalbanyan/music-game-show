// This file stores links to all songs used in the game, as well as information about the number of categories and difficulties.

var config = {};

config.categories = ["Shounen", "Shoujo", "Sports", "Sci-Fi", "Comedy", "Favorites"];
config.numCategories = config.categories.length;
config.numDifficulties = 6; // 100 to 100*difficulties

// This multi-dimensional array is indexed by column (category), then row (difficulty).
// Store links in this array to the music.
config.songs = 
[
	// Shounen
	[
	"http://openings.moe/video/Opening1-AmagiBrilliantPark.webm", 
	"", 
	"", 
	"", 
	"", 
	""
	],

	// Shoujo
	[
	"", 
	"", 
	"", 
	"", 
	"", 
	""
	],

	// Sports
	[
	"", 
	"", 
	"", 
	"", 
	"", 
	""
	],

	// Sci-Fi
	[
	"", 
	"", 
	"", 
	"", 
	"", 
	""
	],

	// Comedy
	[
	"", 
	"", 
	"", 
	"", 
	"", 
	""
	],
	
	// Favorites
	[
	"", 
	"", 
	"", 
	"", 
	"", 
	""
	]
];

module.exports = config;
