class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      Spaceship1 = createSprite(750,400);
      Spaceship1.addAnimation("spaceship1",spaceship1);
      Spaceship2 = createSprite(750,450);
      Spaceship2.addAnimation("spaceship2",spaceship2);
     
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      if(allPlayers !== undefined){
        background(bg1 );
        
      }
      drawSprites();
   
  }
    end(){
      console.log("Game Ended");
    }
  }
