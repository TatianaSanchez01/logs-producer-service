import { Module } from '@nestjs/common';
import { LogsController } from './logs/logs.controller';
import { KafkaModule } from './kafka/kafka.module';
import { LogsService } from './logs/logs.service';

@Module({
  imports: [KafkaModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class AppModule {}
