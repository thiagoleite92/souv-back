import { PrismaClient } from '@prisma/client';

export class CheckItemService {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(id: string) {
    const item = await this.prisma.items.findUnique({ where: { id } });

    if (!item) {
      throw new Error('Item não encontrado');
    }

    await this.prisma.items.update({
      where: { id },
      data: { isChecked: !item.isChecked },
    });
  }
}
