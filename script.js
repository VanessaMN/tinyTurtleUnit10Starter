TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(x){
right(45);
forward(x);
right(90);
forward(x);
right(135);
forward(x);
}
function house(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(45);
forward(35);
right(90);
forward(35);
}
function pentagon(){
forward(35);
right(72);
forward(35);
right(72);
forward(35);
right(72);
forward(35);
right(72);
forward(35);
}
function hexagon(){
forward(20);
right(60);
forward(20);
right(60);
forward(20);
right(60);
forward(20);
right(60);
forward(20);
right(60);
forward(20);
}
function shape(v, m){
forward(v);
right(m);
forward(v);
right(m);
forward(v);
right(m);
forward(v);
right(m);
forward(v);
right(m);
forward(v);
right(m);
forward(v);
right(m);
}
// Type your function call below
//square(20);
stamp();
//triangle(25);
//house();
//pentagon();
//hexagon();
shape(30,60);