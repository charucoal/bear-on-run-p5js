//THIS .JS FILE CONTAINS THE CODES FOR FUNCTIONS DRAWING THE GAME CHARACTER IN THEIR DIFFERENT POSITIONS

//GAME CHARACTER RENDER FUNCTION
//function to draw the game character
function drawGameChar()
{
    if(isLeft && isFalling)
    {
        //game character jumping and moving left
        jumpingLeft();
    }

    else if(isRight && isFalling)
    {
        //game character jumping and moving right
        jumpingRight();
    }

    else if(isLeft)
    {
        //game character walking left
        facingLeft();
    }

    else if(isRight)
    {
        //game character walking right
        facingRight();
    }

    else if(isFalling || isPlummeting)
    {
        //game character jumping and facing forward
        falling();
    }

    else
    {
        //game character facing front
        facingFront();
    }
}

//function for game character jumping left
function jumpingLeft()
{
    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //eyes
    fill(0);
    ellipse(gameChar_x - 3,gameChar_y - 60,3,3);

    //nose
    fill(255);
    ellipse(gameChar_x - 10,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x - 10,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x - 9, gameChar_y - 53, 2.5,2, 0, PI);

    //back ear
    noStroke();
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 69,10,10);
    ellipse(gameChar_x + 10,gameChar_y - 67,10,10);

    //back body
    ellipse(gameChar_x,gameChar_y - 27,25,40);

    //legs
    rect(gameChar_x - 9,gameChar_y - 17,9,15,20);
    rect(gameChar_x,gameChar_y - 17,9,15,20);

    rect(gameChar_x,gameChar_y - 10,15,9,20);
    rect(gameChar_x - 9,gameChar_y - 10,15,9,20);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x + 10,gameChar_y - 67,5,5);

    //front body
    ellipse(gameChar_x - 5,gameChar_y - 27,9,24);
}

//function for game character jumping right
function jumpingRight()
{
    // jumping left code

    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //back ear
    noStroke();
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 69,10,10);
    ellipse(gameChar_x - 10,gameChar_y - 67,10,10);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x - 10,gameChar_y - 67,5,5);

    //nose
    fill(255);
    ellipse(gameChar_x + 10,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x + 10,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x + 9, gameChar_y - 53, 2.5,2, 0, PI);

    noStroke();

    //eyes
    fill(0);
    ellipse(gameChar_x + 3,gameChar_y - 60,3,3);

    //back body
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 27,25,40);

    //legs
    rect(gameChar_x - 9,gameChar_y - 17,9,15,20);
    rect(gameChar_x,gameChar_y - 17,9,15,20);

    rect(gameChar_x - 6,gameChar_y - 10,15,9,20);
    rect(gameChar_x - 15,gameChar_y - 10,15,9,20);

    //front body
    fill(235,200,178);
    ellipse(gameChar_x + 5,gameChar_y - 27,9,24);
}

//function for game character moving left
function facingLeft()
{
    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //eyes
    fill(0);
    ellipse(gameChar_x - 3,gameChar_y - 60,3,3);

    //nose
    fill(255);
    ellipse(gameChar_x - 10,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x - 10,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x - 9, gameChar_y - 53, 2.5,2, 0, PI);

    //back ear
    noStroke();
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 69,10,10);
    ellipse(gameChar_x + 10,gameChar_y - 67,10,10);

    //back body
    ellipse(gameChar_x,gameChar_y - 27,25,40);

    //legs
    rect(gameChar_x - 9,gameChar_y - 17,9,20,20);
    rect(gameChar_x,gameChar_y - 17,9,20,20);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x + 10,gameChar_y - 67,5,5);

    //front body
    ellipse(gameChar_x - 5,gameChar_y - 27,9,24);
}

//function for game character moving right
function facingRight()
{
    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //eyes
    fill(0);
    ellipse(gameChar_x + 3,gameChar_y - 60,3,3);

    //nose
    fill(255);
    ellipse(gameChar_x + 10,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x + 10,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x + 9, gameChar_y - 53, 2.5,2, 0, PI);

    //back ear
    noStroke();
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 69,10,10);
    ellipse(gameChar_x - 10,gameChar_y - 67,10,10);

    //back body
    ellipse(gameChar_x,gameChar_y - 27,25,40);

    //legs
    rect(gameChar_x - 9,gameChar_y - 17,9,20,20);
    rect(gameChar_x,gameChar_y - 17,9,20,20);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x - 10,gameChar_y - 67,5,5);

    //front body
    ellipse(gameChar_x + 5,gameChar_y - 27,9,24);
}

//function for game character falling facing forwards
function falling()
{
    //back ear
    fill(175,128,79);
    ellipse(gameChar_x  -  10,gameChar_y - 67,10,10);
    ellipse(gameChar_x + 10,gameChar_y - 67,10,10);

    //back body
    ellipse(gameChar_x,gameChar_y - 27,30,40);

    //hands
    rect(gameChar_x + 10,gameChar_y - 40,13,6,10);
    rect(gameChar_x - 23,gameChar_y - 40,13,6,10);

    //legs
    rect(gameChar_x - 2,gameChar_y - 17,25,10,20);
    rect(gameChar_x - 23,gameChar_y - 17,25,10,20);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x - 10,gameChar_y - 67,5,5);
    ellipse(gameChar_x + 10,gameChar_y - 67,5,5);

    //front body
    ellipse(gameChar_x,gameChar_y - 27,18,24);

    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //eyes
    fill(0);
    ellipse(gameChar_x - 4,gameChar_y - 60,3,3);
    ellipse(gameChar_x + 4,gameChar_y - 60,3,3);

    //nose
    fill(255);
    ellipse(gameChar_x,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x - 1, gameChar_y - 53, 2.5,2, 0, PI);
    arc(gameChar_x + 1, gameChar_y - 53, 2.5,2, 0, PI);
}

//game character facing forwards
function facingFront()
{
    //back ear
    fill(175,128,79);
    ellipse(gameChar_x - 10,gameChar_y - 67,10,10);
    ellipse(gameChar_x + 10,gameChar_y - 67,10,10);

    //back body
    ellipse(gameChar_x,gameChar_y - 27,30,40);

    //legs
    rect(gameChar_x - 10,gameChar_y - 17,10,20,20);
    rect(gameChar_x,gameChar_y - 17,10,20,20);

    //front ear
    fill(235,200,178);
    ellipse(gameChar_x - 10,gameChar_y - 67,5,5);
    ellipse(gameChar_x + 10,gameChar_y - 67,5,5);

    //front body
    ellipse(gameChar_x,gameChar_y - 27,18,24);

    //head
    fill(175,128,79);
    ellipse(gameChar_x,gameChar_y - 57,25,25);

    //eyes
    fill(0);
    ellipse(gameChar_x-4,gameChar_y - 60,3,3);
    ellipse(gameChar_x+4,gameChar_y - 60,3,3);

    //nose
    fill(255);
    ellipse(gameChar_x,gameChar_y - 53,7.5,6);

    //button nose
    fill(0);
    ellipse(gameChar_x,gameChar_y - 54,2.5,2);

    //mouth
    noFill();
    stroke(0);
    strokeWeight(1);

    arc(gameChar_x - 1, gameChar_y - 53, 2.5,2, 0, PI);
    arc(gameChar_x + 1, gameChar_y - 53, 2.5,2, 0, PI);
}