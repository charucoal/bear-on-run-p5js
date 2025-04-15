//GAME PROJECT FINALS SUBMISSION
//NAME: CHARU UPADHYAY

//VARIABLE INITIALISATION
var gameChar_x; //x pos of game character in relation to the current game screen
var gameChar_y; //y pos of game character in relation to the current game screen
var gameChar_world_x; //x pos of game character in relation to the game world

var floorPos_y; //y pos of ground

//scroll pos values for the different scenery items
var scrollPos;
var scrollPos1;
var scrollPos2;

//game character movements
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//scenery variables
var trees;
var mountains;
var clouds;
var canyons;
var item; //aka collectable
var enemies;
var platforms;
var platformLights;
var emit; //for rain effect

//scoring & winning variables
var game_score;
var flagpole;
var lives;
var heart;

//gradient variables
//gradient shift for sky color
var skyGrad;

//gradient shift for ground color
var groundR;
var groundG;
var groundB;

//gradient shift for cloud color
var cloudR;
var cloudG;
var cloudB;

//gradient shift for tree leaves color
var treeR;
var treeG;
var treeB;

//gradient shift for snowcap color
var snowCapR;
var snowCapG;
var snowCapB;

var soundLoadedCount; //checks if all sounds have been loaded before game begins

//sound variables
var jumpSound;
var fallSound;
var collectSound;
var winSound;
var loseSound;
var enemySound;
var backgroundMusic;
var rainMusic;

//font variables
var myFont;

//function to load all sounds and fonts before game begins
function preload()
{
    soundLoadedCount = 0;

    //load sounds
    soundFormats("mp3");

    jumpSound = loadSound("assets/jump.mp3",soundLoaded);
    jumpSound.setVolume(0.05);

    collectSound = loadSound("assets/collect.mp3",soundLoaded);
    collectSound.setVolume(0.1);

    winSound = loadSound("assets/win.mp3",soundLoaded);
    winSound.setVolume(0.2);

    loseSound = loadSound("assets/lose.mp3",soundLoaded);
    loseSound.setVolume(0.5);

    fallSound = loadSound("assets/fall.mp3",soundLoaded);
    fallSound.setVolume(0.5);

    enemySound = loadSound("assets/ninjaStar.mp3",soundLoaded);
    enemySound.setVolume(0.1);

    backgroundMusic = loadSound("assets/background.mp3",soundLoaded);
    backgroundMusic.setVolume(0.5);

    rainMusic = loadSound("assets/rain.mp3", soundLoaded);
    rainMusic.setVolume(0.08);

    //load font
    myFont = loadFont("assets/slkscrb.ttf");
}

//function to ensure that all sound effects have been loaded before game begins
function soundLoaded()
{
    soundLoadedCount++;
}

function setup()
{
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;

    //background and rain music is played when user interacts with the game
    //music is played in a loop
    backgroundMusic.play();
    backgroundMusic.loop();
    rainMusic.play();
    rainMusic.loop();

    //game variables initialisation (in the file INITIALISATION.JS file)
    unchangedVariables();
    startGame();
}

function draw()
{
    //ensures that all sound effects have been loaded before game begins
    if(soundLoadedCount < 8)
    {
        return;
    }

    noStroke();

    //sky
    drawSky();

    //ground
    drawGround();

    //SCROLLING EFFECT FOR CLOUDS STARTS
    push();
    translate(scrollPos1,0);

    //clouds
    drawClouds();

    pop();
    //SCROLLING EFFECT FOR CLOUDS ENDS

    //SCROLLING EFFECT FOR MOUNTAINS STARTS
    push();
    translate(scrollPos2,0);

    //mountains
    drawMountains();

    pop();
    //SCROLLING EFFECT FOR MOUNTAINS ENDS

    //SCROLLING EFFECT FOR OTHER SCENERY OBJECTS STARTS
    push();
    translate(scrollPos,0);

    //trees
    drawTrees();

    //canyons
    drawCanyons();

    //checks if game character is falling into the canyon OR jumping over canyon
    for(i in canyons)
    {
        checkCanyon(canyons[i]);
    }

    //platforms
    for(i in platforms)
    {
        platforms[i].draw();
    }

    //draws collectables + checks if collectables have been collected
    for(i in item)
    {
        //only draws collectables if collectable's isFound property is false
        if(item[i].isFound == false)
        {
            drawCollectables(item[i]);
            checkCollectable(item[i]);
        }
    }

    //draws flagpole depending on which state it is in
    //state 1: game character has not reached the flagpole, flag down
    //state 2: game character has reached the flagpole, flag up
    renderFlagpole();

    //checks if the game character has reached the flagpole
    checkFlagpole();

    //draws enemies + checks if game character is in contact with enemy
    for(i in enemies)
    {
        enemies[i].draw();

        //checkContact returns true or false
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);

        //if checkContact == true
        if(isContact)
        {
            enemySound.play(); //the sound of the ninja star hitting the game character plays

            //ensures that lives is not a negative value
            if(lives > 0)
            {
                lives -= 1; //number of lives decreases by one
                startGame(); //draws game with inital background
                break; //breaks out of for loop
            }
        }
    }

    pop();
    //SCROLLING EFFECT FOR OTHER SCENERY OBJECTS ENDS

    //game character
    drawGameChar();

    //draws the number of lives left for the game character + score viewer
    scoreBar();

    //game message if player loses
    if(lives < 1)
    {
        fill(255);
        textAlign(CENTER);
        textFont(myFont);
        textSize(40);
        text("GAME OVER!",width/2,500);

        //background music + rain music stops
        backgroundMusic.stop();
        rainMusic.stop();

        //losing music is played and all game effects are stopped
        loseSound.play();
        loseSound.noLoop();
        return;
    }

    //game message if player wins
    if(flagpole.isReached)
    {
        fill(255);
        textAlign(CENTER);
        textFont(myFont);
        textSize(40);
        text("LEVEL COMPLETE!",width/2,500);
        return;
    }

    //logic to make the game character move or for the background to scroll

    //character moving left
    if(isLeft)
    {
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 6;
        }
        else
        {
            scrollPos += 6;  //scrolling for other scenery (trees, canyons and collectables) is fastest as they are nearer to the game character
            scrollPos1 += 4; //scrolling for clouds
            scrollPos2 += 3; //scrolling for mountains is slowest as they are furthest away from the game character
        }
    }

    //character moving right
    if(isRight)
    {
        if(gameChar_x < width * 0.8)
        {
            gameChar_x  += 6;
        }
        else
        {
            //negative values to move against the background

            scrollPos -= 6;  //scrolling for other scenery (trees, canyons and collectables) is fastest as they are nearer to the game character
            scrollPos1 -= 4; //scrolling for clouds
            scrollPos2 -= 3; //scrolling for mountains is slowest as they are furthest away from the game character
        }
    }

    //logic to make the game character jump & come back to the ground (gravity)
    if(gameChar_y != floorPos_y)
    {
        //checks if the game character is on the platform while landing
        var isContact = false;
        for(i in platforms)
        {
            //if game character lands on the platform: ensures that game character does not fall to the ground
            if(platforms[i].checkContact(gameChar_world_x,gameChar_y))
            {
                isContact = true;
                isFalling = false;
                platformLights = color(31, 140, 17); //platform lights turn green to indicate contact with the platform
            }
        }

        //if game character is not on the platform: game character falls to the ground as usual
        if(isContact == false)
        {
            gameChar_y += 2;
            isFalling = true;
            platformLights = color(224, 172, 27); //changes platform lights to yellow to indicate no contact with the platform
        }
    }

    else
    {
        isFalling = false;
    }

    //updates the real position of gameChar for collision detection
    gameChar_world_x = gameChar_x - scrollPos;
}

//KEY CONTROL FUNCTIONS
//when a key is pressed
function keyPressed()
{
    //game character moves left
    if(key == "A" || keyCode == 37)
    {
        isLeft = true;
    }

    //game character moves right
    else if(key == "D" || keyCode == 39)
    {
        isRight = true;
    }

    //game character jumps
    else if(keyCode == 32)
    {
        if(isFalling == false)
        {
            //jump sound plays
            jumpSound.play();

            //game character moves upwards by 100px
            gameChar_y = gameChar_y - 100;

            //ensures that game character comes down after jumping
            isFalling = true;
        }
    }
}

//when key is released, the game character faces forward again
function keyReleased()
{
    if(key == "A" || keyCode == 37)
    {
        isLeft = false;
    }

    else if(key == "D" || keyCode == 39)
    {
        isRight = false;
    }
}