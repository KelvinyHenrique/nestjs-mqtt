import { Test, TestingModule } from '@nestjs/testing';
import { ClientMqttController } from './client-mqtt.controller';
import { ClientMqttService } from './client-mqtt.service';

describe('ClientMqttController', () => {
  let clientMqttController: ClientMqttController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientMqttController],
      providers: [ClientMqttService],
    }).compile();

    clientMqttController = app.get<ClientMqttController>(ClientMqttController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientMqttController.getHello()).toBe('Hello World!');
    });
  });
});
