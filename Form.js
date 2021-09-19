class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      //this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton("Reset")
    }
    hide(){
     // this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("SPACE ASTERIODS");
      this.title.position(700,200);
      this.reset.position(1200,100)
      this.input.position(700,400);
      this.button.position(750,400);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
      })
    }
  }