// This file stores links to all songs used in the game, as well as information about the number of categories and difficulties.

var config = {};

config.categories = ["Shounen", "Shoujo", "Sports", "Sci-Fi", "Comedy", "Favorites"];
config.numCategories = config.categories.length;
config.numDifficulties = 6; // 100 to 100*difficulties

// This multi-dimensional array is indexed by column (category), then row (difficulty).
// Store links in this array to the music.
// TODO: Put all the songs in place.
function Song(url, name) {
    this.songUrl = url;
    this.title = name;
}

config.songs = 
[
	// Shounen
	[
	new Song("http://openings.moe/video/Opening1-FullmetalAlchemistBrotherhood.webm", "Full Metal Alchemist OP 1"),
	new Song("http://openings.moe/video/Opening1-NoragamiAragoto.webm", "Noragami Aragoto OP1"),
	new Song("https://a.pomf.cat/ybrgdm.m4a", "HunterxHunter OP1"), 
	new Song("https://a.pomf.cat/uuppbu.m4a", "Tokyo Ghoul √A ED1"),
	new Song("http://openings.moe/video/Ending2a-AttackOnTitan.webm", "Attack on Titan ED2"),
	new Song("https://a.pomf.cat/lafljc.m4a", "Pokemon XYZ OP1")
	],

	// Shoujo
	[
	new Song("https://a.pomf.cat/htczaw.m4a", "Ouran High School Host Club OP1"),
	new Song("http://openings.moe/video/Opening1-Hibike!Euphonium.webm", "Hibike Euphonium OP1"),
	new Song("https://a.pomf.cat/kbxvwb.m4a", "Cardcaptor Sakura OP 3"),
	new Song("https://a.pomf.cat/nyuqwc.m4a", "Kaichou wa Maid-Sama OP1"),
	new Song("http://openings.moe/video/Opening1-TonariNoKaibutsuKun.webm", "My Little Monster OP1"),
	new Song("https://a.pomf.cat/cpywot.m4a",  "Sekai-ichi Hatsukoi OP1")
	],

	// Sports
	[
	new Song("https://a.pomf.cat/icvhyb.mp4", "Haikyuu!! OP1"),
	new Song("https://a.pomf.cat/hwinzg.m4a", "Ping Pong the Animation OP1"),
	new Song("http://openings.moe/video/Opening1-Free!.webm",  "Free! OP1"),
	new Song("https://a.pomf.cat/rbsdyc.mp4", "Kuroko no Basuke"),
	new Song("https://a.pomf.cat/hozlic.mp4", "Keijo!!!!!!!! OP1"),
	new Song("https://a.pomf.cat/vmiwuu.mp4", "Yowamushi Pedal Grande Road OP2")
	],

	// Sci-Fi
	[
	new Song("http://openings.moe/video/Ending1-PsychoPass.webm",  "Pyscho Pass ED1"),
	new Song("http://openings.moe/video/Opening1-GuiltyCrown.webm",  "Guilty Crown OP1"),
	new Song("http://openings.moe/video/Ending1-ShinsekaiYori.webm",  "Shinsekai Yori ED1"),
	new Song("https://a.pomf.cat/bxfzyg.m4a",  "Evangelion 3.33 ED"),
	new Song("http://openings.moe/video/Opening1-Btooom!.webm",  "Btooom! OP1"),
	new Song("https://a.pomf.cat/ylvmxu.m4a",  "Gundam Unicorn ED")
	],

	// Comedy
	[
	new Song("http://openings.moe/video/Opening1-Nichijou.webm",  "Nichijou OP1"),
	new Song("http://openings.moe/video/Opening1-GekkanShoujoNozakiKun.webm",  "Gekkan Shoujo Nozaki-kun OP1"),
	new Song("http://openings.moe/video/Ending1-SamuraiChamploo.webm",  "Samurai Champoo ED1"),
	new Song("http://openings.moe/video/Opening1-CarnivalPhantasm.webm",  "Carnival Phantasm OP1"),
	new Song("https://a.pomf.cat/mbebxs.m4a",  "Devil is a Part-Timer OP1"),
	new Song("https://a.pomf.cat/eonmqi.m4a", "Gintama OP13")
	],
	
	// Favorites
	[
	new Song("http://openings.moe/video/Opening1-CowboyBebop.webm",  "Cowboy Bebop OP1"),
	new Song("https://a.pomf.cat/cpmgeq.m4a",  "Love Live Sunshine OP1"),
	new Song("http://openings.moe/video/Opening2-FateStayNightUBW.webm",  "Fate/Stay Night UBW OP2"),
	new Song("http://openings.moe/video/Opening1a-BokuDakeGaInaiMachi.webm",  "Erased OP1"),
	new Song("http://openings.moe/video/Opening1-SpiceAndWolf.webm",  "Spice and Wolf OP1"),
	new Song("", "Monogatari")
	]
];

module.exports = config;
