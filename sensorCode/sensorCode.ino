#define SENSORPINA A0
#define SENSORPINB A1
unsigned long targetTime=0;
const unsigned long intervall=250;
void setup(){
Serial.begin(115200);
}


void loop(){
	if(millis()>=targetTime){
		targetTime= millis()+intervall;
		Serial.println(analogRead(SENSORPINA)+','+analogRead(SENSORPINB));
	}
}
