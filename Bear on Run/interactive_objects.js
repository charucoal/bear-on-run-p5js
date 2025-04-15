//THIS .JS FILE CONTAINS THE CODES FOR THE FUNCTIONS RELATING TO GAME INTERACTIVITY (INTERACTION BETWEEN GAME CHARACTER AND ELEMENTS OF THE GAME)

//canyon constructor function
function Canyon(x,y,widthscale)
{
    this.x = x; //x pos of canyon
    this.y = y; //y pos of canyon
    this.widthscale = widthscale; //widthscale of canyon

    //draw function draws canyons everytime the function is called
    this.draw = function()
    {
        //canyon
        fill(112, 27, 8);

        rect(this.x, this.y, this.widthscale, 200);

        //sides of the road
        //fill(173, 59, 2);
        fill(112, 27, 8);

        triangle(this.x, this.y,
                 this.x, this.y + 200,
                 this.x - 20, this.y + 200);

        triangle(this.x + this.widthscale, this.y,
                 this.x + this.widthscale, this.y + 200,
                 this.x + 20 + this.widthscale, this.y + 200);
    };
}

//function to draw canyons
function drawCanyons()
{
    for(i in canyons)
    {
        canyons[i].draw();
    }
}

//function to check if the game character is falling into the canyon OR jumping over canyon
function checkCanyon(t_canyon)
{
    //added and subtracted 15 to the t_canyon.x values
    //this is to give the player some leverage when moving from one side of the canyon to the other side

    //checks if the gameChar_world_x value is within the canyon.x values OR if it is above floorPos_y when in the canyon area
    if(gameChar_world_x <= t_canyon.x - 15 + t_canyon.widthscale && gameChar_world_x >= t_canyon.x + 15 && gameChar_y == floorPos_y)
    {
        isPlummeting = true;
        fallSound.play();
    }

    else if(gameChar_y < floorPos_y)
    {
        isPlummeting = false;
    }

    //brings the game character down the canyon if isPlummeting is true
    if(isPlummeting == true)
    {
        gameChar_y += 0.5;
        checkPlayerDie(); //checks if gameChar_y is > floorPos_y, removes 1 live if true && restarts game if lives > 0

        //ensures that the game character is facing forward while falling through the canyon
        if(gameChar_y > floorPos_y)
        {
            isRight = false;
            isLeft = false;
        }
    }
}

//function to draw collectable items
function drawCollectables(t_collectable)
{
    //left side of the collectable
    fill(t_collectable.fill_1);

    triangle(t_collectable.x, t_collectable.y - 18 * t_collectable.sizescale,
             t_collectable.x - 12 * t_collectable.sizescale, t_collectable.y - 7 * t_collectable.sizescale,
             t_collectable.x, t_collectable.y + 18 * t_collectable.sizescale);

    //right side of the collectable
    fill(t_collectable.fill_2);

    triangle(t_collectable.x, t_collectable.y - 18 * t_collectable.sizescale,
             t_collectable.x + 12 * t_collectable.sizescale, t_collectable.y - 7 * t_collectable.sizescale,
             t_collectable.x, t_collectable.y + 18 * t_collectable.sizescale);
}

//function to check if character is in contact with the collectable item
function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x,gameChar_y,t_collectable.x,t_collectable.y) < 30)
    {
        t_collectable.isFound = true;
        collectSound.play();
        game_score += 1; //every collectable collected increases game score by 1
    }
}

//function to draw enemy (ninja stars) + check if game character is in contact with the enemy
function Enemy(x,y,range)
{
    this.x = x; //x pos of ninja star
    this.y = y; //y pos of ninja star
    this.range = range; //distance which the ninja star can move from assigned position

    this.currentX = x;
    this.inc = 1; //increment of x pos of ninja star after each iteration

    this.update = function()
    {
        this.currentX += this.inc;

        if(this.currentX >= this.x + this.range)
        {
            //after the ninja star has reached the max value of the range, the increment is negative
            //the ninja star moves backwards
            this.inc = -1;
        }

        else if(this.currentX < this.x)
        {
            //after the ninja star has reached the min value of the range (x pos of ninja star), the increment is positive
            //the ninja star moves forwards again
            this.inc = 1;
        }
    };

    //the draw function draws ninja stars when called
    this.draw = function()
    {
        this.update();

        fill(24, 2, 64);

        //ninja star base
        ellipse(this.currentX,this.y,15,15);

        //ninja star spikes
        triangle(this.currentX,this.y - 20,this.currentX - 8,this.y - 5,this.currentX + 8,this.y - 5);
        triangle(this.currentX,this.y + 20,this.currentX - 8,this.y + 5,this.currentX + 8,this.y + 5);
        triangle(this.currentX + 20,this.y,this.currentX + 5,this.y - 7,this.currentX + 5,this.y + 8);
        triangle(this.currentX - 20,this.y,this.currentX - 5,this.y - 7,this.currentX - 5,this.y + 8);

        fill(190, 140, 245);
        ellipse(this.currentX,this.y,10,10);

        fill(24, 2, 64);
        ellipse(this.currentX,this.y,5,5);
    };

    //checkContact checks if the game character has been in contact with the ninja star
    this.checkContact = function(gameChar_x,gameChar_y)
    {
        var d = dist(gameChar_x,gameChar_y,this.currentX,this.y);

        if(d < 30)
        {
            return true;
        }

        return false;
    };
}

//function to draw platforms (using factory pattern)
function createPlatforms(x,y,length)
{
    var p = {x: x, //x pos of platform
             y: y, //y pos of platform
             length: length, //length of platform

             //draw function draws platforms when the function is called
             draw: function()
                   {
                       fill(66, 9, 42);

                       //platform
                       rect(this.x,this.y,this.length,20,10);

                       //platform lights
                       for(var i = 1; i < this.length/20; i++)
                       {
                           fill(platformLights);
                           ellipse(this.x + 20 * i, this.y + 10, 10, 10);
                       }
                   },
             //checkContactchecks if the game character is in contact with the platform
             checkContact: function(gameChar_x,gameChar_y)
                           {
                               if(gameChar_x > this.x && gameChar_x < this.x + this.length)
                                {
                                    var d = this.y - gameChar_y;

                                    if(d >= 0 && d < 5)
                                    {
                                        return true;
                                    }
                                }
                               return false;
                           }
             }
    return p;
}

//function to draw flagpole in 2 states: before winning & after winning
function renderFlagpole()
{
    //when game character has reached the flagpole
    if(flagpole.isReached)
    {
        //flag
        fill(0);
        rect(flagpole.x_pos + 2,306,80,60);

        fill(255);
        rect(flagpole.x_pos + 22, 306, 20, 20);
        rect(flagpole.x_pos + 62, 306, 20, 20);
        rect(flagpole.x_pos + 2, 306 + 20, 20, 20);
        rect(flagpole.x_pos + 42, 306 + 20, 20, 20);
        rect(flagpole.x_pos + 22, 306 + 40, 20, 20);
        rect(flagpole.x_pos + 62, 306 + 40, 20, 20);

        //flagpole
        fill(200);
        rect(flagpole.x_pos,300,5,133,5);
        ellipse(flagpole.x_pos + 2.5,300,10,10);
    }

    //when the game character has not reached the flagpole yet
    else
    {
        //flag
        fill(0);
        rect(flagpole.x_pos + 2,306 + 60,80,60);

        //flagpole
        fill(255);
        rect(flagpole.x_pos + 22, 306 + 60, 20, 20);
        rect(flagpole.x_pos + 62, 306 + 60, 20, 20);
        rect(flagpole.x_pos + 2, 306 + 20 + 60, 20, 20);
        rect(flagpole.x_pos + 42, 306 + 20 + 60, 20, 20);
        rect(flagpole.x_pos + 22, 306 + 40 + 60, 20, 20);
        rect(flagpole.x_pos + 62, 306 + 40 + 60, 20, 20);

        fill(200);
        rect(flagpole.x_pos,300,5,133,5);
        ellipse(flagpole.x_pos + 2.5,300,10,10);
    }
}

//function which detects if the game character has reached the flagpole
function checkFlagpole()
{
    if(flagpole.isReached == false)
    {
        var d = abs(gameChar_world_x - flagpole.x_pos);

        if(d < 20)
        {
            flagpole.isReached = true;
            winSound.play();
            return true;
        }
    }
}

//function to check how many lives the game character has left
function checkPlayerDie()
{
    if(gameChar_y > height + 500)
    {
        lives -= 1;

        //if lives > 0 continues game and restarts game background
        if(lives > 0)
        {
            startGame()
        }
    }
}