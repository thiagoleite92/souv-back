import { PrismaClient } from '@prisma/client';
import { ListItemsService } from '../services/list-items-service';

export const makeListItemsService = () => {
  const prisma = new PrismaClient();

  return new ListItemsService(prisma);
};
