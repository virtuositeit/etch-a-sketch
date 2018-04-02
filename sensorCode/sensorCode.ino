 //TODO: define other sensor inputs
#define SENSORPINA A0 // x axis
#define SENSORPINB A1 // y axis
#define SENSORFSR A2
unsigned long targetTime=0;
const unsigned long interval=200; //TODO: How fast should we read
int x = 100;
int y = 100;
int new_x = 100;
int new_y = 100;
int fsr = 0;
void setup(){ 
  pinMode(SENSORPINA, INPUT);
  pinMode(SENSORPINB, INPUT);
  pinMode(SENSORFSR, INPUT);
  Serial.begin(115200);
// TODO: begin the serial connection with a baudrate of 115200
}


void loop(){
	if(millis()>=targetTime){

	//TODO: Add other sensor read outs
    //TODO: convert values into a string https://www.arduino.cc/en/Tutorial/StringConstructors
	//TODO: combine them into a string that can be understood by server.js
	//TODO: send the string over serial

		targetTime= millis()+interval;
		Serial.println(analogRead(SENSORPINA));
		new_x = analogRead(SENSORPINA);
        new_y = analogRead(SENSORPINB);
        if (new_x != x || new_y != y) {
			String newPosition = String(new_x, DEC) + "," + String(new_y, DEC);
			x = new_x;
			y = new_y;
		}
		fsr = analogRead(SENSORFSR);
		String newPosition = String(x, DEC) + "," + String(y, DEC);     
		Serial.println(newPosition);	
	}
	
	// TODO: Detect if you want to reset the screen(shake the etch-a-sketch)
  	// TODO: write the reset message(see server.js) to the serial port
  	
  	if (fsr > 30){
		Serial.println("rst");
	}
}