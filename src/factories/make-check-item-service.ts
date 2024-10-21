import { PrismaClient } from '@prisma/client';
import { ListItemsService } from '../services/list-items-service';
import { CheckItemService } from '../services/check-item-service';

export const makeCheckItemService = () => {
  const prisma = new PrismaClient();

  return new CheckItemService(prisma);
};
