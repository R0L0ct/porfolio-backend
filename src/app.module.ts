import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WriteupsModule } from './writeups/writeups.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WriteupsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
