import { PrismaClient } from '@prisma/client';
import { AddItemType } from '../controllers/add-item-controller';

export class AddItemService {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({ category, item, quantity, unity }: AddItemType) {
    const hasItem = await this.prisma.items.findUnique({ where: { item } });

    if (hasItem) {
      throw new Error('Item já cadastrado na lista.');
    }

    const { id: itemId } = await this.prisma.items.create({
      data: { category, item, quantity, unity },
    });

    return { itemId };
  }
}
