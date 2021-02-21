class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement('h3');
        this.title=createElement('h2');  
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
       
        this.title.html("Car Racing Game");
       this.title.position(displayWidth/2-50,displayHeight/2-300);
        this.input.position(displayWidth/2-100,displayHeight/2-220);
       this. button.position(displayWidth/2-250,displayHeight/2-220);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name=this.input.value();
playerCount+=1;
player.index=playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html("Hello"+player.name);
this.greeting.position(displayWidth/2-230,displayHeight/2-40);
})
    }
}