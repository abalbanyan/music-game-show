# music-game-show

This is a web app my friend and I wrote for the Japanese Animation Club at UCLA. It is a jeapordy-style music game, where teams of players select a category and difficulty, then try to guess the song that is played. A buzzer system is used to allow teams to guess a song.

## Functionality

The game should begin with the host loading the /scoreboard and /game routes on seperate pages. Each team should have one player navigate to /buzzer, enter their team name in the "Team Name" field and press the buzzer. This registers the teams on the /scoreboard route. The host can press the "start" button on /scoreboard to start the game once each player has made a selection. At this point, teams can now select categories and difficulties on the /game route (which the host can click). Clicking an entry will immediately cause the song corresponding to that entry to play on the /scoreboard route. The song is paused either when time runs out, or when a buzzer is pressed. When a buzzer is pressed, the team corresponding to the buzzer will be queued on the /game route (and displayed to the audience). The host can select either "correct" or "incorrect" at this point. "Correct" will cause the team to correctly gain points. "Incorrect" will play the song again, and remove that team from the queue.

Note that a team may only use the buzzer once per song. There is no other penalty for guessing incorrectly.
Teams may also have multiple players using buzzers, as long as they all type the exact same team name (not case sensitive).
