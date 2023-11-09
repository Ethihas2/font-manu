difference = 0
right_x = 0
left_x = 0
function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    canvas = createCanvas(550,550)
    canvas.position(560,150)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is loaded!")
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        left_x = results[0].pose.leftWrist.x
        right_x = results[0].pose.rightWrist.x

        difference = floor(left_x-right_x)
    }
}

function draw(){
    background("#6C91C2")
    document.getElementById("font_size").innerHTML = "Font size of the text will be: "+difference+"px"
    textSize(difference)
    fill("#FFE787")
    text("Ethihas",50,400)
}