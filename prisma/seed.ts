import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.items.createMany({
    data: [
      {
        item: 'Maçã',
        category: 'fruit',
        quantity: 2,
        unity: 'unity',
      },
      {
        item: 'Pão francês',
        category: 'bakery',
        quantity: 4,
        unity: 'unity',
      },
      {
        item: 'Brócolis',
        category: 'vegetable',
        quantity: 1,
        unity: 'unity',
      },
      {
        item: 'Leite',
        category: 'drink',
        quantity: 2,
        unity: 'liter',
      },
      {
        item: 'Peito de Frango',
        category: 'meat',
        quantity: 2,
        unity: 'kg',
      },
      {
        item: 'Mamão',
        category: 'fruit',
        quantity: 1,
        unity: 'unity',
      },
    ],
  });
};

main();
