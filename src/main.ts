import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ClientMqttModule } from './client-mqtt.module';

async function bootstrap() {
  const client = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClientMqttModule,
    {
      transport: Transport.MQTT,
      options: {
        url: 'mqtt://public.mqtthq.com:1883',
      },
    },
  );

  await client
    .listen()
    .then(() => console.warn('Connection successfully'))
    .catch((err) => console.error('An error has occurred! ', err));
}
bootstrap();
