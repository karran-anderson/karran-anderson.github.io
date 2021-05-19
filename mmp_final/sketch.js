var b = p5.board('COM3', 'arduino');
var led;

function setup(){
led = b.pin(13, 'LED');
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    led.on();
	console.log('left arrow pressed');
  } else if (keyCode === RIGHT_ARROW) {
    led.off();
	console.log('right arrow pressed');
  } else if (keyCode === UP_ARROW){
    led.blink();
	console.log('Hello, World!'); // <- here!
  } else if (keyCode === DOWN_ARROW) {
    led.noBlink();
	console.log('down arrow pressed OFF');
  }
}