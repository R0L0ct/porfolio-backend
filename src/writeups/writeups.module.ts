import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WriteupService } from './writeup.service';
import { WriteupsController } from './writeups.controller';

@Module({
  imports: [PrismaModule],
  controllers: [WriteupsController],
  providers: [WriteupService],
})
export class WriteupsModule {}
