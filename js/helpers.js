let getRandomNumber = size =>{
    
    return Math.floor(Math.random()*size);
    
}

let getDistance = (e, target) => {
    
    let diffx = e.offsetX/*cordenada x del punto donde se ha hecho click*/ - target.x;
    let diffy = e.offsetY/*cordenada y del punto donde se ha hecho click*/ - target.y;
    
    return Math.sqrt((diffx*diffx)+(diffy*diffy));
 
}

let getDistanceHint = distance =>{
        
        if(distance < 30){
           
            return "Boiling Hot!!!";
            
        }else if(distance<40){
            
             return "Really Hot!";
            
        }else if(distance<60){
            
             return "Hot";
            
        }else if(distance<100){
            
             return "Warn";
            
        }else if(distance<180){
            
             return "Cold";
            
        }else if(distance<360){
            
             return "Really Cold";
            
        }else{ 
            
            return "Freezing";
            
        }
        
    }