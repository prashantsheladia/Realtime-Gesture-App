noseX=0;
difference=0;
rightwristX=0;
leftwristX=0;
noseY=0;
function preload(){

}

function draw(){
background("#808080");
fill("#00FFFF");
stroke("#00FFFF");
square(noseX,noseY,difference);
document.getElementById("square_sides").innerHTML="Width and Height of the square will be "+difference+"px";
}

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(650,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet initialized")
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
}
}