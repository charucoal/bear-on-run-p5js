//THIS .JS FILE CONTAINS THE CODES FOR FUNCTIONS DRAWING THE SCENERY ITEMS

//draw sky function
function drawSky()
{
    background(50);
    let gradient  = drawingContext.createLinearGradient(width, 0, width, 200 + skyGrad);
    skyGrad += 0.5; //skyGrad value increases per loop to give the sky a gradual darkening effect

    gradient.addColorStop(0, color(61, 69, 84)); //grey section
    gradient.addColorStop(1, color(161, 185, 230)); //light blue section

    drawingContext.fillStyle = gradient;
    rect(0, 0, width, height); //gradient effect spans the canvas
}

//draw ground function
function drawGround()
{
    //the RGB values decrease after each iteration, forming a darkening effect on the ground
    groundR = max(groundR, 1);
    groundR -= 0.1;

    groundG = max(groundG, 40);
    groundG -= 0.1;

    groundB = max(groundB, 1);
    groundB -= 0.1;

    fill(groundR,groundG,groundB);
    rect(0, floorPos_y, width, height/4);
}

//clouds constructor function
function Cloud(x, y, sizescale)
{
    this.x = x; //x pos of the cloud is in the middle of the cloud vertically
    this.y = y; //y pos of the cloud is in the middle of the cloud horizontally
    this.sizescale = sizescale; //changes the size of the cloud

    //draw function draws clouds when called
    this.draw = function()
    {
        //cloud gradient
        //the RGB values decrease after each iteration, darkening the clouds as the sky turns dark
        cloudR = max(cloudR,145);
        cloudR -= 0.01;

        cloudG = max(cloudG,132);
        cloudG -= 0.01;

        cloudB = max(cloudB,145);
        cloudB -= 0.01;

        noStroke();
        fill(cloudR,cloudG,cloudB);

        this.x -= 0.8; //moves the clouds leftwards

        //if clouds x pos < -500, the clouds are brought to the front of the game world at x pos = 4500
        //this allows for the codes of the clouds to be reused instead of having pushing in several clouds into the clouds array
        if(this.x < -500)
        {
            this.x = 5000;
        }

        //fluff of the cloud
        ellipse(this.x, this.y, 65 * this.sizescale, 65 * this.sizescale);
        ellipse(this.x - 50 * this.sizescale, this.y + 15, 50 * this.sizescale, 50 * this.sizescale);
        ellipse(this.x + 50 * this.sizescale, this.y + 15, 50 * this.sizescale, 50 * this.sizescale);

        //base of the cloud
        rect(this.x - 50 * this.sizescale, this.y + 15, 100 * this.sizescale, 25 * this.sizescale);
    };
}

//draw clouds function
function drawClouds()
{
    for(i in clouds)
    {
        clouds[i].draw();
    }
}

//trees contructor function
function Tree(x) {
    this.x = x; //x pos of tree
    this.y = 350; //y pos of tree

    //draw function draws trees when called
    this.draw = function()
    {
        //tree trunk gradient
        //the RGB values decrease after each iteration, darkening the trees as the sky turns dark
        treeR = max(treeR,181);
        treeR -= 0.01;

        treeG = max(treeG,45);
        treeG -= 0.01;

        treeB = max(treeB, 13);
        treeB -= 0.01;

        //trunk
        fill(105, 41, 24);

        rect(this.x - 5,this.y - 18, 10, 100);

        //leaves
        fill(treeR, treeG, treeB);

        ellipse(this.x, this.y, 90, 90);

        triangle(this.x - 42, this.y - 15,
                 this.x + 42, this.y - 15,
                 this.x, this.y - 140);
    };
}

//draw trees function
function drawTrees()
{
    for(i in trees)
    {
        trees[i].draw();
    }
}

//mountains constructor function
function Mountain(x,y,widthscale,heightscale)
{
    this.x = x; //x pos of mountain
    this.y = y; //y pos of mountain
    this.widthscale = widthscale; //widthscale of mountain
    this.heightscale = heightscale; //heightscale of mountain

    //draw function draws mountains when called
    this.draw = function()
    {
        noStroke();

        //snowcap gradient
        //the RGB values decrease after each iteration, darkening the snowcap as the sky turns dark
        snowCapR = max(snowCapR,196);
        snowCapR -= 0.005;

        snowCapG = max(snowCapG,205);
        snowCapG -= 0.005;

        snowCapB = max(snowCapB,225);
        snowCapB -= 0.005;

        //mountain
        fill(42, 64, 79);
        triangle(this.x, this.y - 333 * this.heightscale,
                     this.x - 100 * this.widthscale, this.y,
                     this.x + 100 * this.widthscale, this.y);

        //snowcap
        fill(snowCapR, snowCapG, snowCapB);
        triangle(this.x, this.y - 333 * this.heightscale,
                 this.x - 60 * this.widthscale, this.y - 133 * this.heightscale,
                 this.x + 60 * this.widthscale, this.y - 133 * this.heightscale);

        triangle(this.x - 60 * this.widthscale, this.y - 134 * this.heightscale,
                 this.x, this.y - 133 * this.heightscale,
                 this.x - 40 * this.widthscale, this.y - 103 * this.heightscale);

        triangle(this.x - 30 * this.widthscale, this.y - 133 * this.heightscale,
                 this.x + 30 * this.widthscale, this.y - 133 * this.heightscale,
                 this.x, this.y - 83 * this.heightscale);

        triangle(this.x, this.y - 133 * this.heightscale,
                 this.x + 60 * this.widthscale, this.y - 134 * this.heightscale,
                 this.x + 40 * this.widthscale, this.y - 103 * this.heightscale);
    };

}

//draw mountains function
function drawMountains()
{
    for(i in mountains)
    {
        mountains[i].draw();
    }
}

//function for rain particles
function Particle(x,y,xSpeed,ySpeed,size,colour)
{
    this.x = x; //x pos of rain particle
    this.y = y; //y pos of rain particle
    this.xSpeed = xSpeed; //speed of rain particle in the x direction
    this.ySpeed = ySpeed; //speed of rain particle in the y direction
    this.size = size; //size of rain particle
    this.colour = colour; //color of rain particle
    this.age = 0; //how old he rain particle

    //draw function draws rain particles when called
    this.drawParticle = function()
    {
        fill(this.colour);
        rect(this.x, this.y,2, this.size);
    };

    //updateParticle function updates the x and y pos of rain particles when called
    //and increases the age of the particle by 1 after each iteration
    this.updateParticle = function()
    {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.age++;
    };
}

//function to emit rain particles
function Emitter(x, y, xSpeed, ySpeed, size, colour)
{
    this.x = x; //x pos of rain emitter
    this.y = y; //y pos of rain emitter
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.colour = colour;

    this.particles = [];  //array to store all the rain particles' values

    this.startParticles = 0;
    this.lifetime = 0;

    //the function addParticle, adds a rain particle object each time the function is called
    //and returns the particle formed through the function
    this.addParticle = function()
    {
        var p = new Particle(
                random(0, width),
                random(this.y-10,this.y+10),
                random(this.xSpeed-1,this.xSpeed+1), random(height),
                random(this.size-4,this.size+4),
                this.colour);

        return p;
    };

    //the function startEmitter enables the rain effect
    this.startEmitter = function(startParticles, lifetime)
    {
        this.startParticles = startParticles;
        this.lifetime = lifetime;

        //start emitter with initial particles
        for(var i = 0; i < startParticles; i++)
        {
            this.particles.push(this.addParticle())
        }
    }

    this.updateParticles = function()
    {
        var deadParticles = 0

        //iterate through particles and draw to the screen
        for(var i = this.particles.length-1 ; i >= 0; i--)
        {
            this.particles[i].drawParticle();
            this.particles[i].updateParticle();

            //removes rain particles whose age is greater than a random value between 0 and this.lifetime
            if(this.particles[i].age > random(0, this.lifetime))
            {
                this.particles.splice(i, 1);
                deadParticles++
            }
        }

        //for each dead particle, there is a new particle added in the particles array
        //this allows for a continuous rain effect
        if(deadParticles > 0)
        {
            for(var i = 0; i < deadParticles; i++)
            {
                this.particles.push(this.addParticle())
            }
        }
    }
}

//function to replace old rain particles with new rain particles
//creates a continuous looping effect
function rainFall()
{
    emit.updateParticles();
}