var bg1, bg1img;
var pp, ppimg;
var choice, choiceimg;
var male, maleimg, male1img, female, femaleimg, female1img;
var maleC, femaleC;
var e1, e2, e3, e4, e5, e6;
var e1i, e2i, e3i, e4i, e5i, e6i;
var firea, fireaS, icea, iceaS, poisona, poisonaS;
var fireai, iceai, poisonai;
var fireaiS, iceaiS, poisonaiS;
var bow1, bow1i, bow2, bow2i;
var invisible1;
var equal, equali;
var currency, currencyi;
var a;
var score = 0;
var e1grp, e2grp, e3grp, e4grp, e5grp, e6grp;
var barrier;
var arrow , arrowi;
var arrowGroup;
var FABuy = false;
var IABuy = false;
var PABuy = false;
var restart, restarti;

var END =2;
var CHOOSE = 1;
var PLAY = 0;

var gameState = CHOOSE;

var x = [10,20];
var facreate = false;
var iacreate = false;
var pacreate = false;

var e1life = 5;
var e2life = 5;
var e3life = 5;
var e4life = 5;
var e5life = 5;
var e6life = 5;

var fe1life = 2;
var fe2life = 2;
var fe3life = 2;
var fe4life = 2;
var fe5life = 2;
var fe6life = 2;

var ie1life = 5;
var ie2life = 5;
var ie3life = 5;
var ie4life = 5;
var ie5life = 5;
var ie6life = 5;

var pe1life = 5;
var pe2life = 5;
var pe3life = 5;
var pe4life = 5;
var pe5life = 5;
var pe6life = 5;

function preload()
{
bg1img = loadImage("bg1.jpg");
ppimg = loadImage("pp.png");
maleimg = loadImage("male.png");
femaleimg = loadImage("female.png");
male1img = loadImage("male1.png");
female1img = loadImage("female1.png");
choiceimg = loadImage("bg2.jpg");
e1i = loadImage("e1.png");
e2i = loadImage("e2.png");
e3i = loadImage("e3.png");
e4i = loadImage("e4.png");
e5i = loadImage("e5.png");
e6i = loadImage("e6.png");
fireai = loadImage("firearrow.png");
fireaiS = loadImage("firearrowS.png");
iceai = loadImage("icearrow.png");
iceaiS = loadImage("icearrowS.png");
poisonai = loadImage("poisonarrow.png");
poisonaiS = loadImage("poisonarrowS.png");
bow1i = loadImage("b2.png");
equali = loadImage("equal.png");
currencyi = loadImage("currency.png");
arrowi = loadImage("arrow.png");
restarti = loadImage("restart.png");
}

function setup() 
{
 createCanvas(windowWidth,windowHeight);
 bg1 = createSprite(width/2,height/2);
 bg1.addImage(bg1img);
 bg1.scale = 0.4;

   restart = createSprite(width/2,height/2);
   restart.addImage(restarti);
   restart.visible = false;

    fireaS = createSprite(width-width+25,height-height+25);
    fireaS.addImage(fireaiS);
    fireaS.scale = 0.5;
    equal = createSprite(fireaS.x+40,fireaS.y);
    equal.addImage(equali);
    equal.scale = 0.5;
    currency = createSprite(fireaS.x+130,fireaS.y-3);
    currency.addImage(currencyi);
    currency.scale = 0.35;

    iceaS = createSprite(fireaS.x,fireaS.y+50);
    iceaS.addImage(iceaiS);
    iceaS.scale = 0.5;
    equal = createSprite(iceaS.x+40,iceaS.y);
    equal.addImage(equali);
    equal.scale = 0.5;
    currency = createSprite(iceaS.x+130,iceaS.y-3);
    currency.addImage(currencyi);
    currency.scale = 0.35;

    poisonaS = createSprite(fireaS.x,fireaS.y+100);
    poisonaS.addImage(poisonaiS);
    poisonaS.scale = 0.5;
    equal = createSprite(poisonaS.x+40,poisonaS.y);
    equal.addImage(equali);
    equal.scale = 0.5;
    currency = createSprite(poisonaS.x+130,poisonaS.y-3);
    currency.addImage(currencyi);
    currency.scale = 0.35;

    currency = createSprite(width-width+50,height-100);
    currency.addImage(currencyi);
    currency.scale = 0.5;
    a = createSprite(currency.x+50,currency.y,250,100);
    a.shapeColor = "limegreen";
    a.depth = currency.depth;
    a.depth-=1;
    equal = createSprite(currency.x+60,currency.y);
    equal.addImage(equali);
    equal.scale = 0.7;

 pp = createSprite(width-width+250, height/2);
 pp.addImage(ppimg);

 bow1 = createSprite(pp.x+65,pp.y);
 bow1.addImage(bow1i);

 barrier = createSprite(bow1.x + 45, bow1.y, 5, height);
 barrier.shapeColor = "red";
 barrier.visible = false;

 invisible1 = createSprite(pp.x+50,pp.y,bow1.width,20);
 invisible1.visible = false;

 choice = createSprite(width/2,height/2,width,height);
 choice.addImage(choiceimg);
 choice.scale = 2.5;

 male = createSprite(width-width+300,height/2);
 male.addAnimation("male",maleimg);
 male.addAnimation("happy1", male1img);
 male.scale = 6;

 female = createSprite(width-300,height/2);
 female.addAnimation("female", femaleimg);
 female.addAnimation("happy2", female1img);
 female.scale = 6;

 e1grp = new Group();
 e2grp = new Group();
 e3grp = new Group();
 e4grp = new Group();
 e5grp = new Group();
 e6grp = new Group();
 arrowGroup = new Group();
}

function draw() 
{
 background("black");
 drawSprites();

   

 if(gameState == CHOOSE)
 {
    textSize(50);
    fill("limegreen");
    stroke("black");
    strokeWeight(5);
    textFont("ALGERIAN");
    text("Choose your character",width/2-375,height-150);

    choice.visible = true;

    if(mouseIsOver(male))
  {
    male.changeAnimation("happy1", male1img);
  }
  else
  {
    male.changeAnimation("male", maleimg);
  }

  if(mouseIsOver(female))
  {
    female.changeAnimation("happy2", female1img);
  }
  else
  {
    female.changeAnimation("female", femaleimg);
  }

  if(mousePressedOver(male))
  {
    gameState = PLAY;
    maleC = createSprite(pp.x,pp.y-10);
    maleC.addImage(maleimg);
    x = [10];
  }
  if(mousePressedOver(female))
  {
    gameState = PLAY;
    femaleC = createSprite(pp.x,pp.y-10);
    femaleC.addImage(femaleimg);
    x = [20];
  }
 }

 if(gameState == PLAY)
 {
    pp.y = World.mouseY;
    bow1.y = World.mouseY;
    invisible1.y = World.mouseY;
    bow1.collide(invisible1);
    bow1.collide(pp);
    choice.destroy();
    male.destroy();
    female.destroy();
    barrier.visible = true;

    textSize(35);
    fill("blue");
    stroke("red");
    strokeWeight(3);
    textFont("ALGERIAN");
    text("30",fireaS.x + 65,fireaS.y+10);

    textSize(35);
    fill("blue");
    stroke("red");
    strokeWeight(3);
    textFont("ALGERIAN");
    text("30",iceaS.x + 65,iceaS.y+10);

    textSize(35);
    fill("blue");
    stroke("red");
    strokeWeight(3);
    textFont("ALGERIAN");
    text("30",poisonaS.x + 65,poisonaS.y+10);

    text(""+ score, currency.x + 100,currency.y+16);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("Buy Fire Arrow",width/width,height-height+200);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("by pressing 1,",width/width,height-height+230);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("Ice Arrow by",width/width,height-height+260);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("pressing 2 and",width/width,height-height+290);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("Poison Arrow by 3",width/width,height-height+320);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("as 1 shot of",width/width,height-height+350);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("simple arrows is",width/width,height-height+380);

    textSize(20);
    fill("black");
    stroke("red");
    textFont("Comic Sans MS");
    text("not enough!",width/width,height-height+410);

    textSize(20);
    fill("black");
    stroke("red");
    strokeWeight(3);
    textFont("Comic Sans MS");
    text("Press space to shoot",width/2-40,height-height+40);
    
    
    if(x == 10)
    {
      maleC.y = World.mouseY;
      maleC.collide(pp);
    }
    if(x == 20)
    {
      femaleC.y = World.mouseY;
      femaleC.collide(pp);
    }
    
    var select_monster = Math.round(random(1,6));
  
    if (World.frameCount % 150 == 0 && gameState != END) {
      switch(select_monster ){
        case 1: spawn_e1()
        break;
        case 2:spawn_e2()
        break;
        case 3:spawn_e3()
        break;
        case 4:spawn_e4()
        break;
        case 5:spawn_e5()
        break;
        case 6:spawn_e6()
        break;
        default:break;
      }
    }

    if(keyWentDown("space") && FABuy==false && IABuy == false && PABuy == false)
    {
      createArrow();
    }

    if (keyWentDown("1") && score >= 30)
    {
      FABuy=true;
      score -= 30;
      
    }
    if(keyWentDown("space") && FABuy==true)
    {
      FABuy=false;
      createFireArrow();
      facreate = true;
    }
    
    if (keyWentDown("2") && score >= 30)
    {
      IABuy=true;
      score -= 30;
     
    }

    if(keyWentDown("space") && IABuy==true)
    {
      IABuy=false;
      createIceArrow();
      iacreate = true;
    }

    if (keyWentDown("3") && score >= 30)
    {
      PABuy=true;
      score -= 30;
      
    }
    
    if(keyWentDown("space") && PABuy==true)
    {
      PABuy=false;
      createPoisonArrow();
      pacreate = true;
    }

  if(facreate == true)
  {
    if(e1grp.isTouching(firea))
    {
      e1grp.destroyEach();
      firea.destroy();
      facreate = false;
      score += 1 + 10;
    }
    if(e2grp.isTouching(firea))
    {
      e2grp.destroyEach();
      firea.destroy();
      facreate = false;
      score += 3 + 10;
    }
    if(e3grp.isTouching(firea))
    {
      e3grp.destroyEach();
      firea.destroy();
      facreate = false;
      score += 5 + 10;
    }
    if(e4grp.isTouching(firea))
    {
      e4grp.destroyEach();
      firea.destroy();
      facreate = false;
      score += 9 + 10;
    }
    if(e5grp.isTouching(firea))
    {
      e5grp.destroyEach();
      firea.destroy();
      facreate = false;
      score += 12 + 10;
    }
     if(e6grp.isTouching(firea))
     {
       e6grp.destroyEach();
       firea.destroy();
       facreate = false;
       score += 15 + 10;
     }
  }

  if(iacreate == true)
  {
    
    if(e1grp.isTouching(icea))
    {
      e1grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 1 + 10;
    }
    if(e2grp.isTouching(icea))
    {
      e2grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 3 + 10;
    }
    if(e3grp.isTouching(icea))
    {
      e3grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 5 + 10;
    }
    if(e4grp.isTouching(icea))
    {
      e4grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 9 + 10;
    }
    if(e5grp.isTouching(icea))
    {
      e5grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 12 + 10;
    }
    if(e6grp.isTouching(icea))
    {
      e6grp.destroyEach();
      icea.destroy();
      iacreate = false;
      score += 15 + 10;
    }

  }

  if(pacreate == true)
  {
    
    if(e1grp.isTouching(poisona))
    {
      e1grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 1 + 10;
    }
    if(e2grp.isTouching(poisona))
    {
      e2grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 3 + 10;
    }
    if(e3grp.isTouching(poisona))
    {
      e3grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 5 + 10;
    }
    if(e4grp.isTouching(poisona))
    {
      e4grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 9 + 10;
    }
    if(e5grp.isTouching(poisona))
    {
      e5grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 12 + 10;
    }
    if(e6grp.isTouching(poisona))
    {
      e6grp.destroyEach();
      poisona.destroy();
      pacreate = false;
      score += 15 + 10;
    }
  }    

  if(arrowGroup.isTouching(e1grp))
  {
    if (e1life==1)
    {
      e1life=5;
      e1grp.destroyEach();
      score += 1;
    }
    arrowGroup.destroyEach();
    
    e1life -=1;
  }
  
  if(arrowGroup.isTouching(e2grp))
  {
    if (e2life==1)
    {
      e2life=5;
      e2grp.destroyEach();
      score += 3;
    }
    arrowGroup.destroyEach();
    
    e2life -= 1;
  }

  if(arrowGroup.isTouching(e3grp))
  {
    if (e3life==1)
    {
      e3life=5;
      e3grp.destroyEach();
      score += 5;
    }
    arrowGroup.destroyEach();
     
    e3life -=1;  
  }

  if(arrowGroup.isTouching(e4grp))
  {
    if (e4life==1)
    {
      e4life=5;
      e4grp.destroyEach();
      score += 9;
    }
    arrowGroup.destroyEach();
    
    e4life -=1;
  }

  if(arrowGroup.isTouching(e5grp))
  {
    if (e5life==1)
    {
      e5life=5;
      e5grp.destroyEach();
      score += 12;
    }
    arrowGroup.destroyEach();
    
    e5life -=1;
  }

  if(arrowGroup.isTouching(e6grp))
  {
    if (e6life==1)
    {
      e6life=5;
      e6grp.destroyEach();
      score += 15;
    }
    arrowGroup.destroyEach();
    
    e6life -=1;
  }
  
 }  
 if(e1grp.isTouching(barrier) || e2grp.isTouching(barrier) || e3grp.isTouching(barrier) || e4grp.isTouching(barrier) || e5grp.isTouching(barrier) || e6grp.isTouching(barrier))
 {
   gameState = END;
   restart.visible = true;
   e1grp.destroyEach();
   e2grp.destroyEach();
   e3grp.destroyEach();
   e4grp.destroyEach();
   e5grp.destroyEach();
   e6grp.destroyEach();
 }

 if(gameState == END)
{
  if(mousePressedOver(restart) && restart.visible == true)
  {
    gameState = PLAY;
    restart.visible = false;
    score = 0;
  }
  
}
}



function spawn_e1()
{
 e1 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e1.addImage(e1i);
 e1.velocityX = Math.round(random(-5,-4));
 e1.lifetime = 500;
 e1grp.add(e1);
}

function spawn_e2()
{
 e2 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e2.addImage(e2i);
 e2.velocityX = Math.round(random(-6,-5));
 e2.lifetime = 500;
 e2grp.add(e2);
}

function spawn_e3()
{
 e3 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e3.addImage(e3i);
 e3.velocityX = Math.round(random(-7,-6));
 e3.lifetime = 500;
 e3grp.add(e3);
}

function spawn_e4()
{
 e4 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e4.addImage(e4i);
 e4.velocityX = Math.round(random(-8,-7));
 e4.lifetime = 500;
 e4grp.add(e4);
}

function spawn_e5()
{
 e5 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e5.addImage(e5i);
 e5.velocityX = Math.round(random(-9,-8));
 e5.lifetime = 500;
 e5grp.add(e5);
}

function spawn_e6()
{
 e6 = createSprite(width,Math.round(random(height-height+75,height-75)));
 e6.addImage(e6i);
 e6.velocityX = Math.round(random(-10,-9));
 e6.lifetime = 300;
 e6grp.add(e6);
}

function createArrow() 
{
  arrow= createSprite(bow1.x,bow1.y);
  arrow.addImage(arrowi);
  arrow.velocityX = 50;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function createFireArrow()
{
    
  firea= createSprite(bow1.x,bow1.y);
  firea.addImage(fireai);
  firea.scale = 0.7;
  firea.velocityX = 50;
  firea.lifetime = 300;
}

function createIceArrow()
{
    
  icea= createSprite(bow1.x,bow1.y);
  icea.addImage(iceai);
  icea.scale = 0.7;
  icea.velocityX = 50;
  icea.lifetime = 300;
}

function createPoisonArrow()
{
    
  poisona= createSprite(bow1.x,bow1.y);
  poisona.addImage(poisonai);
  poisona.scale = 0.7;
  poisona.velocityX = 50;
  poisona.lifetime = 300;
}

