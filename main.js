function setup() {
    c1=createCanvas(400,400);
    c1.center()
    v1=createCapture(VIDEO)
    v1.hide()
    myModel=ml5.poseNet(v1,modelLoaded)
    myModel.on('pose',gotPoses)

}

function preload(){
    moustacheimg=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}


function draw() {
    image(v1,0,0,400,400)

    image(moustacheimg,nosex,nosey,100,20)
}
function modelLoaded(){
    {console.log("Posenet has loded")}
}
nosex=0
nosey=0
function gotPoses(results){
    if(results.length>0)
    nosex=results[0].pose.nose.x=-190 
    nosey=results[0].pose.nose.y=-50
    console.log("X position of my nose is ",nosex)
    console.log("Y position of my nose is ",nosey)

}