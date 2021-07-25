lipsX = 0;
lipsY = 0;

function preload()
{
    lips = loadImage("https://i.postimg.cc/bNyfL47h/clipart-lips-2-removebg-preview.png");
}

function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.position(455, 240);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lips, lipsX, lipsY, 30, 20);
}
 
function click()
{
    save('MyNewLips.png');
}

function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x - 215;
        lipsY = results[0].pose.nose.y - 80;

        console.log("Lips X axsis = " + lipsX);
        console.log("Lips Y axsis = " + lipsY);
    }
}