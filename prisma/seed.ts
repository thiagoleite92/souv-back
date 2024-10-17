import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.items.createMany({
    data: [
      {
        item: 'Maçã',
        category: 'fruta',
        quantity: 2,
        unity: 'unity',
      },
      {
        item: 'Pão francês',
        category: 'padaria',
        quantity: 4,
        unity: 'unity',
      },
      {
        item: 'Brócolis',
        category: 'legume',
        quantity: 1,
        unity: 'unity',
      },
      {
        item: 'Leite',
        category: 'bebida',
        quantity: 2,
        unity: 'liter',
      },
      {
        item: 'Peito de Frango',
        category: 'carne',
        quantity: 2,
        unity: 'kg',
      },
      {
        item: 'Mamão',
        category: 'fruta',
        quantity: 1,
        unity: 'unity',
      },
    ],
  });
};

main();
