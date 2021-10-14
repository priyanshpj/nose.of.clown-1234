nose_y = 0;
nose_x = 0;
function preload() {
    img = loadImage("https://i.postimg.cc/Y2mwpCDq/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png")
}
function setup() {
    canvas = createCanvas(300, 250);
    canvas.position(480, 260);
    video = createCapture(VIDEO);
    video.size(300,250)
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotresult)
}
function draw() {
    image(video, 0, 0, 300, 250);
    image(img, nose_x, nose_y, 60, 30);
}
function modelloaded() {
    console.log("posenet is initialized");
}
function gotresult(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-30;
        nose_y=results[0].pose.nose.y-11;
    }
}