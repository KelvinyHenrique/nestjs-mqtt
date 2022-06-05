import { Controller, Inject, Logger } from '@nestjs/common';
import {
  ClientMqtt,
  Ctx,
  EventPattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { ClientMqttService } from './client-mqtt.service';

@Controller()
export class ClientMqttController {
  constructor(
    @Inject('CLIENT_MQTT') private readonly clientMqtt: ClientMqtt,
    private clientService: ClientMqttService,
  ) {}

  @EventPattern('iot')
  getIot(@Payload() payload: string, @Ctx() context: MqttContext) {
    this.clientService.subIot(payload);
    return this.clientMqtt.emit('hall', { hall: 12 });
  }

  @EventPattern('hall')
  handleHall(@Payload() payload) {
    return Logger.warn(payload);
  }
}
