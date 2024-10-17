import { PrismaClient } from '@prisma/client';

export class ListItemsService {
  constructor(private readonly prisma: PrismaClient) {}

  async execute() {
    return this.prisma.items.findMany();
  }
}
