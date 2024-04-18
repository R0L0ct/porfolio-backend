import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Writeup as WriteupModel } from '@prisma/client';
import { WriteupService } from 'src/writeups/writeup.service';

@Controller('writeups')
export class WriteupsController {
  constructor(private readonly writeup: WriteupService) {}

  @Get()
  async getAllWriteups(): Promise<WriteupModel[]> {
    return this.writeup.getAllWriteups();
  }
  @Get(':id')
  getWriteup(@Param('id') id: string): Promise<WriteupModel> {
    return this.writeup.getWriteup({ id: +id });
  }

  @Post()
  createWriteup(@Body() data: WriteupModel): Promise<WriteupModel> {
    return this.writeup.createWriteup(data);
  }

  @Put(':id')
  updateWriteup(
    @Param('id') id: string,
    @Body() data: WriteupModel,
  ): Promise<WriteupModel> {
    return this.writeup.updateWriteup({
      where: { id: +id },
      data: data,
    });
  }

  @Delete(':id')
  deleteWriteup(@Param('id') id: string) {
    return this.writeup.deleteWriteup({ id: +id });
  }
}
