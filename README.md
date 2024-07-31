# Memory Game 

## A JavaScript Game

This is a website designed to deliver a JavaScript game to the user. 

This game is accessible to all, and has two aims in mind: to be fun to play the first time, and to encourage replayability.

 There is a high score function that stores the longest run score, enabling replayability. The site is targeted primarily at anyone who wishes to play the game, and exists solely for this game. 
 
The game will be designed to work on all screens, and should be responsive as the page is resized. 

The site is designed to work on three different screen sizes, including Desktop, Tablet and Phone sizes.


## Game Concept
With inspiration drawn from the very succesful game Simon. Which is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates, with software programming by Lenny Cope. First brought to market in 1978, The device created a series of tones and lights and required a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over.


The site is designed to work on three different screen sizes, including Desktop, Tablet and Phone sizes.

A note about copyright: This game is intended as a parody of Simon, which is © Hasbro, and is in no way designed to infringe on the copyright of Simon. This game is not made for the purposes of making money, and all rights to the game Simon and to the mechanics that are represented under the copyright remain the property of the copyright owner.

## User Story
As a player:
+ An enjoyable gameplay loop
+ Strong visuals that help focus the user on gameplay
+ Clear feedback on whether I have performed a game action
+ Bug-free gameplay
+ Some ability to measure my performance
+ Replayability options and value

## Features and Wireframe
This site comprises one page, with a centred game screen. The game itself ...

### Title Page
![Title Game State](readme_docs/prototype/title.png "Title Game State")

### Default Game State
![Default Game State]()

### During Game Play

![During Gamplay]()

### Game Over message
![Game Over Game State]()

## Technology
+ This website was made in its entirety using Visual Code Studio
+ Wireframe and prototyping images were made in Figma
+ Additional software used to create this website include Chrome for previewing, inspecting and bug testing

## Testing
### Test Case: TDD Developement
+ !["Test Examples]()

### Test Case: Developer tools
+ Click outside game space; should have no effect on game.

+ The game space should have 4 equal sized circles that the user can click and is obvious when clicked.

+ The game space should also have a new game button.

+ When the game is active: hovering over any of the four circles at any time should make the circle grow slightly.

+ When the game is active: The highscore box should add up for every correct sequence.

+ When the game is active: the circle should light up clearly to the user.

+ When the game is active: there should be enough time between each light up of the circles. 

+ When the game is active: If the incorrect button is pressed then the alert box should show displaying a message such as "Try again!" and a new game starts.

+ When the game is active: 

### Bugs discovered
+ Properly aligning the circle buttons was very important as this was the main interaction with the user. Ultimately I solved this with putting two circles on a row each instead of trying to align them in one section.

+ Had to change the alignment fro smaller screens . . . upon doing this led to alignment issues but fixed with flex direction: coloum in the body CSS

+ had to change the hover function as it didnt look right on touch screens . . . 

## Code validation
### <a href="https://validator.w3.org/" target="_blank">W3C</a>

+ <a href=>Game page validation</a>

![W3C Validation]()

![Jigsaw Validation]()

### Lighthouse Report:

![Jigsaw Validation]() 

### <a href="https://jshint.com/" target="_blank">JSHint</a>

![JSHint Validation]() 

## Supported Screens and Browsers
+ This website works in any browser and at any screen size.
+ It has been developed and tested in Chrome, and smaller screen sizes have been simulated with Chrome's Inspect tool. Sample screens of all currently-available smart phones have been tested through Chrome's Inspect tool.
## Deployment and Local Development

### Deployment

The site is deployed using GitHub Pages - [Al3x-G/MP2MemoryGame](https://github.com/Al3x-G/MP2MemoryGame).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Al3x-G/MP2MemoryGame](https://github.com/Al3x-G/MP2MemoryGame).
3. Click the settings button.
4. Select pages in the left-hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Al3x-G/MP2MemoryGame](https://github.com/Al3x-G/MP2MemoryGame).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Al3x-G/MP2MemoryGame](https://github.com/Al3x-G/MP2MemoryGame).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


The Visual Studio Code preview extension was used to preview the website. To open this repository on Visual Studio Code:

+ Open an integrated terminal from the menu Terminal -> New Terminal
+ Clone the repo with the following command: git clone https://github.com/Al3x-G/MP2MemoryGame
+ Change your terminal into that new subdirectory: cd mp2memorygame
+ Open in Visual Studio Code: code .

## Credits
### Text Content
Text is written by the Al3x-G https://github.com/Al3x-G

### Media
#### Readme Images


#### Game Images
