import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { MenuService } from './menu.service';
import { PrismaClient, Category } from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../services/prisma/prisma.service';

describe('MenuService', () => {
  let service: MenuService;
  let prisma: DeepMockProxy<PrismaClient>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get(MenuService);
    prisma = module.get(PrismaService);
  });

  it('should return a list of itens', async () => {
    const listItens = [
      {
        id: 0,
        name: 'Sorvete',
        description: 'Vivamus semper egestas dui non efficitur.',
        price: 29.99,
        category: Category.DESSERT,
      },
      {
        id: 1,
        name: 'Risoto',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla odio, convallis quis convallis quis, eleifend in nunc. In hac habitasse platea dictumst.',
        price: 109.99,
        category: Category.MAIN_DISH,
      },
    ];
    prisma.menu.findMany.mockResolvedValueOnce(listItens);
    const result = await service.getItensFromMenu();
    expect(result).toEqual(listItens);
  });
});
