function preload()
{
 
}

function setup()
{
Canvas = createCanvas(500,400);
Canvas.position(70,200);
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
 image(video,100,80,300,250);

 stroke(50,168,82);
 fill("red");

 circle(40,40,50);
 circle(460,40,50);
 circle(40,360,50);
 circle(460,360,50);

 stroke("red");

 rect(63,27,375,25);
 rect(63,347,375,25);
 rect(27,63,25,275);
 rect(448,63,25,275);
}

function take_snapshot()
{
 save('Project_image.png');
}
