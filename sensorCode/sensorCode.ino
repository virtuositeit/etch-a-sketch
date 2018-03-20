#define SENSORPINA A0
#define SENSORPINB A1
unsigned long targetTime=0;
const unsigned long intervall=50;
void setup(){
Serial.begin(115200);
}


void loop(){
	if(millis()>=targetTime){
		Serial.println(String(analogRead(SENSORPINA))+','+String(analogRead(SENSORPINB)));
		targetTime= millis()+intervall;

	}
}
