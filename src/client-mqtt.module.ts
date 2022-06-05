import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientMqttController } from './client-mqtt.controller';
import { ClientMqttService } from './client-mqtt.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_MQTT',
        transport: Transport.MQTT,
        options: {
          url: 'mqtt://public.mqtthq.com:1883',
        },
      },
    ]),
  ],
  controllers: [ClientMqttController],
  providers: [ClientMqttService],
})
export class ClientMqttModule {}
