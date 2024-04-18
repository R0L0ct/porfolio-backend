import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Writeup, Prisma } from '@prisma/client';

@Injectable()
export class WriteupService {
  constructor(private prisma: PrismaService) {}

  async getWriteup(
    writeupWhereUniqueInput: Prisma.WriteupWhereUniqueInput,
  ): Promise<Writeup | null> {
    const writeupFound = await this.prisma.writeup.findUnique({
      where: writeupWhereUniqueInput,
    });
    if (!writeupFound) throw new NotFoundException('Writeup does not exist');
    return writeupFound;
  }

  async getAllWriteups(): Promise<Writeup[]> {
    return this.prisma.writeup.findMany();
  }

  async createWriteup(data: Prisma.WriteupCreateInput): Promise<Writeup> {
    return this.prisma.writeup.create({
      data,
    });
  }

  async updateWriteup(params: {
    where: Prisma.WriteupWhereUniqueInput;
    data: Prisma.WriteupUpdateInput;
  }): Promise<Writeup> {
    const { where, data } = params;
    try {
      return await this.prisma.writeup.update({
        data,
        where,
      });
    } catch (error) {
      throw new NotFoundException('Writeup does not exist');
    }
  }

  async deleteWriteup(where: Prisma.WriteupWhereUniqueInput): Promise<Writeup> {
    try {
      return await this.prisma.writeup.delete({
        where,
      });
    } catch (error) {
      throw new NotFoundException('Writeup does not exist');
    }
  }
}
