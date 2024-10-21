import { Items } from '@prisma/client';
import { makeListItemsService } from '../factories/make-list-items-service';
import { FastifyReply, FastifyRequest } from 'fastify';

export const listItemsController = async (
  req: FastifyRequest,
  rep: FastifyReply
): Promise<Items[]> => {
  const listItemsService = makeListItemsService();

  const items = await listItemsService.execute();

  return rep.status(200).send(items);
};
