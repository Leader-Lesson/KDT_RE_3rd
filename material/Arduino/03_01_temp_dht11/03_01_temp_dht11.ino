#include "DHT.h"

#define DHTPIN 7
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  delay(2000); // 측정 대기 시간
  float h = dht.readHumidity(); // 습도 측정
  float c = dht.readTemperature(); // 온도 측정(섭씨)
  float f = dht.readTemperature(true);  // 온도 측정(화씨)

  if (isnan(h) || isnan(c) || isnan(f)) { // 측정 실패 시 값을 무시하는 코드
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: "); // 온습도의 값을 시리얼 모니터에 출력
  Serial.print(h);
  Serial.print("% Temperature: ");
  Serial.print(c);
  Serial.print("°C ");
  Serial.print(f);
  Serial.println("°F ");
}
