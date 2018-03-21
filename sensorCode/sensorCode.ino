#define SENSORPINA A0 // x axis
#define SENSORPINB A1 // y axis

unsigned long targetTime=0;       // timing variables
const unsigned long intervall=50; // timing variables
void setup(){
Serial.begin(115200);
}


void loop(){
	if(millis()>=targetTime){
		targetTime= millis()+intervall;
		Serial.println(String(analogRead(SENSORPINA))+','+String(analogRead(SENSORPINB)));
	}
	// TODO: Add reset code on another sensor
}
