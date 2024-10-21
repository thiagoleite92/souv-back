import { PrismaClient } from '@prisma/client';
import { AddItemService } from '../services/add-item-service';

export const makeAddItemService = () => {
  const prisma = new PrismaClient();

  return new AddItemService(prisma);
};
