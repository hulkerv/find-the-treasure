const weigth = 400;
const heigh = 400;

let target = {
    
    x:getRandomNumber(weigth),
    
    y:getRandomNumber(heigh)
}

let $map= document.getElementById('map');
let $distance = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click', function(e){
    
    clicks++;
    
    let distance = getDistance(e, target);
    
    let distanceHint = getDistanceHint(distance);
    
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    
    if (distance < 20){
        
        alert(`Found the Treasure in ${clicks} clicks`)
        location.reload();
    }
        
})