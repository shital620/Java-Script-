// esame pageX and page Y hota hai..........yah X and Y value returns karta hai
document.addEventListener('mousemove',function(e)){
    var X=e.pageX;
    var y=e.pageY;
    console.log("pageX: " + x);
    console.log("pageY: " + Y);

}

// screenX abd screen Y hota hai .......yah pura screen ki area ko leta  hai  or client  view port area ka leta hai

document.addEventListener('mousemove',function(e){

    var X=e.screenX;
    var y=e.screenY;
    console.log("screenX: " + x);
    console.log("screenY: " + Y);

    
})
//offsetX and offsetY....... yah andar ke div ya element se X or Y ka value batata hai 

 var target=document.querySelector("#box")
 target.addEventListener('mousemove',function(e){
    var X=e. offsetX;
    var y=e.offsetY;
    console.log(" offsetX: " + x);
    console.log(" offsetY: " + Y);


 }
)
//ctrlKey, shiftKey,altkey metakey.....yah sab key ham press kare to kuch task proform ho 
//yah do hi value return karta hai ture or false
// window key ko meta key bolate hai
 console.clear();
var target=document.querySelector("#box")
target.addEventListener('click',function(e){
    // var ctrl=e.ctrlKey;
    // if(ctrl){
    //     console.log("you press ctrl key")
    // }else{
    //     console.log("you are not  press ctrl key")
    // }


    // var shift=e.shiftKey;
    // if(shift){
    //     console.log("you press shift key")
    // }else{
    //     console.log("you are not  press shift key")
    // }



    // var alt=e.altKey;
    // if(alt){
    //     console.log("you press alt key")
    // }else{
    //     console.log("you are not  press alt key")
    // }


    var meta=e.metaKey;
    if(meta){
        console.log("you press cmetakey")
    }else{
        console.log("you are not  press meta key")
    }


})


// mouse Button........esame three button hote hai that is 
//middle button .....return 1,
//right Button ,...return 2
//left button...return 0

//esame onmousedown ka use karege

var target=document.querySelector("#box")
target.addEventListener('mousedown',function(e){
    var text=e.button;
    var color;
    switch(text){
            
        case 0:
            color="green";
            break;
            case 1:
            color="bule";
            break;
            case 2:
                color="yellow";
                break;
           default:
            color="pink"
            break;

    }
    //console.log(color);
    target.style.backgroundColor=color; 
})


