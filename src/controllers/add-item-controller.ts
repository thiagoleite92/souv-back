import { Items } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAddItemService } from '../factories/make-add-item-service';

export type AddItemType = z.infer<typeof addItemBodySchema>;

const addItemBodySchema = z.object({
  quantity: z.number(),
  unity: z.string(),
  item: z.string(),
  category: z.string(),
});

export const addItemController = async (
  req: FastifyRequest,
  rep: FastifyReply
): Promise<Items[]> => {
  const { category, item, quantity, unity } = addItemBodySchema.parse(req.body);

  const addItemService = makeAddItemService();

  const itemId = await addItemService.execute({
    category,
    item,
    quantity,
    unity,
  });

  return rep.status(201).send(itemId);
};
