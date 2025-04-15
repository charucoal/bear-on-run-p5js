//THIS .JS FILE CONTAINS THE CODES FOR THE FUNCTIONS INITIALISING THE GAME VARIABLES

//this function is only called once in the setup() function at the start of a new game
//ensures that the following variables are not re-initialised each time a game character loses a live
function unchangedVariables()
{
    lives = 3;
    game_score = 0;

    skyGrad = 0;

    groundR = 4;
    groundG = 59;
    groundB = 4;

    cloudR = 250;
    cloudG = 218;
    cloudB = 221;

    treeR = 242;
    treeG = 107;
    treeB = 70;

    snowCapR = 210;
    snowCapG = 230;
    snowCapB = 250;

    //for rain effect
    emit = new Emitter(10, -30, 0, 100, 30, color(150,150,150,random(100,200)));
    emit.startEmitter(200, 400);

    //collectable items array
    item = [{x:320, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:400, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:550, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:630, y:floorPos_y-82, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:950, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:1020, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:1200, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:1300, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:1700, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:2140, y:floorPos_y-102, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:2240, y:floorPos_y-132, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:2340, y:floorPos_y-152, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:2440, y:floorPos_y-172, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:2540, y:floorPos_y-192, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:2640, y:floorPos_y-212, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:2740, y:floorPos_y-232, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:2940, y:floorPos_y-232, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:3140, y:floorPos_y-212, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:3340, y:floorPos_y-192, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:3540, y:floorPos_y-172, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:3740, y:floorPos_y-152, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:3800, y:floorPos_y, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:5040, y:floorPos_y-310, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:5040, y:floorPos_y-230, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:5040, y:floorPos_y-150, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:5150, y:floorPos_y-310, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:5150, y:floorPos_y-230, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:5150, y:floorPos_y-150, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:5260, y:floorPos_y-310, sizescale:1, isFound: false, fill_1:color(88, 117, 122), fill_2: color(116, 179, 167)},
            {x:5260, y:floorPos_y-230, sizescale:1, isFound: false, fill_1: color(199, 148, 8), fill_2: color(222, 188, 95)},
            {x:5260, y:floorPos_y-150, sizescale:1, isFound: false, fill_1: color(88, 117, 122), fill_2: color(116, 179, 167)},];
    

    //clouds array
    clouds = [];
    clouds.push(new Cloud(100, 100, 1));
    clouds.push(new Cloud(300, 200, 2));
    clouds.push(new Cloud(740, 130, 1.5));
    clouds.push(new Cloud(1300, 180, 1));
    clouds.push(new Cloud(1550, 150, 1.3));
    clouds.push(new Cloud(2000, 200, 1.6));
    clouds.push(new Cloud(2500, 150, 1.3));
    clouds.push(new Cloud(3000, 200, 1.6));
}

//function to redraw game background everytime it is called
function startGame()
{
    //game character position
    gameChar_x = width/2;
    gameChar_y = floorPos_y;

    //variables to control the background scrolling
    //different scrollPos variables to create parallax scrolling effect
    scrollPos = 0;
    scrollPos1 = 0;
    scrollPos2 = 0;

    //variable to store the real position of the gameChar in the game world
    //needed for collision detection
    gameChar_world_x = gameChar_x - scrollPos;

    //boolean variables to control the movement of the game character
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;

    //intialising of arrays of scenery objects

    //canyons array
    canyons = [];
    canyons.push(new Canyon(110,floorPos_y,100));
    canyons.push(new Canyon(750,floorPos_y,120));
    canyons.push(new Canyon(1400,floorPos_y,120));
    canyons.push(new Canyon(1800,floorPos_y,200));
    canyons.push(new Canyon(3000,floorPos_y,300));
    canyons.push(new Canyon(3500,floorPos_y,200));
    canyons.push(new Canyon(4700,floorPos_y,200));

    //mountains array
    mountains = [];
    mountains.push(new Mountain(20,floorPos_y,1,1.1));
    mountains.push(new Mountain(390,floorPos_y,1,0.9));
    mountains.push(new Mountain(550,floorPos_y,1.2,1.2));
    mountains.push(new Mountain(710,floorPos_y,1,0.9));
    mountains.push(new Mountain(1300,floorPos_y,1.3,1.2));
    mountains.push(new Mountain(2100,floorPos_y,1.3,1.2));
    mountains.push(new Mountain(2300,floorPos_y,1.3,1));
    mountains.push(new Mountain(2700,floorPos_y,1.2,1.2));
    mountains.push(new Mountain(2850,floorPos_y,1,1));
    mountains.push(new Mountain(3290,floorPos_y,1,0.9));
    mountains.push(new Mountain(3450,floorPos_y,1.2,1.2));
    mountains.push(new Mountain(3610,floorPos_y,1,0.9));
    mountains.push(new Mountain(3770,floorPos_y,1,0.9));
    mountains.push(new Mountain(3930,floorPos_y,1.2,1.2));

    //trees array
    trees = [];
    trees.push(new Tree(250));
    trees.push(new Tree(1000));
    trees.push(new Tree(1370));
    trees.push(new Tree(1600));
    trees.push(new Tree(2010));
    trees.push(new Tree(2850));
    trees.push(new Tree(4000));
    trees.push(new Tree(4300));
    trees.push(new Tree(4600));
    trees.push(new Tree(5500));

    //platforms array
    platforms = [];
    platforms.push(new createPlatforms(580,floorPos_y-60,100));
    platforms.push(new createPlatforms(1600,floorPos_y-60,200));
    platforms.push(new createPlatforms(2100,floorPos_y-80,80));
    platforms.push(new createPlatforms(2200,floorPos_y-110,80));
    platforms.push(new createPlatforms(2300,floorPos_y-130,80));
    platforms.push(new createPlatforms(2400,floorPos_y-150,80));
    platforms.push(new createPlatforms(2500,floorPos_y-170,80));
    platforms.push(new createPlatforms(2600,floorPos_y-190,80));
    platforms.push(new createPlatforms(2700,floorPos_y-210,80));
    platforms.push(new createPlatforms(2900,floorPos_y-210,80));
    platforms.push(new createPlatforms(3100,floorPos_y-190,80));
    platforms.push(new createPlatforms(3300,floorPos_y-170,80));
    platforms.push(new createPlatforms(3500,floorPos_y-150,80));
    platforms.push(new createPlatforms(3700,floorPos_y-130,80));
    platforms.push(new createPlatforms(5000,floorPos_y-280,300));
    platforms.push(new createPlatforms(5000,floorPos_y-50,80));
    platforms.push(new createPlatforms(5000,floorPos_y-130,80));
    platforms.push(new createPlatforms(5000,floorPos_y-210,80));
    platforms.push(new createPlatforms(5110,floorPos_y-50,80));
    platforms.push(new createPlatforms(5110,floorPos_y-130,80));
    platforms.push(new createPlatforms(5110,floorPos_y-210,80));
    platforms.push(new createPlatforms(5220,floorPos_y-50,80));
    platforms.push(new createPlatforms(5220,floorPos_y-130,80));
    platforms.push(new createPlatforms(5220,floorPos_y-210,80));

    //platform lights are yellow by default
    platformLights = color(224, 172, 27);

    //enemies array
    enemies = [];
    enemies.push(new Enemy(80, floorPos_y-20, 200));
    enemies.push(new Enemy(2300, floorPos_y-20, 250));
    enemies.push(new Enemy(1600, floorPos_y-80, 100));
    enemies.push(new Enemy(5000, floorPos_y-310, 300));
    enemies.push(new Enemy(5000, floorPos_y-150, 300));
    enemies.push(new Enemy(5500, floorPos_y-20, 100));

    //flagpole
    flagpole = {x_pos: 6200, isReached: false};

    //hearts (number of lives)
    heart = {x_pos: 990, y_pos: 15};
}