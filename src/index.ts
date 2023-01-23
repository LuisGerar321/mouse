import robot from "robotjs";

robot.setMouseDelay(2);

const screenSize: {
  width: number;
  height: number;
} = robot.getScreenSize();
const heigth = (screenSize.height/2);
const width = (screenSize.width)/2;

function circleXY(r: number, theta: number) {
  // Convert angle to radians
  theta = (theta-90) * Math.PI/180;

  return {
    x: r*Math.cos(theta) + width,
    y: -r*Math.sin(theta) + heigth
  }
}

function Circle() {
    for (var theta=0; theta<=360; theta += 1) {
      const coord = circleXY(60, theta);
      robot.moveMouse(coord.x, coord.y)
    }
}

for(;;){
  Circle();
}
