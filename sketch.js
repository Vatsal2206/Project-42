const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var thunderS,rainS;
var engine,world;
var thunder,rand;
var man;
var t1,t2,t3,t4;
var dropArray = [];
var maxDrops = 100;

function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");

    thunderS = loadSound("thunder.wav");
    rainS = loadSound("rain.mp3");
    
}

function setup(){
    createCanvas(700,700)

    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(350,460)

    if(frameCount % 50 === 0){
        
      for(var p = 0; p < maxDrops;p++){
        dropArray.push(new Drop(random(0,700),random(0,700),10))
    }

    }


    
   
    
}

function draw(){
    background("black")

    if(frameCount === 1){
        rainS.play();
    }

    if(frameCount % 300 === 0){
        rainS.play();
    }

    Engine.update(engine);

    fill(225)
    text("SOUND ALERT!!",120,650)
    
    for(var p = 0 ; p < maxDrops ; p++){
        dropArray[p].updateY();
        dropArray[p].display();

       }

    man.display();

    if(frameCount % 200 === 0){
        thunder = createSprite(random(0,700),0);

        thunderS.play();

        rand = Math.round(1,4)

        switch(rand){
            case 1 : thunder.addImage(t1);
                     break;

            case 2 : thunder.addImage(t2);
                     break;

            case 3 : thunder.addImage(t3);
                     break;  
                     
            case 4 : thunder.addImage(t4);
                     break;
        }

        thunder.scale = 1;
        thunder.lifetime = 12;

        

    }

    
    drawSprites();   
}   

