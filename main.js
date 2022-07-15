canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d")
var mouseEvent="empty";
var last_position_of_y;
var last_position_of_x;

color="black";
line_width=1;
circle_radius = 10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){

    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
    mouseEvent="mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_pos_mouseX=e.clientX-canvas.offsetLeft
    current_pos_mouseY=e.clientY-canvas.offsetTop

    if (mouseEvent == "mouseDown"){
 
       console.log("Last Position of x and y coordinates = ");
       console.log("x= "+ last_position_of_x + "y= " + last_position_of_y);

       ctx.moveTo(last_position_of_x,last_position_of_y);

       console.log("Current Position of x and y coordinates = ");
       console.log("x= "+ current_pos_mouseX + "y= " + current_pos_mouseY);

       ctx.beginPath();

       ctx.strokeStyle=color;
       ctx.lineWidth=line_width;

       ctx.arc(current_pos_mouseX, current_pos_mouseY , radius, 0, 1 * Math.PI);

       ctx.stroke();

    }
    last_position_of_x=current_pos_mouseX;
    last_position_of_y=current_pos_mouseY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
