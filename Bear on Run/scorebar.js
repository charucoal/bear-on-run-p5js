//THIS .JS FILE CONTAINS THE CODES FOR THE FUNCTION DRAWING THE SCOREBAR (SCORE + NUMBER OF LIVES) ON THE GAME SCREEN

function scoreBar()
{
    noStroke();

    //for loop draws hearts corresponding to the number of lives the game character has
    for(var i = 0; i < lives; i++)
    {
        fill(250, 17, 17);

        ellipse(heart.x_pos - 30 * i,heart.y_pos,11,11);
        ellipse(heart.x_pos + 9 - 30 * i,heart.y_pos,11,11);
        triangle(heart.x_pos - 4.5 - 30 * i,heart.y_pos + 3,
                 heart.x_pos + 13.5 - 30 * i,heart.y_pos + 3,
                 heart.x_pos + 5 - 30 * i,heart.y_pos + 15);
    }

    //updates player's score
    textAlign(LEFT);
    textFont(myFont);
    textSize(20);
    fill(255);

    //if game score is greater than 10, score fill is yellow
    if(game_score > 9)
    {
        fill(245, 219, 20);
    }

    //if game score is greater than 10, score fill is orange
    if(game_score > 19)
    {
        fill(245, 161, 66);
    }

    //if game score is greater than 10, score fill is green
    if(game_score > 29)
    {
        fill(16, 163, 31);
    }

    text("SCORE " + game_score, 10,20);

    //calls the function for rainfall effects
    rainFall()
}