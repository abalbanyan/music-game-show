// This file stores links to all songs used in the game, as well as information about the number of categories and difficulties.

var config = {};

config.categories = ["Shounen", "Shoujo", "Sports", "Sci-Fi", "Comedy", "Favorites"];
config.numCategories = config.categories.length;
config.numDifficulties = 6; // 100 to 100*difficulties

// This multi-dimensional array is indexed by column (category), then row (difficulty).
// Store links in this array to the music.
// TODO: Put all the songs in place.
config.songs = 
[
	// Shounen
	[
	"http://openings.moe/video/Opening1-FullmetalAlchemistBrotherhood.webm", 
	"http://openings.moe/video/Opening1-NoragamiAragoto.webm", 
	"http://openings.moe/video/Ending2a-AttackOnTitan.webm", 
	"", 
	"", 
	""
	],

	// Shoujo
	[
	"", 
	"http://openings.moe/video/Opening1-Hibike!Euphonium.webm", 
	"", 
	"http://openings.moe/video/Opening1-TonariNoKaibutsuKun.webm", 
	"", 
	""
	],

	// Sports
	[
	"", 
	"", 
	"http://openings.moe/video/Opening1-Free!.webm", 
	"", 
	"", 
	""
	],

	// Sci-Fi
	[
	"http://openings.moe/video/Ending1-PsychoPass.webm", 
	"http://openings.moe/video/Ending1-ShinsekaiYori.webm", 
	"http://openings.moe/video/Opening1-GuiltyCrown.webm", 
	"http://openings.moe/?video=Opening2-EurekaSeven", 
	"http://openings.moe/video/Opening1-Btooom!.webm", 
	""
	],

	// Comedy
	[
	"http://openings.moe/video/Opening1-Nichijou.webm", 
	"http://openings.moe/video/Opening1-GekkanShoujoNozakiKun.webm", 
	"http://openings.moe/video/Ending1-SamuraiChamploo.webm", 
	"", 
	"", 
	"http://openings.moe/video/Opening1-CarnivalPhantasm.webm"
	],
	
	// Favorites
	[
	"http://openings.moe/video/Opening1-CowboyBebop.webm", 
	"", 
	"http://openings.moe/video/Opening2-FateStayNightUBW.webm", 
	"http://openings.moe/video/Opening1a-BokuDakeGaInaiMachi.webm", 
	"http://openings.moe/video/Opening1-SpiceAndWolf.webm", 
	""
	]
];

module.exports = config;
