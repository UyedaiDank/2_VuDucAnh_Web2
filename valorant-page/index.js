var xpos = 1, ypos = 1, count = 0;
var currentFrame;
var direction = ">";
currentFrame = $(".gun-sprite")[0];
const height = -19.3125;
const left = -14.125;

setInterval(function(){
    if(xpos === 0 || xpos === 8){
        currentFrame.style.top = (height*ypos) + "rem";        
        ypos++;  
        count++;

        switch(direction){
            case ">":
                direction = "<";
                break;
            case "<":
                direction = ">";
                break;
        }
    }

    currentFrame.style.left = (left*xpos) + "rem";
    count++;

    switch(direction){
        case ">":
            xpos++; 
            break;
        case "<":
            xpos--;
            break;
    }

    if(count === 48){
        count = 0;
        direction = ">";
        currentFrame.style.top = "0rem";
        currentFrame.style.left = "0rem";
        xpos = 1;
        ypos = 1;
    }
}, 120);