//getting the blue-square box with it's Id
const blue_square = document.getElementById('blue-square');

//initializing primeary variable
const height =screen.height-100;
const width = screen.width-100;
let topValue= 50; //At the starting box is set 50px from top
let leftValue= 0;
let roundTop = 0;
let roundLeft = 0;

//Function for increasing or decreasing height and width value
const findValue= (value)=>{
    if(value =='top'){
        if(value >=height){
           roundTop++;
        }
        if(roundTop % 2 ==0){
            topValue += 10;
        }
        else{
            topValue -= 10;
        }
        if(topValue <=0){
            roundTop ++;
        }
        return topValue;
    }
    else{
        if(leftValue >=width){
            roundLeft ++;
        }
        if(roundLeft % 2 == 0){
            leftValue += 10;
        }
        else{
            leftValue -=10;
        }
        if(leftValue <=0){
            roundLeft ++;
        }
        return leftValue;  
    }
}

const moveBoxAnimation = ()=>{
    //value checker for top and left
    topValue = findValue('top')
    leftValue = findValue('left')

    //set box position
    blue_square.style.top = '${topValue}px';
    blue_square.left= '${leftValue}px';
}
