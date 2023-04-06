import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VkController } from './vk/vk.controller';

@Module({
  imports: [],
  controllers: [AppController, VkController],
  providers: [AppService],
})
export class AppModule {}
