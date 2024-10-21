import { Items } from '@prisma/client';
import { makeListItemsService } from '../factories/make-list-items-service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCheckItemService } from '../factories/make-check-item-service';

export const checkItemController = async (
  req: FastifyRequest,
  rep: FastifyReply
): Promise<Items[]> => {
  const itemIdParamSchema = z.object({
    itemId: z.string(),
  });

  const { itemId } = itemIdParamSchema.parse(req.params);

  const checkItemService = makeCheckItemService();

  const items = await checkItemService.execute(itemId);

  return rep.status(200).send(items);
};
