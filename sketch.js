var background;
var asteroid;
var rocket;
var gameState = "play";

function preload(){
    background_img = loadImage("background.jpg");
    asteroid_img = loadImage("asteroid.png");
    rocket_Img = loadImage("rocket.png");
}

function setup() {
    createCanvas(800, 800);
    background = createSprite(0, 0, 800, 800);
    background.addImage("background", background_img);
    background.scale = 1;
    rocket = createSprite(400, 400, 100, 100);
    rocket.addImage("rocket", rocket_Img);
    rocket.scale = 0.25;
    asteroidGroup = new Group();
}

function draw() {
    if (gameState == "play"){
        if (keyDown("right_arrow")){
            rocket.x = rocket.x + 5;
        }


        if (keyDown("left_arrow")){
            rocket.x = rocket.x - 5;
        }


        if (keyDown("up_arrow")){
            rocket.y = rocket.y - 5;
        }

        
        if (keyDown("down_arrow")){
            rocket.y = rocket.y + 5;
        }

        if (asteroidGroup.isTouching(rocket)){
            rocket.destroy();
            asteroidGroup.destroyEach();
            gameState = "end";
        }

        asteroid();

    }
        drawSprites();

        if (gameState == "end"){
            stroke("black");
            fill("red");
            textSize(100);
            text("GAME OVER!", 100, 400);
        }

    
}

function asteroid(){
    if (frameCount % 60 == 0){
        var asteroid = createSprite(100, 0, 50, 50);
        asteroid.addImage(asteroid_img);
        asteroid.x = Math.round(random(50, 750));
        asteroid.velocityY = 3;
        asteroid.scale = 0.2
        asteroidGroup.add(asteroid);
    }
}